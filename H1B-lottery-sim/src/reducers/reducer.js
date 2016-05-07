import { combineReducers } from 'redux';
import moment from 'moment';
import * as ActionTypes from '../constants';

function time(state = "2017-04-01", action) {
    switch (action.type) {
        case ActionTypes.NEXT_YEAR:
            return moment(state).add(1, 'y').format("YYYY-MM-DD");
        default: 
            return state;
    }
}

function application(state = {}, action) {
    switch (action.type) {
        case ActionTypes.LOTTERY:
            return action.result
        default: 
            return state;
    }
}


// 0: first start
// 1: see the result
// 2: second start
function status(state = 0, action) {
    switch (action.type) {
        case ActionTypes.FINISH:
            return 1;
        case ActionTypes.START:
            return 2;
        default: 
            return state;
    }
}

const reducer = combineReducers({
    time,
    status,
    application
});

export default reducer;

