import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters

// Note that each of these reducers is managing its own part of the global state. The state parameter is different for every reducer, and corresponds to the part of the state it manages.
// 


function todo(state, action) {
    switch (action.type) {
        case ADD_TODO
            // return a new single todo state1
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case COMPLETE_TODO: 
            // the reducers in todos will have loop here
            // state will be every single todo in todos
            if (state.id !== action.id) {
                return state
            } else {
                return {
                    // only change 'completed'
                    ...state,
                    completed: true
                }
            }
        // really important to have the default
        default: 
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                // TODO: have notes on this ...stage
                ...state,
                todo(undefined, action) // TODO: why undefined here
            ];
        case COMPLETE_TODO:
            return state.map(t => 
                // now t is a single todo state
                todo(t, action);
            );
        default: 
            return state;
    }
}
// Note that this is completely equivalent to:
//
// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
const todoApp = combineReducers({
    VisibilityFilters,
    todos 
});