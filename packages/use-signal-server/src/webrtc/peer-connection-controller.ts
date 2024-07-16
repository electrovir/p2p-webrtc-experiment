import {addPrefix, createDeferredPromiseWrapper} from '@augment-vir/common';
import {answerShape, offerShape, RtcAnswer, RtcOffer} from '@evir/common/src/signal-server';
import {assertValidShape} from 'object-shape-tester';
import {assertDefined, isRunTimeType} from 'run-time-assertions';
import {defineTypedCustomEvent, ListenTarget} from 'typed-event-target';
import {parsePeerMessageData, PeerMessageData} from './peer-message';

export class PeerMessageDataEvent extends defineTypedCustomEvent<Readonly<PeerMessageData>>()(
    'peer-message-data',
) {}

export class PeerConnectionEvent extends defineTypedCustomEvent<boolean>()('peer-connection') {}

type PeerConnectionEvents = PeerMessageDataEvent | PeerConnectionEvent;

export function formatStunServerUrls(stunServerUrls: ReadonlyArray<string>) {
    return stunServerUrls.map((stunServerUrl) => {
        return {
            urls: addPrefix({value: stunServerUrl, prefix: 'stun:'}),
        };
    });
}

export class PeerConnectionController extends ListenTarget<PeerConnectionEvents> {
    private dataChannel: undefined | Readonly<RTCDataChannel>;
    private connection: undefined | Readonly<RTCPeerConnection>;

    public async createOffer(stunServerUrls: ReadonlyArray<string>): Promise<RtcOffer> {
        const candidatePromise = this.createConnection(stunServerUrls);
        assertDefined(this.connection);
        this.handleDataChannel(this.connection.createDataChannel('chat'));
        await this.connection.setLocalDescription(await this.connection.createOffer());

        await candidatePromise;

        const offer = this.connection.localDescription;
        assertValidShape(offer, offerShape);

        return offer;
    }

    public async acceptAnswer(rawAnswer: string | Readonly<RTCSessionDescriptionInit>) {
        const answer = isRunTimeType(rawAnswer, 'string') ? JSON.parse(rawAnswer) : rawAnswer;
        assertDefined(this.connection);
        assertValidShape(answer, answerShape);
        this.connection.setRemoteDescription(answer);
    }

    public async createAnswer(
        rawOffer: string | Readonly<RTCSessionDescriptionInit>,
        stunServerUrls: ReadonlyArray<string>,
    ): Promise<RtcAnswer> {
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

        if (stunServerUrls.length) {
            await candidatePromise;
        }

        const answer = this.connection.localDescription;

        assertValidShape(answer, answerShape);

        return answer;
    }

    public sendMessage(data: Readonly<PeerMessageData>) {
        assertDefined(this.dataChannel);
        this.dataChannel.send(JSON.stringify(data));
    }

    private handleDataChannel(dataChannel: Readonly<RTCDataChannel>) {
        this.dataChannel?.close();
        this.dataChannel = dataChannel;
        this.dataChannel.addEventListener('open', () => {
            this.dispatch(new PeerConnectionEvent({detail: true}));
        });
        this.dataChannel.addEventListener('closing', () => {
            this.dispatch(new PeerConnectionEvent({detail: false}));
        });
        this.dataChannel.addEventListener('message', (event) => {
            this.dispatch(new PeerMessageDataEvent({detail: parsePeerMessageData(event.data)}));
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
