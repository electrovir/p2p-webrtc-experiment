import {UuidV4} from '@augment-vir/common';
import {assertValidShape, defineShape, exact, or} from 'object-shape-tester';

export enum PeerMessageType {
    /** A simple chat message. */
    Chat = 'chat',
    /** Allows clients to set various aspects of their user. */
    SetUser = 'set-user',
}

const peerMessageDataShape = defineShape(
    or(
        {
            type: exact(PeerMessageType.Chat),
            chat: '',
        },
        {
            type: exact(PeerMessageType.SetUser),
            username: '',
            color: '',
        },
    ),
);

export type PeerMessageData = typeof peerMessageDataShape.runTimeType;

export type PeerMessage = {
    clientUuid: UuidV4;
    direction: PeerMessageDirection;
    data: PeerMessageData;
};

export enum PeerMessageDirection {
    Sent = 'sent',
    Received = 'received',
}

export function parsePeerMessageData(rawData: string): PeerMessageData {
    const parsedData = JSON.parse(rawData);

    assertValidShape(parsedData, peerMessageDataShape);

    return parsedData;
}
