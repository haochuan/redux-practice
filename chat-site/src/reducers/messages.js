import * as ActionTypes from '../constants/actionTypes';
import { MESSAGES } from '../constants/messages';

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
            content: MESSAGES[messageIndex],
            isLoading: true
        }
    ];
}

function showMessage(state, messageIndex) {
    let newState = state;
    newState[messageIndex] = {
        content: MESSAGES[messageIndex],
        isLoading: false
    }
    return newState;
}

// function showMessage(state)