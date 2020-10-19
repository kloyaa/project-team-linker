import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IProtectedRoute } from '../redux/ts/action-types';

const ProtectedRoute: React.FC<IProtectedRoute> = ({ component: Component, ...rest }) => {
    const history = useHistory()
    const authentication = useSelector((state: any) => state.authentication);
    const { isAuthenticated, loading } = authentication;
    return (
        <Route  {...rest} render={
            props => {
                if (isAuthenticated && !loading && localStorage.token) {
                    return <Component {...rest} {...props} />
                } else {
                    if (!isAuthenticated && !loading && !localStorage.token) {
                        history.push('/login')
                    }
                }
            }
        } />
    )

}
export default ProtectedRoute;