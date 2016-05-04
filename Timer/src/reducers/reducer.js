import { combineReducers } from 'redux';
import * as ActionTypes from '../constants';

function number(state = 0, action) {

    switch (action.type) {
        case ActionTypes.TICK:
            return state + 1;
        case ActionTypes.RESET:
            return 0;
        default: 
            return state;
    }
}

function status(state = 'stop', action) {
    switch (action.type) {
        case ActionTypes.START:
            return 'running';
        case ActionTypes.STOP:
            return 'stop';
        default: 
            return state;
    }
}

const reducer = combineReducers({
    number,
    status
});

export default reducer;

