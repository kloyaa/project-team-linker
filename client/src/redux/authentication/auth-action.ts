import * as actionType from '../types/types';
import axios from 'axios';
import setAuthToken from '../../helpers/token/setAuthToken';
import { IRegister, ILogin } from './types';
import { IActionType } from '../types/types';
import { Dispatch } from 'react';
import { config } from '../../helpers/config/config';

//## typeof asyc Function
//## Load user data if authenticated
export const loadUser: any = () => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            console.log('##[LOAD_USER] is triggered')
            //## /api/auth 
            //## Requires x-auth-token
            //## x-auth-token = true <then> dispatch loadUserData(), loadUserProfile()
            //## !localstorage.token is empty simply"return" to stop  request execution
            if (!localStorage.token) return null;
            if (localStorage.token) {
                //## If there is any token in localstorage.token
                setAuthToken(localStorage.token);
                dispatch({ type: actionType.USER_LOADING });
                //## Fetch data from api
                const loadUserData = () => axios.get('/api/auth');
                const loadUserProfile = () => axios.get('/api/profile/me');
                await Promise.all([loadUserData(), loadUserProfile()])
                    .then(res => {
                        dispatch({
                            type: actionType.USER_LOADED,
                            payload: res[0].data
                        })
                        dispatch({
                            type: actionType.PROFILE_DATA,
                            payload: res[1].data
                        })
                    })
                    .catch((): void => {
                        dispatch({
                            type: actionType.USER_FAILED,
                            payload: {
                                message: "Failed loading data"
                            }
                        })
                    })
            }
        } catch (error) {
            throw new Error("Please try again later")
        }
    }
}
//## typeof asyc Function
//## Register a new user
export const registerUser: any = ({ name, email, password }: IRegister) => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            console.log('##[REGISTER_USER] is triggered')
            dispatch({ type: actionType.REGISTER_LOADING });
            await axios.post('/api/users', { name, email, password }, config)
                .then(res => {
                    dispatch({
                        type: actionType.REGISTER_SUCCESS,
                        payload: res.data
                    })
                    if (localStorage.token) dispatch(loadUser());
                    else return null;
                })
                .catch(err => {
                    dispatch({ type: actionType.REGISTER_FAILED })
                    if (err.response.status === 406) {
                        dispatch({
                            type: actionType.REGISTER_STATUS,
                            payload: {
                                message: "Account already registered",
                                httpStatus: err.response.status
                            }
                        })
                    }
                })
        } catch (error) {
            throw new Error("Registration request failed")
        }
    }
}

//## typeof asyc Function
//## Login user
export const loginUser: any = ({ email, password }: ILogin) => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            console.log('##[LOGIN_USER] is triggered')
            dispatch({ type: actionType.LOGIN_LOADING })
            await axios.post('/api/auth/login', { email, password }, config)
                .then(res => {
                    dispatch({
                        type: actionType.LOGIN_SUCCESS,
                        payload: res.data
                    })
                    dispatch({
                        type: actionType.LOGIN_STATUS,
                        payload: {
                            message: "Login success"
                        }
                    })
                    if (localStorage.token) dispatch(loadUser());
                    else return null;
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        dispatch({
                            type: actionType.LOGIN_FAILED,
                            payload: {
                                httpStatus: err.response.status,
                                message: err.response.data
                            }
                        })
                    }
                })
        } catch (error) {
            throw new Error("Account not found or Invalid credentials")
        }
    }
}
//## typeof asyc Function
//## Logout user
export const logoutUser: any = () => {
    return (dispatch: Dispatch<IActionType>) => {
        console.log('##[LOGOUT_USER] is triggered');
        if (localStorage.token) {
            dispatch({ type: actionType.USER_LOGOUT });
            dispatch({ type: actionType.PROFILE_REMOVE });
            localStorage.removeItem('token');
        }
        return null;
    }
}