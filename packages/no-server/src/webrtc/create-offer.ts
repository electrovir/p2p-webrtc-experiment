import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assertDefined} from 'run-time-assertions';

export async function createWebRtcOffer() {
    const {icePromise, peerConnection} = createPeerConnection();
    const dataChannel = peerConnection.createDataChannel('chat');

    dataChannel.addEventListener('open', (event) => {
        console.log('connected');
    });
    dataChannel.addEventListener('message', (event) => {
        console.log('message', event.data);
    });
    await peerConnection.setLocalDescription(await peerConnection.createOffer());

    /**
     * This must be awaited because what it's waiting for will actually mutate the local
     * description. We need that mutation to be included in the offer displayed to the user.
     */
    await icePromise;

    const offer = peerConnection.localDescription;

    assertDefined(offer);

    return {offer, peerConnection};
}

export async function acceptAnswer(
    connection: Readonly<RTCPeerConnection>,
    answer: Readonly<RTCSessionDescriptionInit>,
) {
    await connection.setRemoteDescription(answer);
}

export function createPeerConnection() {
    const deferredIceCandidatePromise = createDeferredPromiseWrapper();

    const peerConnection = new RTCPeerConnection();
    peerConnection.addEventListener('icecandidate', (event) => {
        if (!event.candidate) {
            deferredIceCandidatePromise.resolve();
        }
    });
    peerConnection.addEventListener('connectionstatechange', (event) => {
        console.log(event);
    });
    return {peerConnection, icePromise: deferredIceCandidatePromise.promise};
}
