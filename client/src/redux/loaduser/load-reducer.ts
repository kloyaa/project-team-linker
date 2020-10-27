import * as actionType from '../types/types';
import { IActionType } from '../types/types';

//## Reducer Initial State
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true
}
//## typeof Reducer
//## AuthenticationReducer
const loadReducer = (state = initialState, action: IActionType) => {
    const { type, payload } = action;
    switch (type) {
        //## User is loading
        case actionType.USER_LOADING:
            return {
                ...state,
                ...payload,
                loading: true
            }
        //## User data
        case actionType.USER_LOADED:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                user: payload,
                loading: false,
            }
        //## User failed
        case actionType.USER_FAILED: {
            if (localStorage.token) localStorage.removeItem('token');
            return {
                token: null,
                isAuthenticated: false,
                message: payload.message,
                loading: false
            }
        }
        default:
            return state
    }
}
export default loadReducer;