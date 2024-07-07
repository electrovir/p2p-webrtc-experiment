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
import {ViraButton, ViraButtonStyleEnum} from 'vira';
// import {acceptWebRtcOffer} from '../../webrtc/accept-offer';
// import {acceptAnswer, createWebRtcOffer} from '../../webrtc/create-offer';
import {PeerConnectionController} from '../../webrtc/peer-connection-controller';

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
            padding: 64px;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .buttons {
            display: flex;
            gap: 32px;
            font-size: 2em;
        }

        .offer {
            font-family: monospace;
            user-select: all;
            -webkit-user-select: all;
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
    },
    renderCallback({state, updateState}) {
        const hostTemplate = html`
            <section class="host-offer">
                Copy the following "offer" and send it to a client who will join you:
                <p class="offer">${JSON.stringify(state.offer)}</p>
                <br />
                Paste the client's offer:
                <textarea
                    ${listen('input', async (event) => {
                        const textAreaElement = extractEventTarget(event, HTMLTextAreaElement);
                        await state.connectionController.acceptAnswer(textAreaElement.value);
                    })}
                ></textarea>
            </section>
        `;

        const joinTemplate = html`
            <section class="join-offer">
                Paste the host's offer:
                <br />
                <textarea
                    ${listen('input', async (event) => {
                        const textAreaElement = extractEventTarget(event, HTMLTextAreaElement);
                        const answer = await state.connectionController.createAnswer(
                            textAreaElement.value,
                        );
                        updateState({answer});
                    })}
                ></textarea>
                ${renderIf(
                    !!state.answer,
                    html`
                        <br />
                        Copy the following "answer" and send it to the host:
                        <p class="offer">${JSON.stringify(state.answer)}</p>
                    `,
                )}
            </section>
        `;

        return html`
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
                            const offer = await state.connectionController.createOffer();
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
        `;
    },
});
