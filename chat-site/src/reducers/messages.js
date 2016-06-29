import * as ActionTypes from '../constants/actionTypes';
import { MESSAGES } from '../constants/messages';

const initState = [];

export default function messages(state = initState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_MESSAGE:
            return loadMessage(state, action.index);
        default: 
            return state;
    }
}

function loadMessage(state, messageIndex) {
    return [
        ...state,
        {
            content: MESSAGES[messageIndex],
            isLoading: true
        }
    ];
}

// function showMessage(state)