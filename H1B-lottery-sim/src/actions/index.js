import moment from 'moment';
import * as ActionTypes from '../constants';
import generateLottery from './lottery';

export function lottery(application) {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        const time = getState().time;
        const result = generateLottery(application, moment(time)); 
        dispatch({
            type: ActionTypes.LOTTERY,
            result: result
        });
        dispatch({
            type: ActionTypes.FINISH
        });

        dispatch({
            type: ActionTypes.NEXT_YEAR
        });
    });
}

export function repeat() {
    // with redux thunk, in actions you have the access to store.dispatch and store.getState
    return ((dispatch, getState) => {
        dispatch({
            type: ActionTypes.START
        });
    });
}