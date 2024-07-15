import {
    addPrefix,
    createDeferredPromiseWrapper,
    createUuid,
    filterMap,
    getObjectTypedEntries,
    UuidV4,
} from '@augment-vir/common';
import {
    parseSignalServerMessage,
    SignalServerMessage,
    SignalServerMessageType,
} from '@evir/common/src/signal-server';
import {defineTypedCustomEvent, ListenTarget} from 'typed-event-target';
import {
    PeerConnectionController,
    PeerConnectionEvent,
    PeerMessageDataEvent,
} from './peer-connection-controller';
import {PeerMessage, PeerMessageData, PeerMessageDirection} from './peer-message';

export class PeerMessageEvent extends defineTypedCustomEvent<Readonly<PeerMessage>>()(
    'peer-message',
) {}

type MultiPeerConnectionEvents = PeerConnectionEvent | PeerMessageEvent;

export class MultiPeerConnectionController extends ListenTarget<MultiPeerConnectionEvents> {
    private connections: Record<UuidV4, PeerConnectionController> = {};
    private socket: WebSocket | undefined;
    private clientUuid: UuidV4 = createUuid();

    constructor(
        private readonly signalServerUrl: string,
        /** This can be mutated after construction, if desired. */
        public stunServerUrls: ReadonlyArray<string>,
    ) {
        super();
        console.log(this.clientUuid);
    }

    public sendMessage(data: Readonly<PeerMessageData>) {
        this.broadcastMessage(data, this.clientUuid);
        this.dispatch(
            new PeerMessageEvent({
                detail: {
                    clientUuid: this.clientUuid,
                    data,
                    direction: PeerMessageDirection.Sent,
                },
            }),
        );
    }

    /**
     * @returns Whether ot not the connection was initialized (it won't be initialized, for example,
     *   if the WebRTC connections already exist).
     */
    public async initConnection(): Promise<boolean> {
        if (Object.values(this.connections).length) {
            // connections already exist
            return false;
        }

        const newConnection = this.createNewConnection(this.clientUuid);
        const newOffer = await newConnection.createOffer(this.stunServerUrls);

        const offerMessage: SignalServerMessage<SignalServerMessageType.Offer> = {
            type: SignalServerMessageType.Offer,
            clientUuid: this.clientUuid,
            data: newOffer,
        };

        const socket = await this.setupWebSocket();
        socket.send(JSON.stringify(offerMessage));
        return true;
    }

    private async setupWebSocket(): Promise<WebSocket> {
        if (
            this.socket &&
            (this.socket.readyState === WebSocket.OPEN ||
                this.socket.readyState === WebSocket.CONNECTING)
        ) {
            return this.socket;
        }
        const socket = new WebSocket(addPrefix({value: this.signalServerUrl, prefix: 'ws://'}));
        socket.addEventListener('message', async (rawMessage) => {
            const message = parseSignalServerMessage(rawMessage.data);
            if (!message) {
                return;
            }

            /**
             * If this multi-peer connection starts receiving offers, it means that it has been
             * chosen as the host.
             */
            if (message.type === SignalServerMessageType.Offer) {
                console.log(`Received offer from ${message.clientUuid}`);
                /**
                 * Remove the init connection since it won't be used now that this multi-peer
                 * instance is the host.
                 */
                delete this.connections[this.clientUuid];
                const newConnection = new PeerConnectionController();
                const answer = await newConnection.createAnswer(message.data, this.stunServerUrls);
                this.connections[message.clientUuid] = newConnection;

                const answerMessage: SignalServerMessage<SignalServerMessageType.Answer> = {
                    clientUuid: message.clientUuid,
                    type: SignalServerMessageType.Answer,
                    data: answer,
                };

                socket.send(JSON.stringify(answerMessage));
            } else if (message.type === SignalServerMessageType.Answer) {
                console.log(`Received answer from ${message.clientUuid}`);
                /** A connection with the current uuid is the init connection. */
                const initConnection = this.connections[this.clientUuid];
                if (!initConnection) {
                    throw new Error('Cannot accept answer, no init connection found.');
                }
                delete this.connections[this.clientUuid];

                this.connections[message.clientUuid] = initConnection;
                initConnection.listen(PeerMessageDataEvent, (event) => {
                    this.broadcastMessage(event.detail, message.clientUuid);
                    this.dispatch(
                        new PeerMessageEvent({
                            detail: {
                                clientUuid: message.clientUuid,
                                data: event.detail,
                                direction: PeerMessageDirection.Received,
                            },
                        }),
                    );
                });

                await initConnection.acceptAnswer(message.data);
            }
        });

        const socketOpenedPromise = createDeferredPromiseWrapper<void>();

        socket.addEventListener('open', () => socketOpenedPromise.resolve());
        socket.addEventListener('close', () => {
            setTimeout(async () => {
                (await this.initConnection()) || (await this.setupWebSocket());
                console.log('web socket connection reestablished');
            }, 3000);
        });

        await socketOpenedPromise.promise;

        this.socket = socket;
        return socket;
    }

    private createNewConnection(uuid: UuidV4): PeerConnectionController {
        const newConnection = new PeerConnectionController();
        this.connections[uuid] = newConnection;
        newConnection.listen(PeerConnectionEvent, (event) => {
            this.dispatch(event);
            if (!event.detail) {
                newConnection.destroy();
                delete this.connections[uuid];
                if (!Object.values(this.connections).length) {
                    this.initConnection();
                }
            }
        });

        return newConnection;
    }

    private broadcastMessage(data: Readonly<PeerMessageData>, sourceUuid: UuidV4) {
        const connections = filterMap(
            getObjectTypedEntries(this.connections),
            ([
                clientUuid,
                connection,
            ]) => {
                return connection;
            },
            (connection, [clientUuid]) => {
                return clientUuid !== this.clientUuid && clientUuid !== sourceUuid;
            },
        );
        connections.map((connection) => {
            connection.sendMessage(data);
        });
    }
}
