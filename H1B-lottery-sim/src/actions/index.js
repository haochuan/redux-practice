import * as ActionTypes from '../constants';
import lottery from './lottery';

export function increment() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.INCREMENT
        });
    });
}

export function decrement() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.DECREMENT
        });
    });
}