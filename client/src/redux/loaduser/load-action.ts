
//## typeof asyc Function

import { Dispatch } from "react";
import setAuthToken from "../../helpers/token/setAuthToken";
import { IActionType } from "../types/types";
import * as actionType from '../types/types'
import axios from "axios";

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