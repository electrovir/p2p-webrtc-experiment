import {
    ArrayElement,
    callAsynchronously,
    ensureErrorAndPrependMessage,
    UuidV4,
} from '@augment-vir/common';
import {log} from '@augment-vir/node-js';
import {
    maxPortScanDistance,
    parseSignalServerMessage,
    SignalServerMessage,
    SignalServerMessageType,
    startingPort,
} from '@evir/common/src/signal-server';
import {addExitCallback} from 'catch-exit';
import cors from 'cors';
import {getNowInUserTimezone, toSimpleString} from 'date-vir';
import {Server, Websocket} from 'hyper-express';
import {getPortPromise} from 'portfinder';
import {successHeader} from '../../common/src/signal-server';

async function startServers() {
    const port = await getPortPromise({
        port: startingPort,
    });

    if (port - startingPort > maxPortScanDistance) {
        throw new Error(
            `Chosen port ('${port}') is too far from the starting port ('${startingPort}').`,
        );
    }

    const server = new Server();

    addExitCallback(() => {
        log.faint('closing server');
        server.close();
    });

    /** All connections from any origin. */
    server.use(cors());

    /** A simple health check server that simply returns a dummy response for all http requests. */
    server.get('*', (request, response) => {
        log.faint(
            `${toSimpleString(getNowInUserTimezone(), {
                includeSeconds: true,
                includeTimezone: false,
            })} health check triggered`,
        );
        response.setHeaders({
            'Content-Type': 'application/json',
            [successHeader.key]: successHeader.value,
        });
        response.status(200).send(JSON.stringify({success: true}));
    });

    const queue: {
        socket: Websocket;
        message: SignalServerMessage<SignalServerMessageType>;
    }[] = [];
    let isProcessingQueue = false;
    let currentHost: undefined | {clientUuid: UuidV4; socket: Websocket};
    const clientsAwaitingAnswer: Record<UuidV4, Websocket> = {};

    function processQueue() {
        if (isProcessingQueue) {
            return;
        }
        isProcessingQueue = true;
        let nextItem: ArrayElement<typeof queue> | undefined;
        while ((nextItem = queue.shift())) {
            const {message, socket} = nextItem;

            if (message.type === SignalServerMessageType.Offer) {
                if (currentHost && !currentHost.socket.closed) {
                    log.faint(`Sending offer to host from ${message.clientUuid}`);
                    if (currentHost.socket.send(JSON.stringify(message))) {
                        clientsAwaitingAnswer[message.clientUuid] = socket;
                    }
                } else {
                    log.faint(`Setting host to ${message.clientUuid}`);
                    currentHost = {clientUuid: message.clientUuid, socket};
                }
            } else if (message.type === SignalServerMessageType.Answer) {
                const client = clientsAwaitingAnswer[message.clientUuid];
                if (!client) {
                    log.error(`No client found by uuid '${message.clientUuid}'`);
                    continue;
                }
                delete clientsAwaitingAnswer[message.clientUuid];
                log.faint(`Sending answer to ${message.clientUuid}`);
                if (!client.send(JSON.stringify(message))) {
                    log.error(`Failed to send message to '${message.clientUuid}'`);
                }
            }
        }
        isProcessingQueue = false;
    }

    /**
     * Flow of data:
     *
     * 1. A client sends an offer to the signal server
     * 2. The first client to send an offer becomes the host on the signal server
     * 3. Subsequent client offers are forwarded to the host client
     * 4. The host client sends an answer to the signal server after receiving an offer
     * 5. The signal server forwards the answer to the client
     * 6. The client creates a peer-to-peer connection with the host
     */
    server.ws('/', (socket) => {
        log.faint(
            `${toSimpleString(getNowInUserTimezone(), {
                includeSeconds: true,
                includeTimezone: false,
            })} web socket connected`,
        );
        let socketUuid: UuidV4 | undefined;

        socket.addListener('message', (rawMessage) => {
            try {
                const message = parseSignalServerMessage(rawMessage);
                if (!message) {
                    return;
                }
                socketUuid = message.clientUuid;
                queue.push({socket, message});
                callAsynchronously(processQueue);
            } catch (error) {
                log.error(ensureErrorAndPrependMessage(error, 'Failed to handle socket message'));
            }
        });
        socket.addListener('close', () => {
            try {
                if (socketUuid) {
                    log.faint(`Closing ${socketUuid}`);
                    delete clientsAwaitingAnswer[socketUuid];
                    if (currentHost?.clientUuid === socketUuid) {
                        currentHost = undefined;
                        callAsynchronously(processQueue);
                    }
                }
            } catch (error) {
                log.error(ensureErrorAndPrependMessage(error, 'Failed to handle socket close'));
            }
        });
    });

    await server.listen(port);
    log.success(`Server listening on port ${port}`);
}

void startServers();
