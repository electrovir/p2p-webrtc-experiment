import {createPeerConnection} from './create-offer';

export async function acceptWebRtcOffer(
    offer: Readonly<RTCSessionDescriptionInit>,
): Promise<RTCSessionDescriptionInit> {
    const {peerConnection} = createPeerConnection();

    peerConnection.addEventListener('datachannel', (event) => {
        event.channel.addEventListener('open', () => {
            console.log('connected');
        });
        event.channel.addEventListener('message', (event) => {
            console.log('message', event.data);
        });
    });

    await peerConnection.setRemoteDescription(offer);
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    return answer;
}
