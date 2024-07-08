import {getNowInUserTimezone} from 'date-vir';
import {css, defineElement, html, listen, unsafeCSS} from 'element-vir';
import {ViraButton, ViraInput} from 'vira';
import {
    PeerConnectionController,
    PeerConnectionStatus,
    PeerConnectionStatusEvent,
    PeerMessageReceivedEvent,
    PeerMessageSentEvent,
} from '../../webrtc/peer-connection-controller';
import {ChatDirection, ChatMessage, VirChatMessage} from './vir-chat-message.element';

export const VirChat = defineElement<{
    connectionController: Readonly<PeerConnectionController>;
}>()({
    tagName: 'vir-chat',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 400px;
            max-width: 100%;
        }

        .chat-history {
            height: 500px;
            max-height: 100%;
            padding: 8px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            overflow-y: auto;
            border-radius: 2px;
            border: 1px solid #ccc;
        }

        header {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .connection-status {
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .connection-status-indicator {
            border-radius: 50%;
            width: 6px;
            height: 6px;
            background-color: #ccc;
        }

        .connection-status-indicator.${unsafeCSS(PeerConnectionStatus.Closed)} {
            background-color: red;
        }
        .connection-status-indicator.${unsafeCSS(PeerConnectionStatus.Closing)},
            .connection-status-indicator.${unsafeCSS(PeerConnectionStatus.Connecting)} {
            background-color: orange;
        }
        .connection-status-indicator.${unsafeCSS(PeerConnectionStatus.Closing)},
            .connection-status-indicator.${unsafeCSS(PeerConnectionStatus.Connected)} {
            background-color: lightseagreen;
        }

        ${ViraInput} {
            width: 100%;
        }

        ${ViraButton} {
            align-self: flex-end;
        }
    `,
    stateInitStatic: {
        cleanup: undefined as undefined | (() => void),
        connectionStatus: undefined as undefined | PeerConnectionStatus,
        chatHistory: [] as ChatMessage[],
        currentMessage: '',
    },
    initCallback({inputs, state, updateState}) {
        if (!state.cleanup) {
            const unListens = [
                inputs.connectionController.listen(PeerConnectionStatusEvent, (event) => {
                    updateState({connectionStatus: event.detail});
                }),
                inputs.connectionController.listen(PeerMessageReceivedEvent, (event) => {
                    updateState({
                        chatHistory: [
                            ...state.chatHistory,
                            {
                                direction: ChatDirection.Received,
                                time: getNowInUserTimezone(),
                                text: event.detail,
                            },
                        ],
                    });
                }),
                inputs.connectionController.listen(PeerMessageSentEvent, (event) => {
                    updateState({
                        chatHistory: [
                            ...state.chatHistory,
                            {
                                direction: ChatDirection.Sent,
                                time: getNowInUserTimezone(),
                                text: event.detail,
                            },
                        ],
                    });
                }),
            ];

            updateState({
                cleanup() {
                    unListens.forEach((unListen) => unListen());
                },
            });
        }
    },
    cleanupCallback({state, updateState}) {
        state.cleanup?.();
        updateState({cleanup: undefined});
    },
    renderCallback({inputs, state, updateState}) {
        const messageTemplates = state.chatHistory.map(
            (message) => html`
                <${VirChatMessage.assign({message})}></${VirChatMessage}>
            `,
        );

        function sendMessage() {
            const message = state.currentMessage;
            updateState({currentMessage: ''});
            inputs.connectionController.sendMessage(message);
        }

        return html`
            <header>
                Chat
                <div class="connection-status">
                    <div class="connection-status-indicator ${state.connectionStatus}"></div>
                    ${state.connectionStatus?.toLowerCase() || 'no connection'}
                </div>
            </header>
            <div class="chat-history">${messageTemplates}</div>
            <${ViraInput.assign({
                value: state.currentMessage,
                disabled: state.connectionStatus !== PeerConnectionStatus.Connected,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    updateState({currentMessage: event.detail});
                })}
                ${listen('keyup', (event) => {
                    if (
                        [
                            'Enter',
                            'Return',
                            'NumpadEnter',
                        ].includes(event.code)
                    ) {
                        sendMessage();
                    }
                })}
            ></${ViraInput}>
            <${ViraButton.assign({
                text: 'send',
                disabled: state.connectionStatus !== PeerConnectionStatus.Connected,
            })}
                ${listen('click', sendMessage)}
            ></${ViraButton}>
        `;
    },
});
