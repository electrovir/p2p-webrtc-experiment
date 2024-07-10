import {addPrefix, createDeferredPromiseWrapper} from '@augment-vir/common';
import {assertDefined, isRunTimeType} from 'run-time-assertions';
import {defineTypedCustomEvent, ListenTarget} from 'typed-event-target';

export class PeerMessageReceivedEvent extends defineTypedCustomEvent<string>()(
    'peer-message-received',
) {}

export class PeerMessageSentEvent extends defineTypedCustomEvent<string>()('peer-message-sent') {}

export enum PeerConnectionStatus {
    Connecting = 'connecting',
    Connected = 'connected',
    Closing = 'closing',
    Closed = 'closed',
}

export class PeerConnectionStatusEvent extends defineTypedCustomEvent<PeerConnectionStatus>()(
    'peer-connection-status',
) {}

export type PeerConnectionEvents =
    | PeerMessageSentEvent
    | PeerMessageReceivedEvent
    | PeerConnectionStatusEvent;

export function formatStunServerUrls(stunServerUrls: ReadonlyArray<string>) {
    return stunServerUrls.map((stunServerUrl) => {
        return {
            urls: addPrefix({value: stunServerUrl, prefix: 'stun:'}),
        };
    });
}

export class PeerConnectionController extends ListenTarget<PeerConnectionEvents> {
    private offer: undefined | Readonly<RTCSessionDescriptionInit>;
    private answer: undefined | Readonly<RTCSessionDescriptionInit>;
    private dataChannel: undefined | Readonly<RTCDataChannel>;
    private connection: undefined | Readonly<RTCPeerConnection>;

    public async createOffer(
        stunServerUrls: ReadonlyArray<string>,
    ): Promise<RTCSessionDescriptionInit> {
        if (this.offer || this.dataChannel) {
            throw new Error('offer already created');
        }

        const candidatePromise = this.createConnection(stunServerUrls);
        assertDefined(this.connection);
        this.handleDataChannel(this.connection.createDataChannel('chat'));
        await this.connection.setLocalDescription(await this.connection.createOffer());

        await candidatePromise;

        const offer = this.connection.localDescription;
        assertDefined(offer);

        this.offer = offer;
        return this.offer;
    }

    public async acceptAnswer(rawAnswer: string | Readonly<RTCSessionDescriptionInit>) {
        this.answer = isRunTimeType(rawAnswer, 'string') ? JSON.parse(rawAnswer) : rawAnswer;
        assertDefined(this.connection);
        assertDefined(this.answer);
        this.connection.setRemoteDescription(this.answer);
    }

    public async createAnswer(
        rawOffer: string | Readonly<RTCSessionDescriptionInit>,
        stunServerUrls: ReadonlyArray<string>,
    ) {
        if (this.offer || this.answer || this.dataChannel) {
            throw new Error('offer already accepted');
        }

        const offer: RTCSessionDescriptionInit = isRunTimeType(rawOffer, 'string')
            ? JSON.parse(rawOffer)
            : rawOffer;

        const candidatePromise = this.createConnection(stunServerUrls);
        assertDefined(this.connection);
        this.connection.addEventListener('datachannel', (event) => {
            this.handleDataChannel(event.channel);
        });

        await this.connection.setRemoteDescription(offer);
        await this.connection.setLocalDescription(await this.connection.createAnswer());

        console.log('waiting');
        if (stunServerUrls.length) {
            await candidatePromise;
        }
        console.log('done waiting');

        const answer = this.connection.localDescription;

        assertDefined(answer);

        this.offer = offer;
        this.answer = answer;
        return answer;
    }

    public sendMessage(message: string) {
        assertDefined(this.dataChannel);
        this.dataChannel.send(message);
        this.dispatch(new PeerMessageSentEvent({detail: message}));
    }

    private handleDataChannel(dataChannel: Readonly<RTCDataChannel>) {
        if (this.dataChannel) {
            throw new Error('data channel already created');
        }
        this.dataChannel = dataChannel;
        this.dispatch(new PeerConnectionStatusEvent({detail: PeerConnectionStatus.Connecting}));
        this.dataChannel.addEventListener('open', () => {
            this.dispatch(new PeerConnectionStatusEvent({detail: PeerConnectionStatus.Connected}));
        });
        this.dataChannel.addEventListener('closing', () => {
            this.dispatch(new PeerConnectionStatusEvent({detail: PeerConnectionStatus.Closing}));
        });
        this.dataChannel.addEventListener('close', () => {
            this.dispatch(new PeerConnectionStatusEvent({detail: PeerConnectionStatus.Closed}));
        });
        this.dataChannel.addEventListener('message', (event) => {
            this.dispatch(new PeerMessageReceivedEvent({detail: event.data}));
        });
    }

    private createConnection(stunServerUrls: ReadonlyArray<string>) {
        if (this.connection) {
            throw new Error('Connection already created!');
        }

        const deferredIceCandidatePromise = createDeferredPromiseWrapper();
        const iceCandidateListener = (event: RTCPeerConnectionIceEvent) => {
            // all candidates are done
            if (!event.candidate) {
                assertDefined(this.connection);
                deferredIceCandidatePromise.resolve();
                this.connection.removeEventListener('icecandidate', iceCandidateListener);
            }
        };

        this.connection = new RTCPeerConnection({
            iceServers: formatStunServerUrls(stunServerUrls),
        });
        this.connection.addEventListener('icecandidate', iceCandidateListener);

        /**
         * This must be awaited so the candidate list can finish populating before we present the
         * offer to the user.
         */
        return deferredIceCandidatePromise.promise;
    }
}
