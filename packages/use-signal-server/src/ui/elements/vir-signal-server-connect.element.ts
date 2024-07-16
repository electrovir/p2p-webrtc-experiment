import {extractErrorMessage} from '@augment-vir/common';
import {maxPortScanDistance, startingPort} from '@evir/common/src/signal-server';
import {css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {LoaderAnimated24Icon, noNativeSpacing, ViraButton, ViraInput} from 'vira';
import {findActivePort} from '../../util/port';

export const VirSignalServerConnect = defineElement<{
    signalServerHostname: string;
}>()({
    tagName: 'vir-signal-server-connect',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .connection {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        p {
            ${noNativeSpacing};
        }

        .error {
            color: red;
            font-weight: bold;
        }

        h1 {
            margin: 16px 0;
        }
    `,
    events: {
        signalServerHostnameChange: defineElementEvent<string>(),
        activePortFound: defineElementEvent<number>(),
    },
    stateInitStatic: {
        portScanning: false as Error | boolean,
    },
    renderCallback({state, updateState, inputs, dispatch, events}) {
        const errorTemplate =
            state.portScanning instanceof Error
                ? html`
                      <p class="error">Error: ${extractErrorMessage(state.portScanning)}</p>
                  `
                : nothing;

        return html`
            <h1>Connect to Signal Server</h1>
            <div class="connection">
                <${ViraInput.assign({
                    value: inputs.signalServerHostname,
                    disabled: state.portScanning === true,
                    showClearButton: true,
                    placeholder: 'Signal Server hostname',
                })}
                    ${listen(ViraInput.events.valueChange, (event) => {
                        dispatch(new events.signalServerHostnameChange(event.detail));
                    })}
                ></${ViraInput}>
                <${ViraButton.assign({
                    text: state.portScanning === true ? '' : 'Connect',
                    icon: state.portScanning === true ? LoaderAnimated24Icon : undefined,
                    disabled: state.portScanning === true,
                })}
                    ${listen('click', async () => {
                        try {
                            updateState({
                                portScanning: true,
                            });
                            const activePort = await findActivePort({
                                hostname: inputs.signalServerHostname,
                                maxPortScanDistance,
                                startingPort,
                            });
                            dispatch(new events.activePortFound(activePort));
                            updateState({
                                portScanning: false,
                            });
                        } catch (error) {
                            updateState({
                                portScanning: new Error(
                                    `Found no active signal server port (starting at ${startingPort}) at '${inputs.signalServerHostname}'.`,
                                ),
                            });
                        }
                    })}
                ></${ViraButton}>
            </div>
            ${errorTemplate}
        `;
    },
});
