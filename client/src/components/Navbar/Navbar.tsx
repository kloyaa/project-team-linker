import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { useAuthenticationState } from '../../hooks/hooks';

const Navbar: React.FC<any> = () => {
    const authenticationState = useAuthenticationState();
    const { isAuthenticated } = authenticationState

    return <Fragment>
        <section className="z-depth-1 d-flex justify-content-between align-items-center bg-white p-3 sticky-top">
            <div className="logo pointer">
                <Link to="/feed" className="uk-link-toggle">
                    <h4 className="p-0 m-0 text-dark">
                        <span><strong>DEV</strong>IANCE</span>
                    </h4>
                </Link>
            </div>
            <section>
                <Link to={`${isAuthenticated ? '/settings' : '/auth/login'}`}>
                    <div className="nav-settings text-dark pointer">
                        <span uk-icon={`icon: ${isAuthenticated ? 'settings' : 'sign-in'}; ratio: 1.2`}></span>
                    </div>
                </Link>
            </section>
        </section>
    </Fragment>
};
export default Navbar;