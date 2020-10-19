import axios from 'axios';
import * as actionType from '../types';
import setAuthToken from '../../helpers/token/setAuthToken';
import { Dispatch } from 'react';
import { IActionType, ILoginUser, INewUser } from '../ts/action-types';
import { config } from '../ts/config';

export const loadUser: any = () => {
    return async (dispatch: Dispatch<IActionType>) => {
        //If there is any token in localstorage.token
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
        try {
            dispatch({ type: actionType.LOADING })
            console.log('[loadUser] is triggered')


            /*  # /api/auth 
                # Requires x-auth-token
                # x-auth-token = true dispatch loadUserData(), loadUserProfile()
                # !localstorage.token is empty simply"return" to stop  request execution */

            if (!localStorage.token) return
            const loadUserData = () => axios.get('/api/auth');
            const loadUserProfile = () => axios.get('/api/profile/me');
            await Promise.all([loadUserData(), loadUserProfile()])
                .then(res => {
                    dispatch({
                        type: actionType.USER_LOADED,
                        payload: res[0].data
                    })
                    dispatch({
                        type: actionType.GET_PROFILE,
                        payload: res[1].data
                    })
                })
                .catch(err => {
                    dispatch({ type: actionType.USER_ERROR })
                })

        } catch (error) {
            throw new Error("Please try again later")
        }
    }
}
export const registerUser: any = ({ name, email, password }: INewUser) => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            dispatch({ type: actionType.LOADING })
            console.log('[registerUser]')

            const payload = { name, email, password }

            await axios.post('/api/users', payload, config)
                .then(res => {
                    console.log('REGISTER_SUCCESS')
                    dispatch({
                        type: actionType.REGISTER_SUCCESS,
                        payload: res.data
                    })
                    dispatch(loadUser())

                    console.log(`[POST_SUCCESS]`, res.data)
                })
                .catch(err => {
                    if (err.response.status === 406) {
                        dispatch({ type: actionType.REGISTER_FAILED })
                        dispatch({
                            type: actionType.STATUS,
                            payload: "Account already registered",
                            httpStatus: 406
                        })
                    }


                })
        } catch (error) {
            throw new Error("Registration request failed")
        }
    }
}
export const loginUser: any = ({ email, password }: ILoginUser) => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            console.log('[loginUser] is triggered')
            dispatch({ type: actionType.LOADING })

            const payload = { email, password }

            await axios.post('/api/auth/login', payload, config)
                .then(res => {
                    dispatch({
                        type: actionType.LOGIN_SUCCESS,
                        payload: res.data
                    })
                    dispatch({
                        type: actionType.STATUS,
                        payload: "Login success"
                    })
                    dispatch(loadUser())
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
export const logoutUser: any = () => {
    return (dispatch: Dispatch<IActionType>) => {
        console.log('[logoutUser] is triggered')
        dispatch({ type: actionType.LOADING })
        dispatch({ type: actionType.LOGOUT })
        dispatch({ type: actionType.CLEAR_PROFILE })
    }
}