import * as actionType from '../types/types';
import axios from 'axios';
import { Dispatch } from 'react';
import { IActionType } from '../types/types';
import { config } from '../../helpers/config/config';
import { IEditProfile } from './types';


//## typeof asyc Function
//## Edit Profile
export const editProfile: any = ({ firstName, lastName, gitHub }: IEditProfile) => {
    return async (dispatch: Dispatch<IActionType>) => {
        try {
            console.log('##[EDIT_PROFILE] is triggered')
            dispatch({ type: actionType.PROFILE_LOADING });
            let payload = {
                firstName,
                lastName,
                gitHub
            }
            axios.post('/api/profile/new', payload, config)
                .then(res => {
                    dispatch({
                        type: actionType.PROFILE_DATA,
                        payload: res.data
                    })
                })
                .catch((): void => {
                    dispatch({
                        type: actionType.PROFILE_FAILED,
                        payload: {
                            message: "Something went wrong while editing your profile"
                        }
                    })
                })
        } catch (error) {
            throw new Error("Something went wrong while editing your profile")
        }
    }
}

