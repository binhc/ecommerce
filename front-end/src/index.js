import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Student from './Student'

// Get the createStore method from the redux module as well as the applyMiddleWare method
import {createStore, applyMiddleware} from 'redux';

// createStore needs a reducer. more specifically, a root reducer 
import RootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';
import {Provider} from 'react-redux';

const theStore = applyMiddleware(reduxPromise)(createStore)(RootReducer);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);

