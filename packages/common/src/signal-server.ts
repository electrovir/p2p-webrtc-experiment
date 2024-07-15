import {AnyObject, Overwrite, UuidV4, isUuid} from '@augment-vir/common';
import {defineShape, exact, isValidShape, or} from 'object-shape-tester';
import {isRunTimeType} from 'run-time-assertions';

export const startingPort = 5162;
export const maxPortScanDistance = 20;

/** Sent in the data header of the signal server's http response. */
export const successHeader = {key: 'electrovir-signal-server', value: 'yes'} as const;

export enum SignalServerMessageType {
    /**
     * Sent to the signal server from a client, then forwarded to the host.
     *
     * If a host has not been set yet, then this client becomes the host.
     */
    Offer = 'offer',
    /**
     * Sent to the signal server from the host (in response to an offer), then forwarded to the
     * client.
     */
    Answer = 'answer',
}

/** Matches {@link RTCSessionDescriptionInit}. */
export const offerShape = defineShape({
    type: exact('offer'),
    sdp: '',
});

export type RtcOffer = typeof offerShape.runTimeType;

/** Matches {@link RTCSessionDescriptionInit}. */
export const answerShape = defineShape({
    type: exact('answer'),
    sdp: '',
});

export type RtcAnswer = typeof answerShape.runTimeType;

export const signalServerMessageShape = defineShape(
    or(
        {
            type: exact(SignalServerMessageType.Answer),
            clientUuid: '',
            data: answerShape,
        },
        {
            type: exact(SignalServerMessageType.Offer),
            clientUuid: '',
            data: offerShape,
        },
    ),
);

export type SignalServerMessage<MessageType extends SignalServerMessageType> = Overwrite<
    Extract<typeof signalServerMessageShape.runTimeType, {type: MessageType}>,
    {
        clientUuid: UuidV4;
    }
>;

export function parseSignalServerMessage(
    message: string | AnyObject,
): SignalServerMessage<SignalServerMessageType> | undefined {
    if (isRunTimeType(message, 'string')) {
        message = JSON.parse(message);
    }

    if (!isValidShape(message, signalServerMessageShape) || !isUuid(message.clientUuid)) {
        throw new Error(`Invalid signal server message:\n\n${JSON.stringify(message)}\n\n`);
    }

    return message as SignalServerMessage<SignalServerMessageType>;
}
