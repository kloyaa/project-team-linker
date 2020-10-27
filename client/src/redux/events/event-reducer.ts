import * as actionType from '../types/types';
import { IActionType } from '../types/types';

//## Reducer Initial State
const initialState = {
    sidebar: false,
    sidebarTop: false
}
//## typeof Reducer
//## Events Reducer
const Events = (state = initialState, action: IActionType) => {
    const { type } = action;
    switch (type) {
        case actionType.TOGGLE_SIDEBAR:
            return {
                sidebar: !state.sidebar
            }
        case actionType.TOGGLE_SIDEBAR_TOP:
            return {
                sidebarTop: !state.sidebarTop
            }
        default:
            return state
    }
}
export default Events;