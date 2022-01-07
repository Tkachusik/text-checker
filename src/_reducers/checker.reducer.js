import { checkerConstants } from '../_constants';
import { longestCommonSubsequence } from '../_utils';

const initialState = {
    step: checkerConstants.SET_ORIGIN_TEXT,
    originText: '',
    text: '',
    score: '',
    seconds: 60,
    start_at: 0,
    finish_at: 0
};

export function checker(state = initialState, action) {
    switch (action.type) {
        case checkerConstants.SET_ORIGIN_TEXT:
            const now = new Date();
            return {
                ...state,
                step: checkerConstants.START_TYPING,
                originText: action.text,
                text: '',
                score: 0,
                seconds: action.seconds,
                start_at: now.getTime(),
                finish_at: now.getTime() + action.seconds * 1000,
            }
        case checkerConstants.START_TYPING:
            return {
                ...state,
                text: action.text,
                step: checkerConstants.FINISH,
                score: `${longestCommonSubsequence(state.originText, action.text)} / ${state.originText.trim().split(' ').length}`,
            }
        case checkerConstants.RESET:
            return {
                ...initialState,
            }
        default:
            return state;
    }
};
