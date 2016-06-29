import * as ActionTypes from '../constants/actionTypes';

export function loadMessage() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        const messages = getState().messages;
        const nextIndex = messages.length === 0 ? 0 : messages.length - 1;
        dispatch({
            type: ActionTypes.LOAD_MESSAGE,
            index: nextIndex
        });
    });
}