import * as ActionTypes from '../constants/actionTypes';
import { MESSAGES } from '../constants/messages';
// import uuid from 'node-uuid';

const initState = [];

export default function messages(state = initState, action) {
    switch (action.type) {
        case ActionTypes.WRITE_MESSAGE:
            return writeMessage(state, action.index);
        case ActionTypes.SHOW_MESSAGE:
            return showMessage(state, action.index);
        default: 
            return state;
    }
}

function writeMessage(state, messageIndex) {
    return [
        ...state,
        {
            id: messageIndex,
            content: MESSAGES[messageIndex],
            isLoading: 1
        }
    ];
}

function showMessage(state, messageIndex) {
    return state.map((item) => {
        if (item.id === messageIndex) {
            return {
                ...item,
                isLoading: 0
            }
        } else {
            return item;
        }
    });
}

// function showMessage(state)