import * as actionType from '../types/types';
import { IActionType } from '../types/types';

//## Reducer Initial State
const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    message: null
}
//## typeof Reducer
//## ProfileReducer
const Profile = (state = initialState, action: IActionType) => {
    const { type, payload } = action;
    switch (type) {
        //## Profile is loading
        case actionType.PROFILE_LOADING:
            return {
                ...state,
                ...payload,
                loading: true
            }
        //## Profile data
        case actionType.PROFILE_DATA:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        //## Profile failed
        case actionType.PROFILE_FAILED:
            return {
                ...state,
                message: payload.message,
                loading: false
            }
        //## Profile remove in state
        case actionType.PROFILE_REMOVE:
            return {
                ...state,
                profile: null,
                profiles: null,
                repos: null,
                message: null
            }
        default:
            return state
    }
}
export default Profile;