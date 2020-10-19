import axios from 'axios';
import * as actionType from './../types'

import { Dispatch } from 'react';
import { IActionType } from '../ts/action-types';
import { config } from '../ts/config';

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
type IEditProfile = {
    firstName: string,
    lastName: string,
    gitHub: string
}
export const editProfile: any = ({ firstName, lastName, gitHub }: IEditProfile) => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            console.log('[editProfile] is triggered')

            dispatch({ type: actionType.LOADING })
            let payload = {
                firstName,
                lastName,
                gitHub
            }
            axios.post('/api/profile/new', payload, config)
                .then(res => {
                    dispatch({
                        type: actionType.GET_PROFILE,
                        payload: res.data
                    })
                })
                .catch(err => {
                    console.log(`[editProfile] error`)
                })
        } catch (error) {
            throw new Error("Something went wrong while editing your profile")
        }
    }
}

