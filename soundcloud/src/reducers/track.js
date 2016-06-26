import * as ActionTypes from '../constants/actionTypes';

const initialState = [{
        title: 'track 1'
    },
    {
        title: 'track 2'
    }];

export default function track(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.TRACKS_SET:
            return setTracks(state, action);
        default: 
            return state;
    }
}

function setTracks(state, action) {
    const { tracks } = action;
    return [...state, ...tracks];
}