import { combineReducers } from 'redux';
import * as ActionTypes from '../constants';

const initialState = {
    tv: {
        marginLeft: '20px',
        marginTop: '500px'
    },
    sofa: {
        marginLeft: '350px',
        marginTop: '450px' 
    },
    table: {
        marginLeft: '110px',
        marginTop: '300px' 
    }

};

function tvReducer(state = initialState.tv, action) {
    switch (action.type) {
        case ActionTypes.MOVE_TV:
            return {
                marginLeft: '410px',
                marginTop: '30px'
            }
        case ActionTypes.MOVEBACK_TV:
            return {
                marginLeft: '20px',
                marginTop: '500px'
            }
        default: 
            return state;
    }
}

function tableReducer(state = initialState.table, action) {
    switch (action.type) {
        case ActionTypes.MOVE_TABLE:
            return {
                marginLeft: '500px',
                marginTop: '300px'
            }
        case ActionTypes.MOVEBACK_TABLE:
            return {
                marginLeft: '110px',
                marginTop: '300px'
            }
        default: 
            return state;
    }
}

function sofaReducer(state = initialState.sofa, action) {
    // in this case we are not going to move sofa
    return state;
}

const reducer = combineReducers({
    tv: tvReducer,
    table: tableReducer,
    sofa: sofaReducer
});

export default reducer;