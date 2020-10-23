import thunk from 'redux-thunk';
import Auth from './authentication/auth-reducer';
import Profile from './profile/profile-reducer';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

//## Initial State
const initState = {};

//## Combined Reducers
const reducers: any = combineReducers({
    authentication: Auth,
    profile: Profile
})
//## Redux Store
export const store: any = createStore(
    reducers,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
);


