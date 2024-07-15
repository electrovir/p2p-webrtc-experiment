import {
    MultiPeerConnectionController,
    PeerMessageEvent,
} from './webrtc/multi-peer-connection-controller';
import {PeerConnectionEvent} from './webrtc/peer-connection-controller';
import {PeerMessageType} from './webrtc/peer-message';

const controller = new MultiPeerConnectionController('localhost:5162', []);
controller.listen(PeerConnectionEvent, (event) => {
    console.log('connected', event.detail);
    controller.sendMessage({
        type: PeerMessageType.Chat,
        chat: 'hello there test',
    });
});
controller.listen(PeerMessageEvent, (event) => {
    console.log('got message', event.detail);
});
controller.initConnection();
