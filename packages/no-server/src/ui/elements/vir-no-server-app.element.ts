import {extractEventTarget} from '@augment-vir/browser';
import {
    css,
    defineElementNoInputs,
    html,
    listen,
    nothing,
    perInstance,
    renderIf,
} from 'element-vir';
import {noNativeSpacing, ViraButton, ViraButtonStyleEnum} from 'vira';
import {
    PeerConnectionController,
    PeerConnectionStatus,
    PeerConnectionStatusEvent,
} from '../../webrtc/peer-connection-controller';
import {VirChat} from './vir-chat.element';
import {VirHow} from './vir-how.element';

enum ConnectionMode {
    /** Host a connection. */
    Host = 'host',
    /** Join a host's connection. */
    Join = 'join',
}

export const VirNoServerApp = defineElementNoInputs({
    tagName: 'vir-no-server-app',
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

        .stun-input {
            height: 50px;
        }

        textarea {
            width: 300px;
            max-width: 100%;
            height: 150px;
        }
    `,
    stateInitStatic: {
        connectionController: perInstance(() => new PeerConnectionController()),
        connectionMode: undefined as undefined | ConnectionMode,
        offer: undefined as undefined | Readonly<RTCSessionDescriptionInit>,
        answer: undefined as undefined | Readonly<RTCSessionDescriptionInit>,
        connectionStatus: undefined as undefined | PeerConnectionStatus,
        messageToSend: '',
        copied: false,
        copiedTimeout: undefined as undefined | number,
        stunServerUrls: [
            // 'stun.l.google.com:19302',
            // 'stun.stunprotocol.org',
            'stun.cloudflare.com:3478',
        ] as string[],
    },
    initCallback({state, updateState}) {
        state.connectionController.listen(PeerConnectionStatusEvent, (event) => {
            updateState({
                connectionStatus: event.detail,
            });
        });
    },
    renderCallback({state, updateState}) {
        const hostTemplate = html`
            <section class="offer-wrapper host">
                Copy the following "offer" and send it to a client so they can join you:
                <div>
                    <p class="offer">${JSON.stringify(state.offer)}</p>
                    <button
                        ${listen('click', async () => {
                            await window.navigator.clipboard.writeText(JSON.stringify(state.offer));
                            updateState({copied: true});
                            if (state.copiedTimeout) {
                                window.clearTimeout(state.copiedTimeout);
                            }
                            updateState({
                                copiedTimeout: window.setTimeout(() => {
                                    updateState({
                                        copied: false,
                                        copiedTimeout: undefined,
                                    });
                                }, 2000),
                            });
                        })}
                    >
                        ${state.copied ? 'copied' : 'copy'}
                    </button>
                </div>
                <p>
                    After pasting your offer, the client should provide you with an "answer". Paste
                    the client's answer below:
                </p>
                <textarea
                    ${listen('input', async (event) => {
                        const textAreaElement = extractEventTarget(event, HTMLTextAreaElement);
                        await state.connectionController.acceptAnswer(textAreaElement.value);
                    })}
                ></textarea>
            </section>
        `;

        const joinTemplate = html`
            <section class="offer-wrapper join">
                Paste the host's offer:
                <br />
                <textarea
                    ${listen('input', async (event) => {
                        const textAreaElement = extractEventTarget(event, HTMLTextAreaElement);
                        const answer = await state.connectionController.createAnswer(
                            textAreaElement.value,
                            state.stunServerUrls,
                        );
                        updateState({answer});
                    })}
                ></textarea>
                ${renderIf(
                    !!state.answer,
                    html`
                        <br />
                        Copy the following "answer" and send it to the host:
                        <div>
                            <p class="offer">${JSON.stringify(state.answer)}</p>
                            <button
                                ${listen('click', async () => {
                                    await window.navigator.clipboard.writeText(
                                        JSON.stringify(state.answer),
                                    );
                                    updateState({copied: true});
                                    if (state.copiedTimeout) {
                                        window.clearTimeout(state.copiedTimeout);
                                    }
                                    updateState({
                                        copiedTimeout: window.setTimeout(() => {
                                            updateState({
                                                copied: false,
                                                copiedTimeout: undefined,
                                            });
                                        }, 2000),
                                    });
                                })}
                            >
                                ${state.copied ? 'copied' : 'copy'}
                            </button>
                        </div>
                    `,
                )}
            </section>
        `;

        return html`
            <main>
                <${VirHow}></${VirHow}>
                <section>
                    <p>
                        Enter a comma-separated list of stun servers you'd like to use (if any).
                        <br />
                        Without any STUN servers, you can only connect across your LAN.
                    </p>
                    <textarea
                        class="stun-input"
                        .value=${state.stunServerUrls.join(', ')}
                        ${listen('input', async (event) => {
                            const textAreaElement = extractEventTarget(event, HTMLTextAreaElement);
                            const stunServerUrls = textAreaElement.value
                                .split(',')
                                .map((entry) => entry.trim());
                            updateState({stunServerUrls});
                        })}
                    ></textarea>
                </section>
                <section class="buttons">
                    <${ViraButton.assign({
                        text: 'Host',
                        buttonStyle:
                            state.connectionMode === ConnectionMode.Host
                                ? ViraButtonStyleEnum.Default
                                : ViraButtonStyleEnum.Outline,
                    })}
                        ${listen('click', async () => {
                            updateState({
                                connectionMode: ConnectionMode.Host,
                            });

                            if (!state.offer) {
                                const offer = await state.connectionController.createOffer(
                                    state.stunServerUrls,
                                );
                                updateState({offer});
                            }
                        })}
                    ></${ViraButton}>
                    <${ViraButton.assign({
                        text: 'Join',
                        buttonStyle:
                            state.connectionMode === ConnectionMode.Join
                                ? ViraButtonStyleEnum.Default
                                : ViraButtonStyleEnum.Outline,
                    })}
                        ${listen('click', () => {
                            updateState({
                                connectionMode: ConnectionMode.Join,
                            });
                        })}
                    ></${ViraButton}>
                </section>
                ${state.connectionMode === ConnectionMode.Host
                    ? hostTemplate
                    : state.connectionMode === ConnectionMode.Join
                      ? joinTemplate
                      : nothing}
            </main>
            <${VirChat.assign({
                connectionController: state.connectionController,
            })}></${VirChat}>
        `;
    },
});
