import * as ActionTypes from '../constants';

export function start() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.START
        });
        tick(dispatch, getState);
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

export function tick(dispatch, getState) {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    const intervalID = setInterval(() => {
        const { status } = getState();

        if (status === 'running') {
            dispatch({
                type: ActionTypes.TICK
            });
        } else {
            clearInterval(intervalID);
        }
    }, 1000);
}

export function reset() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.RESET
        });
        stop();
    });
}