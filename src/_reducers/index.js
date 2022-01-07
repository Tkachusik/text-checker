import { checker } from './checker.reducer';

export default function rootReducer(state = {}, action) {
    return {
        checker: checker(state.checker, action),
    };
};
