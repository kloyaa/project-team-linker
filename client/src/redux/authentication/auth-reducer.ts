import * as actionType from '../types';

type IActionType =  {
    type: typeof actionType.REGISTER_SUCCESS 
        | typeof actionType.REGISTER_FAILED
        | typeof actionType.STATUS
        | typeof actionType.REGISTER_LOADING
        | typeof actionType.USER_LOADED
        | typeof actionType.USER_LOADING
        | typeof actionType.USER_ERROR
        | typeof actionType.LOGIN_SUCCESS
        | typeof actionType.LOGIN_FAILED 
        | typeof actionType.LOGOUT
        | typeof actionType.LOADING
        | typeof actionType.CLEAR_PROFILE,
    payload: any,
    httpStatus?: number
} 

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    message: null
}
const authReducer = (state = initialState, action: IActionType) => {
    const { type, payload, httpStatus } = action;

    switch(type) {
        case actionType.LOGIN_SUCCESS: 
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                message: payload.message,
            }
        case actionType.LOGIN_FAILED:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                loading: false
            }
        case actionType.USER_LOADED: 
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case actionType.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                httpStatus: null
            }
        case actionType.REGISTER_FAILED:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        case actionType.USER_LOADING: 
            return {
                ...state,
                loading: true
            }
        case actionType.USER_ERROR: {
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        }
        case actionType.STATUS:
            return {
                ...state,
                message: payload,
                loading: false,
                httpStatus
        }

        case actionType.LOGOUT: 
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                message: null
            }

        case actionType.LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
export default authReducer;