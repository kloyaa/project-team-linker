import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { rootReducer } from './combinedReducers'

const initState = {};
export const store = createStore(
    rootReducer, 
    initState, 
    composeWithDevTools(applyMiddleware(thunk))
);


