import * as ActionTypes from '../constants';

export function start() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.START
        });
    });
}

export function stop() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.STOP
        });
    });
}

export function tick() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.STOP
        });
    });
}

export function reset() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.RESET
        });
    });
}