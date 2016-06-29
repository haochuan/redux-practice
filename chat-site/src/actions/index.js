import * as ActionTypes from '../constants/actionTypes';
import { MESSAGES } from '../constants/messages';

export function loadMessage() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        const messageLength = MESSAGES.length;
        let index = 0;
        while (index < messageLength) {
            setTimeout(function(index) {
                return function () {
                    writeMessage(dispatch, index);
                }
            }(index), 2000 * index);
            index++;
        }
    });
}

function writeMessage(dispatch, index) {
    dispatch({
        type: ActionTypes.WRITE_MESSAGE,
        index: index
    }); 
    setTimeout(() => {
        showMessage(dispatch, index);
    }, 2000);
}

function showMessage(dispatch, index) {
    dispatch({
        type: ActionTypes.SHOW_MESSAGE,
        index: index
    }); 
}