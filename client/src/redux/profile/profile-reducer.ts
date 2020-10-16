import * as actionType from './../types'

type IActionType = {
    type: typeof actionType.GET_PROFILE 
    | typeof actionType.LOADING
    | typeof actionType.PROFILE_ERROR
    | typeof actionType.CLEAR_PROFILE,
    payload: any
}
const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    message: null   
}

const Profile = (state = initialState, action: IActionType) => {
    const { type, payload } = action;

    switch(type) {
        case actionType.LOADING: 
            return {
                ...state,
                loading: true
            }
        case actionType.GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case actionType.PROFILE_ERROR:
            return {
                ...state,
                message: payload,
                loading: false
            }
        case actionType.CLEAR_PROFILE:
            return {
                ...state,
                profile: null
            }
        default:
            return state
    }
}
export default Profile;