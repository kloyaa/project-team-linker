import { IActionType } from './../types/types';
import { Dispatch } from 'react';
import * as actionType from '../types/types';


export const eventToggleSideBar: any = () => {
    return (dispatch: Dispatch<IActionType>) => {
        console.log('##[EVENT_TOGGLE_SIDEBAR] is triggered')
        dispatch({ type: actionType.TOGGLE_SIDEBAR });
    }
}
export const eventToggleSideBarTop: any = () => {
    return (dispatch: Dispatch<IActionType>) => {
        console.log('##[EVENT_TOGGLE_SIDEBAR_TOP] is triggered')
        dispatch({ type: actionType.TOGGLE_SIDEBAR_TOP });
    }
}