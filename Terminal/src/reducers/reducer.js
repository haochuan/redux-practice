import { combineReducers } from 'redux';
import * as ActionTypes from '../constants';

function commands(state = [{input: "this is input", output: "this is output"}], action) {
    switch (action.type) {
        case ActionTypes.ADD_COMMAND:
            return [
                ...state,
                {
                    input: action.input,
                    output: "This is an output for: " + action.input
                }
            ];
        default: 
            return state;
    }
}

const reducer = combineReducers({
    commands
});

export default reducer;

