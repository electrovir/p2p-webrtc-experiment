import {assertThrows, assertTypeOf} from 'run-time-assertions';
import {
    RtcAnswer,
    RtcOffer,
    SignalServerMessageType,
    parseSignalServerMessage,
} from './signal-server';

describe(parseSignalServerMessage.name, () => {
    it('has proper types', () => {
        assertThrows(() => {
            const result = parseSignalServerMessage({});

            assertTypeOf(result.data).toEqualTypeOf<RtcOffer | RtcAnswer>();

            if (result.type === SignalServerMessageType.Answer) {
                assertTypeOf(result.data).toEqualTypeOf<RtcAnswer>();
            } else if (result.type === SignalServerMessageType.Offer) {
                assertTypeOf(result.data).toEqualTypeOf<RtcOffer>();
            }
        });
    });
});
