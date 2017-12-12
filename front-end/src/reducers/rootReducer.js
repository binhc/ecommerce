// This is the root reducer. 
// Each reducer contains a piece of state.  The root reducer contains all the reducers 
// i.e the root reducer contains ALL pieces of state or the entire application state 

// In order to get all the "little" reducers or pieces of state into one big "root" reducer, 
// we need the conbineReducers method from redux
import {combineReducers} from 'redux';

// Import each individual reducer to hand to combineReducers
import AuthReducer from './AuthReducer'; 

// combineReducers takes an object as an arg 
// that arg has key:value pair = stateName: reducerFunction
const rootReducer = combineReducers({
    auth: AuthReducer
});

export default rootReducer;