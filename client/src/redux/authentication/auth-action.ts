import * as actionType from '../types/types';
import axios from 'axios';
import { IRegister, ILogin } from './types';
import { IActionType } from '../types/types';
import { Dispatch } from 'react';
import { config } from '../../helpers/config/config';

//## typeof asyc Function
//## Register a new user
export const registerUser: any = ({ name, email, password }: IRegister) => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            console.log('##[REGISTER_USER] is triggered');
            dispatch({ type: actionType.REGISTER_LOADING });
            await axios.post('/api/users', { name, email, password }, config)
                .then(res => {
                    dispatch({
                        type: actionType.REGISTER_SUCCESS,
                        payload: res.data
                    })
                })
                .catch(err => {
                    dispatch({
                        type: actionType.REGISTER_FAILED,
                        payload: {
                            message: "Registration failed"
                        }
                    });
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
            //throw new Error("Registration request failed")
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