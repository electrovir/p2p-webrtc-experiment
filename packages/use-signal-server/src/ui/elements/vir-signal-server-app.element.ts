import {UuidV4, wait} from '@augment-vir/common';
import {getNowInUserTimezone} from 'date-vir';
import {css, defineElementNoInputs, html, listen} from 'element-vir';
import {assertDefined} from 'run-time-assertions';
import {buildUrl} from 'url-vir';
import {noNativeSpacing} from 'vira';
import {
    MultiPeerConnectionController,
    PeerMessageEvent,
} from '../../webrtc/multi-peer-connection-controller';
import {PeerConnectionEvent} from '../../webrtc/peer-connection-controller';
import {PeerMessageDataByType, PeerMessageType, isOfMessageType} from '../../webrtc/peer-message';
import {ChatMessage} from './vir-chat-message.element';
import {VirChat} from './vir-chat.element';
import {VirSignalServerConnect} from './vir-signal-server-connect.element';

enum ConnectionMode {
    /** Host a connection. */
    Host = 'host',
    /** Join a host's connection. */
    Join = 'join',
}

export const VirSignalServerApp = defineElementNoInputs({
    tagName: 'vir-signal-server-app',
    styles: css`
        :host {
            font-family: sans-serif;
            padding: 16px;
            display: flex;
            flex-wrap: wrap;
            gap: 32px;
        }

        .buttons {
            display: flex;
            gap: 32px;
            font-size: 2em;
        }

        main {
            flex-grow: 1;
            max-width: 100%;
            flex-basis: 500px;
        }

        .offer-wrapper {
            padding: 16px 0;
            width: 700px;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .offer {
            font-family: monospace;
            user-select: all;
            -webkit-user-select: all;
            word-break: break-all;
        }

        p {
            ${noNativeSpacing};
        }

        textarea {
            width: 300px;
            max-width: 100%;
            height: 150px;
        }
    `,
    stateInitStatic: {
        signalServerHostname: 'localhost',
        multiPeerController: undefined as undefined | MultiPeerConnectionController,
        connected: false,
        chatHistory: [] as ReadonlyArray<Readonly<ChatMessage>>,
        userData: {} as Record<UuidV4, PeerMessageDataByType<PeerMessageType.SetUser>>,
    },
    renderCallback({state, updateState}) {
        const connectionTemplate = html`
            <${VirSignalServerConnect.assign({
                signalServerHostname: state.signalServerHostname,
            })}
                ${listen(VirSignalServerConnect.events.signalServerHostnameChange, (event) => {
                    updateState({
                        signalServerHostname: event.detail,
                    });
                })}
                ${listen(VirSignalServerConnect.events.activePortFound, async (event) => {
                    const signalServerUrl = buildUrl({
                        protocol: 'ws',
                        hostname: state.signalServerHostname,
                        port: event.detail,
                    });
                    const multiPeerController = new MultiPeerConnectionController(
                        signalServerUrl.href,
                        [
                            /**
                             * Not providing any STUN servers because the signal server is only
                             * works on localhost anyway.
                             */
                        ],
                    );

                    multiPeerController.listen(PeerConnectionEvent, (event) => {
                        updateState({connected: event.detail});
                    });
                    multiPeerController.listen(PeerMessageEvent, (event) => {
                        const message = event.detail;
                        if (isOfMessageType(message, PeerMessageType.Chat)) {
                            const newChatMessage: Readonly<ChatMessage> = {
                                clientUuid: message.clientUuid,
                                direction: message.direction,
                                text: message.data.chat,
                                time: getNowInUserTimezone(),
                            };

                            updateState({
                                chatHistory: [
                                    ...state.chatHistory,
                                    newChatMessage,
                                ],
                            });
                        } else if (isOfMessageType(message, PeerMessageType.SetUser)) {
                            updateState({
                                userData: {
                                    ...state.userData,
                                    [message.clientUuid]: message.data,
                                },
                            });
                        } else {
                            console.error(message);
                            console.error(`Unexpected message type: ${message.data.type}`);
                        }
                    });

                    updateState({
                        multiPeerController,
                    });
                    await wait(300);

                    await multiPeerController.initConnection();
                })}
            ></${VirSignalServerConnect}>
        `;

        const chatTemplate = html`
            <${VirChat.assign({
                messages: state.chatHistory,
                connected: state.connected,
            })}
                ${listen(VirChat.events.messageSend, (event) => {
                    assertDefined(state.multiPeerController);

                    state.multiPeerController.sendMessage({
                        type: PeerMessageType.Chat,
                        chat: event.detail,
                    });
                })}
            ></${VirChat}>
        `;

        return html`
            ${state.multiPeerController ? chatTemplate : connectionTemplate}
        `;
    },
});
