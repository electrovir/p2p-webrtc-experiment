import {
    formatPresets,
    FullDate,
    FullDatePartEnum,
    toHtmlInputString,
    toLocaleString,
} from 'date-vir';
import {css, defineElement, html} from 'element-vir';
import {noNativeSpacing} from 'vira';

export enum ChatDirection {
    Sent = 'sent',
    Received = 'received',
}

export type ChatMessage = Readonly<{
    direction: ChatDirection;
    text: string;
    time: Readonly<FullDate>;
}>;

export const VirChatMessage = defineElement<{message: Readonly<ChatMessage>}>()({
    tagName: 'vir-chat-message',
    hostClasses: {
        'vir-chat-message-self': ({inputs}) => inputs.message.direction === ChatDirection.Sent,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-right: 24px;
        }

        time {
            font-size: 12px;
            opacity: 0.8;
        }

        .message {
            border-radius: 8px;
            background-color: #ccc;
            padding: 8px;
        }

        p {
            ${noNativeSpacing};
        }

        ${hostClasses['vir-chat-message-self'].selector} {
            align-items: flex-end;

            padding-right: 0;
            padding-left: 24px;
        }
    `,
    renderCallback({inputs}) {
        const formattedTime = toLocaleString(
            inputs.message.time,
            formatPresets.DatetimeShortWithSeconds,
        );

        return html`
            <time
                datetime=${toHtmlInputString(inputs.message.time, FullDatePartEnum.DateTime, true)}
            >
                ${formattedTime}
            </time>
            <p class="message">${inputs.message.text}</p>
        `;
    },
});
