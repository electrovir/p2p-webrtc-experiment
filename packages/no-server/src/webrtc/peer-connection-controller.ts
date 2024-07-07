import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assertDefined, isRunTimeType} from 'run-time-assertions';
import {defineTypedCustomEvent, ListenTarget} from 'typed-event-target';

export class PeerMessageReceivedEvent extends defineTypedCustomEvent<string>()(
    'peer-message-received',
) {}

export enum PeerConnectionStatus {
    Connecting = 'connecting',
    Connected = 'connected',
    Closing = 'closing',
    Closed = 'closed',
}

export class PeerConnectionStatusEvent extends defineTypedCustomEvent<PeerConnectionStatus>()(
    'peer-connection-status',
) {}

export class PeerConnectionController extends ListenTarget<
    PeerMessageReceivedEvent | PeerConnectionStatusEvent
> {
    private offer: undefined | Readonly<RTCSessionDescriptionInit>;
    private answer: undefined | Readonly<RTCSessionDescriptionInit>;
    private dataChannel: undefined | Readonly<RTCDataChannel>;
    private connection: undefined | Readonly<RTCPeerConnection>;

    public async createOffer(): Promise<RTCSessionDescriptionInit> {
        if (this.offer || this.dataChannel) {
            throw new Error('offer already created');
        }

        const deferredIceCandidatePromise = createDeferredPromiseWrapper();

        const iceCandidateListener = (event: RTCPeerConnectionIceEvent) => {
            assertDefined(this.connection);
            if (!event.candidate) {
                deferredIceCandidatePromise.resolve();
                this.connection.removeEventListener('icecandidate', iceCandidateListener);
            }
        };

        this.connection = new RTCPeerConnection();
        this.connection.addEventListener('icecandidate', iceCandidateListener);
        this.handleDataChannel(this.connection.createDataChannel('chat'));
        await this.connection.setLocalDescription(await this.connection.createOffer());

        await deferredIceCandidatePromise.promise;

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

    public async createAnswer(rawOffer: string | Readonly<RTCSessionDescriptionInit>) {
        if (this.offer || this.answer || this.dataChannel) {
            throw new Error('offer already accepted');
        }

        const offer: RTCSessionDescriptionInit = isRunTimeType(rawOffer, 'string')
            ? JSON.parse(rawOffer)
            : rawOffer;

        this.connection = new RTCPeerConnection();
        this.connection.addEventListener('datachannel', (event) => {
            this.handleDataChannel(event.channel);
        });

        await this.connection.setRemoteDescription(offer);
        const answer = await this.connection.createAnswer();
        await this.connection.setLocalDescription(answer);

        this.offer = offer;
        this.answer = answer;
        return answer;
    }

    public sendMessage(message: string) {
        assertDefined(this.dataChannel);
        this.dataChannel.send(message);
    }

    private handleDataChannel(dataChannel: Readonly<RTCDataChannel>) {
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
}
