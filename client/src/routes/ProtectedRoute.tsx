import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {
    const authentication = useSelector((state: any) => state.authentication);
    const { isAuthenticated, loading } = authentication;
    return (
        <Route  {...rest} render={
            props => {
                if (isAuthenticated && !loading && localStorage.token) {
                    return <Component {...rest} {...props} />
                } else if (!isAuthenticated && !loading && !localStorage.token) {
                    return <Redirect to="/login" />
                }
            }
        } />
    )

}
export default ProtectedRoute;