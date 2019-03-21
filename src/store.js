/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import activityReducer from './reducers/activitiesReducer';
export default function configureStore(initialState = {}) {
    return createStore(
        activityReducer,
        initialState,
        applyMiddleware(thunk)
    );
}