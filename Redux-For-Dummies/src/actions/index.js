import * as ActionTypes from '../constants';

export function moveTV() {
    return {
        type: ActionTypes.MOVE_TV
    }
}

export function moveTable() {
    return {
        type: ActionTypes.MOVE_TABLE
    }
}

export function movebackTV() {
    return {
        type: ActionTypes.MOVEBACK_TV
    }
}

export function movebackTable() {
    return {
        type: ActionTypes.MOVEBACK_TABLE
    }
}
