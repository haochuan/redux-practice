import * as ActionTypes from '../constants';

export function addCommand(input) {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.ADD_COMMAND,
            input: input,
            output: input
        });
    });
}