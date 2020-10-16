import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { store } from '../redux/index'

type RootState = { isOn: boolean, authentication: any }

//@Types-useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

//@Types-useDispatch
export type AppDispatch = typeof store.dispatch

