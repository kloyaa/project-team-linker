import React, { Fragment } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../hooks/hooks';
import { logoutUser } from '../../../redux/authentication/auth-action';

type NavbarMini = {}
const NavbarMini: React.FC<NavbarMini> = () => {
    const dispatch: AppDispatch = useDispatch();
    let { url } = useRouteMatch();

    return (
        <Fragment>
            <div className="d-flex justify-content-around mb-5">
                <Link to="/feed">
                    <span className="text-dark"
                        uk-tooltip="Home"
                        uk-icon="icon: home; ratio: 1.3"></span>
                </Link>
                <Link to={`${url}/posts`}>
                    <span className="text-dark"
                        uk-tooltip="Projects"
                        uk-icon="icon: code; ratio: 1.3"></span>
                </Link>
                <span className="text-dark"
                    uk-tooltip="Messages"
                    uk-icon="icon: mail; ratio: 1.3"></span>
                <span className="text-dark"
                    uk-tooltip="Notifications"
                    uk-icon="icon: bell; ratio: 1.3"></span>
                <span
                    onClick={() => dispatch(logoutUser())}
                    className="text-dark pointer"
                    uk-tooltip="Sign out"
                    uk-icon="icon: sign-out; ratio: 1.3"></span>
            </div>
        </Fragment>
    );
}

export default NavbarMini;