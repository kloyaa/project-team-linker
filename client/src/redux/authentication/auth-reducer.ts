import * as actionType from '../types/types';
import { IActionType } from '../types/types';

//## Reducer Initial State
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    message: null,
    loading: null
}
//## typeof Reducer
//## AuthenticationReducer
const authReducer = (state = initialState, action: IActionType) => {
    const { type, payload } = action;
    switch (type) {
        //## Login is loading
        case actionType.LOGIN_LOADING:
            return {
                ...state,
                ...payload,
                loading: true
            }
        //## Login success
        case actionType.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                message: payload.message,
                loading: false,
            }
        //## Login failed
        case actionType.LOGIN_FAILED:
            if (localStorage.token) localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                httpStatus: payload.httpStatus,
                message: payload.message,
                loading: false,
            }
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
        //## User logout
        case actionType.USER_LOGOUT:
            localStorage.removeItem('token')
            return {
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                message: null
            }

        //## Register is loading
        case actionType.REGISTER_LOADING:
            return {
                ...state,
                ...payload,
                loading: true,
            }
        //## Register is success
        case actionType.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case actionType.REGISTER_FAILED:
            if (localStorage.token) localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                message: payload.message,
                loading: false
            }
        case actionType.REGISTER_STATUS:
            if (localStorage.token) localStorage.removeItem('token');
            return {
                ...state,
                httpStatus: payload.httpStatus,
                message: payload.message
            }
        default:
            return state
    }
}
export default authReducer;