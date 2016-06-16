import { combineReducers } from 'redux';
import * as ActionTypes from '../constants';

import uuid from 'node-uuid';

const initDataState = {
    1: {
        id: 1,
        name: 'ALTERNATIVES',
        percentage: 0,
        data: []
    },
    2: {
        id: 2,
        name: 'PREFERENCE/VALUE',
        percentage: 0,
        data: []
    },
    3: {
        id: 3,
        name: 'INFORMATION',
        percentage: 0,
        data: []
    },
    4: {
        id: 4,
        name: 'PERSPECTIVE',
        percentage: 0,
        data: []
    },
    5: {
        id: 5,
        name: 'COMMITMENT',
        percentage: 0,
        data: []
    },
    6: {
        id: 6,
        name: 'COMMUNICATION',
        percentage: 0,
        data: []
    },
    7: {
        id: 7,
        name: 'RESOURCES/ENABLER',
        percentage: 0,
        data: []
    },
    8: {
        id: 8,
        name: 'CONSTRAINTS',
        percentage: 0,
        data: []
    },
};

const initPageState = {
    tabId: 1,
    isNew: true
};

export function data(state = initDataState, action) {
    const id = action.id;
    const groupId = action.groupId;
    const name = action.name;
    const percentage = action.percentage;
    const oldContainer = state[groupId];
    let newData;
    switch (action.type) {
        case ActionTypes.ADD:
            newData = oldContainer.data.concat([
                {
                    id: uuid.v1(),
                    name: name,
                    percentage: percentage,
                    complete: false
                }
            ]);
            return {
                ...state,
                groupId: {
                    ...oldContainer,
                    data: newData
                }
            }
        case ActionTypes.UPDATE:
            const complete = action.complete;
            newData = oldContainer.data;
            newData.map((item) => {
                if (item.id === id) {
                    return {
                        id: id,
                        name: name,
                        percentage: percentage,
                        complete: complete
                    }
                } else {
                    return item;
                }
            });
            return {
                ...state,
                groupId: {
                    ...oldContainer,
                    data: newData
                }
            }
        case ActionTypes.DELETE:
            const oldContainer = state[groupId];
            newData = oldContainer.data;
            newData.filter((item) => {
                return item.id !== id
            });
            return {
                ...state,
                groupId: {
                    ...oldContainer,
                    data: newData
                }
            } 
        default: 
            return state;
    }
}

export function page(state = initPageState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_TAB:
            return {
                ...state,
                tabId: action.tabId
            }
        case ActionTypes.CHANGE_FEILDTYPE:
            return {
                ...state,
                isNew: action.isNew
            }
        default: 
            return state;
    }
}


const reducer = combineReducers({
    page,
    data
});

export default reducer;

