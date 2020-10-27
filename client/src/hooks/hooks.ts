import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { store } from '../redux/index'

type IUseSelector = {
    authentication: any,
    profile: any,
    events: any,
    loadUser: any
}
//@Types-useSelector
const useTypedSelector: TypedUseSelectorHook<IUseSelector> = useSelector;

export type IAuthenticationState = {
    httpStatus: number,
    message: string,
    isAuthenticated: boolean,
    loading: boolean,
    user: {
        email: string
    }
}
export const useAuthenticationState = (): IAuthenticationState => {
    return useTypedSelector(state => state.authentication);
}
export function useProfileState() {
    return useTypedSelector(state => state.profile);
}
export function useLoadUserState() {
    return useTypedSelector(state => state.loadUser);
}
export function useEventState() {
    return useTypedSelector(state => state.events);
}
//@Types-useDispatch
export type AppDispatch = typeof store.dispatch

