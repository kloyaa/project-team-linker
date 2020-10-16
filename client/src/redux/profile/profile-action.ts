import axios from 'axios';
import * as actionType from './../types'

import { Dispatch } from 'react';
import { IActionType } from '../ts/action-types';

export const loadProfile: any = () => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            dispatch({ type: actionType.LOADING })
            await axios.get('/api/profile/me')
                .then(res => {
                    dispatch({
                        type: actionType.GET_PROFILE,
                        payload: res.data
                    })
                })
                .catch(err => {
                    dispatch({
                        type: actionType.PROFILE_ERROR,
                        payload: "Something went wrong"
                    })
                })
        } catch (error) {
            throw new Error("Something went wrong while loading your profile")
        }
    } 
}
