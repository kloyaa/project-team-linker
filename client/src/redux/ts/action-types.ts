import * as action_type from './types'

export type IActionType = {
    type:
    typeof action_type.GET_PROFILE |
    typeof action_type.LOADING |
    typeof action_type.PROFILE_ERROR |
    typeof action_type.REGISTER_LOADING |
    typeof action_type.USER_LOADED |
    typeof action_type.USER_ERROR |
    typeof action_type.REGISTER_SUCCESS |
    typeof action_type.REGISTER_FAILED |
    typeof action_type.STATUS |
    typeof action_type.USER_LOADING |
    typeof action_type.LOGIN_SUCCESS |
    typeof action_type.LOGIN_FAILED |
    typeof action_type.LOGOUT |
    typeof action_type.CLEAR_PROFILE,
    payload?: any,
    httpStatus?: number
}

export type INewUser = {
    name: string,
    email: string,
    password: string
}
export type ILoginUser = {
    email: string,
    password: string
}
export type IConfig = {
    headers: {}
}

export type ILogin = {
    loginOnSubmit: Function,
    isAuthenticated: boolean
}

export type IRegister = {
    registerOnSubmit: any,
    isAuthenticated: boolean,
    message: string
}
export type IPassword = {
    passwordIsMatched: boolean
}
export type IAccountError = {

}

export type IFeed = {

}

export type IProtectedRoute = {
    component: any,
    path: string
}