import {Overwrite, UuidV4} from '@augment-vir/common';
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
export type PeerMessageDataByType<MessageType extends PeerMessageType> = Extract<
    typeof peerMessageDataShape.runTimeType,
    {type: MessageType}
>;

export type PeerMessage = {
    clientUuid: UuidV4;
    direction: PeerMessageDirection;
    data: PeerMessageData;
};
export type PeerMessageByType<MessageType extends PeerMessageType> = Overwrite<
    PeerMessage,
    {data: PeerMessageDataByType<MessageType>}
>;

export function isOfMessageType<const MessageType extends PeerMessageType>(
    message: PeerMessage,
    messageType: MessageType,
): message is PeerMessageByType<MessageType> {
    return message.data.type === messageType;
}

export enum PeerMessageDirection {
    Sent = 'sent',
    Received = 'received',
}

export function parsePeerMessageData(rawData: string): PeerMessageData {
    const parsedData = JSON.parse(rawData);

    assertValidShape(parsedData, peerMessageDataShape);

    return parsedData;
}
