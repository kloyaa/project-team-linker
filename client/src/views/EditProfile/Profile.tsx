import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../hooks/hooks';
import { logoutUser } from '../../redux/authentication/auth-action';
import Profile from './EditProfile/Profile'

const ProfileComponent: React.FC<any> = () => {
    const dispatch: AppDispatch = useDispatch();
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5 ">
                        <div className="d-flex justify-content-around mb-5">
                            <Link to="/feed">
                                <span className="text-dark"
                                    uk-tooltip="Home"
                                    uk-icon="icon: home; ratio: 1.3"></span>
                            </Link>
                            <Link to="/projects">
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
                        <Profile />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProfileComponent;

