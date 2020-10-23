import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { store } from '../redux/index'

type IUseSelector = {
    authentication: any,
    profile: any
}
//@Types-useSelector
const useTypedSelector: TypedUseSelectorHook<IUseSelector> = useSelector;

export type IAuthenticationState = {
    httpStatus: number,
    message: string,
    isAuthenticated: boolean
}
export const useAuthenticationState = () => {
    return useTypedSelector(state => state.authentication);
}
export function useProfileState() {
    return useTypedSelector(state => state.profile);
}
//@Types-useDispatch
export type AppDispatch = typeof store.dispatch

