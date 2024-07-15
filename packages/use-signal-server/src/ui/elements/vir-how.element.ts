import {css, defineElementNoInputs, html} from 'element-vir';
import {noNativeSpacing} from 'vira';

export const VirHow = defineElementNoInputs({
    tagName: 'vir-how',
    styles: css`
        :host {
            display: block;
            max-width: 100%;
        }
        h4 {
            ${noNativeSpacing};
        }
    `,
    renderCallback() {
        return html`
            <h4>How it works</h4>
            <ol>
                <li>After clicking "host", the host computer generates an "offer" JSON string.</li>
                <li>The host user copies the offer string and sends it to a client user.</li>
                <li>The client user clicks "join" and pastes the offer string.</li>
                <li>The client computer then immediately generates an "answer" JSON string.</li>
                <li>The client user copies this answer string and sends it to the host user.</li>
                <li>The host user pastes the answer string.</li>
                <li>The connection is now established.</li>
                <li>Sending messages back and forth is now possible!</li>
            </ol>
        `;
    },
});
