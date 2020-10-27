import thunk from 'redux-thunk';
import Auth from './authentication/auth-reducer';
import Events from './events/event-reducer';
import Profile from './profile/profile-reducer';
import LoadUser from './loaduser/load-reducer';

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

//## Initial State
const initState = {};

//## Combined Reducers
const reducers: any = combineReducers({
    authentication: Auth,
    profile: Profile,
    events: Events,
    loadUser: LoadUser
})
//## Redux Store
export const store: any = createStore(
    reducers,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
);


