import { combineReducers } from 'redux'
import Auth from './authentication/auth-reducer'
import Profile from './profile/profile-reducer'

export const rootReducer = combineReducers({
    authentication:Auth,
    profile:Profile
})

export type RootState = ReturnType<typeof rootReducer>

