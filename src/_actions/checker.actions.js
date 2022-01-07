import { checkerConstants } from '../_constants';

export const checkerActions = {
    setOrigin,
    submitText,
    reset,
};

function setOrigin(text, seconds) {
    return { type: checkerConstants.SET_ORIGIN_TEXT, text, seconds };
};

function submitText(text) {
    return { type: checkerConstants.START_TYPING, text };
}

function reset() {
    return { type: checkerConstants.RESET };
}
