import * as ActionTypes from '../constants/actionTypes';

export function loadMessage() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        const messages = getState().messages;
        const nextIndex = messages.length === 0 ? 0 : messages.length - 1;
        writeMessage(dispatch, nextIndex);
    });
}

function writeMessage(dispatch, index) {
    console.log('write');
    dispatch({
        type: ActionTypes.WRITE_MESSAGE,
        index: index
    }); 
    setTimeout(() => {
        showMessage(dispatch, index);
    }, 2000);
}

function showMessage(dispatch, index) {
    console.log('show');
    dispatch({
        type: ActionTypes.SHOW_MESSAGE,
        index: index
    }); 
}