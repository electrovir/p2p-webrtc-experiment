import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {ViraButton, ViraInput} from 'vira';
import {ChatMessage, VirChatMessage} from './vir-chat-message.element';

export const VirChat = defineElement<{
    messages: ReadonlyArray<Readonly<ChatMessage>>;
    connected: boolean;
}>()({
    tagName: 'vir-chat',
    hostClasses: {
        'vir-chat-connected': ({inputs}) => inputs.connected,
    },
    styles: ({hostClasses}) => css`
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
            background-color: orange;
        }

        ${hostClasses['vir-chat-connected'].selector} .connection-status-indicator {
            background-color: green;
        }

        ${ViraInput} {
            width: 100%;
        }

        ${ViraButton} {
            align-self: flex-end;
        }
    `,
    events: {
        messageSend: defineElementEvent<string>(),
    },
    stateInitStatic: {
        currentMessage: '',
    },
    renderCallback({inputs, state, updateState, dispatch, events}) {
        const messageTemplates = inputs.messages.map(
            (message) => html`
                <${VirChatMessage.assign({message})}></${VirChatMessage}>
            `,
        );

        function sendMessage() {
            const message = state.currentMessage;
            updateState({currentMessage: ''});
            dispatch(new events.messageSend(message));
        }

        const connectionMessage = inputs.connected ? 'Connected' : 'Waiting for peers...';

        return html`
            <header>
                Chat
                <div class="connection-status">
                    <div class="connection-status-indicator"></div>
                    ${connectionMessage}
                </div>
            </header>
            <div class="chat-history">${messageTemplates}</div>
            <${ViraInput.assign({
                value: state.currentMessage,
                disabled: !inputs.connected,
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
                disabled: !inputs.connected,
            })}
                ${listen('click', sendMessage)}
            ></${ViraButton}>
        `;
    },
});
