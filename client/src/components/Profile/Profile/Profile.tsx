import React, { Fragment } from 'react'
import { useProfileState } from '../../../hooks/hooks';
import tempAvatar from '../../../assets/img/avatar.jpg'

const AVATAR_STYLE = {
    height: "100px",
    width: "100px"
}
const ProfileComponent: React.FC<any> = () => {
    const profileState = useProfileState();
    const { profile } = profileState;

    return <Fragment>
        <div className="border wrapper mt-3 bg-white p-5">
            <div className="text-center text-dark">
                <img
                    src={tempAvatar}
                    alt="avatar"
                    className="img-fluid rounded-pill"
                    style={AVATAR_STYLE} />
                <h4 className="p-0 m-0 mt-2 b text-dark">{profile?.firstName}{' '}{profile?.lastName}</h4>
                <div className="d-flex justify-content-between fs-13">
                    <div className="d-flex align-items-center">
                        <span className="text-dark mr-1" uk-icon="icon: users; ratio: 0.8"></span>
                        <span>20,000 <strong>followers</strong></span>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="text-dark mr-1" uk-icon="icon: rss; ratio: 0.8"></span>
                        <span>152 <strong>following</strong></span>
                    </div>
                </div>
                <hr></hr>
                        I'm a newbie in web development, My pleasure to work with you.
                        <div className="mt-3">
                    <button className="uk-button uk-button-default uk-button-small mt-2">
                        <div className="text-dark d-flex align-items-center">
                            <span className="mr-1" uk-icon="icon: pencil; ratio: 0.8"></span>
                            <span>Edit profile</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className="border bg-white mt-3 p-3 d-flex align-items-center justify-content-center">
            <div className="text-dark d-flex align-items-center mr-3">
                <i className="fas fa-project-diagram mr-1 b"></i>
                <span>Projects</span>
            </div>
            <div className="text-dark d-flex align-items-center">
                <i className="far fa-chart-bar mr-1 b"></i>
                <span>Analytics</span>
            </div>
        </div>
    </Fragment>;
}

export default ProfileComponent;