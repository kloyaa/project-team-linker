import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../hooks/hooks';
import { logoutUser } from '../../../redux/authentication/auth-action';
import { useAuthenticationState } from '../../../hooks/hooks';
import classes from './Navbar.module.css';

const NavbarComponent: React.FC<any> = () => {
    const dispatch: AppDispatch = useDispatch();
    const authentication = useAuthenticationState();
    const onLogout = (): void => dispatch(logoutUser());

    return <Fragment>
        <div className="bg-white d-flex align-items-center justify-content-between p-3 sticky-top">
            {/* ##Home icon */}
            {authentication.isAuthenticated && localStorage.token
                && <Fragment>
                    <Link to="/feed" style={{ textDecoration: "none" }}>
                        <span className="text-dark text-uppercase fm-gilmer"><strong>Dev</strong>iance</span>
                    </Link>

                    {/* ##Center block */}
                    <div className={classes.search}>
                        <div className="d-flex align-items-center">
                            {/* ##Search form */}
                            <div className="m-0 p-0">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" uk-icon="icon: search"></span>
                                    <input className="uk-input uk-form-width-large" type="search" placeholder="Search here..." />
                                </div>
                            </div>
                            {/* ##Post icon */}
                            <span
                                className="navbar-brand text-dark pointer ml-2"
                                uk-tooltip="title: Post new Idea; pos: bottom"
                                uk-icon="icon: file-edit; ratio: 1.5"></span>
                        </div>
                    </div>

                    {/* ##Left side icons */}
                    <div className="d-flex align-items-center position-relative">

                        {/* ##Settings icon */}
                        <span className="text-dark pointer" uk-icon="icon: settings; ratio: 1.3"></span>
                        <div className="z-depth-1" uk-dropdown="mode: click; offset: 36">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li className="uk-active b text-dark d-flex align-items-center">
                                    <span className="uk-margin-small-right" uk-icon="icon: user"></span>
                                    <span>Profile</span>
                                </li>
                                <li className="uk-parent text-dark-fade">
                                    <div className="mt-2">
                                        <span className="ml-1 fs-11 b">Shortcuts</span>
                                    </div>
                                    <ul className="uk-nav-sub">
                                        <li>
                                            <Link to="/timeline/profile/edit">
                                                Edit profile
                                            </Link>
                                        </li>
                                        <li><a href="#">Overview</a></li>
                                    </ul>
                                </li>
                                <li className="uk-active b text-dark mt-3 d-flex align-items-center">
                                    <span className="uk-margin-small-right" uk-icon="icon: cog"></span>
                                    <span>Settings</span>
                                </li>
                                <li className="uk-parent text-dark-fade">
                                    <div className="mt-2">
                                        <span className="ml-1 fs-11 b">Shortcuts</span>
                                    </div>
                                    <ul className="uk-nav-sub">
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Languages</a></li>
                                    </ul>
                                </li>
                                <li className="uk-nav-divider"></li>
                                <li className="text-dark-fade pointer" onClick={onLogout}>
                                    <span className="uk-margin-small-right" uk-icon="icon: sign-out"></span>
                                    <span className="b">Logout</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Left side icons end */}
                </Fragment>}

            {!authentication.isAuthenticated && !localStorage.token && <Fragment>
                <div className="b text-dark d-flex justify-content-between w-100">
                    <div>
                        <Link to="/" className="text-dark uk-link-toggle">
                            <span className=" fm-gilmer text-uppercase">Deviance.io</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/feed">
                            <i className="fas fa-project-diagram text-dark"></i>
                        </Link>
                    </div>
                </div>
            </Fragment>}
        </div>
    </Fragment >;
}

export default NavbarComponent;