import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IProtectedRoute } from '../redux/ts/action-types';



 
const ProtectedRoute: React.FC<IProtectedRoute> = ({component: Component, ...rest}) => {
    const authentication = useSelector((state: any) => state.authentication);
    const { isAuthenticated, loading } = authentication;
    return <Route { ...rest } render={ props => !isAuthenticated && !loading ?  
            <Redirect to="/login" /> :
            <Component  { ...props } />
    }/>

}

export default ProtectedRoute;