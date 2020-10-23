import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../../helpers/authentication/isAuthenticated';
import { useAuthenticationState, useProfileState } from '../../../hooks/hooks';
import PostsComponent from './Posts/Posts';
import temp_avatar from '../../../assets/img/avatar.jpg';

const AVATAR_STYLE = {
    height: "100px",
    width: "100px"
}
const Posts: React.FC<any> = () => {
    const authentication = useAuthenticationState();
    const profileState = useProfileState();
    const { profile } = profileState;

    console.log()
    // 1. Check token if empty and state is not Authenticated
    // 2. return to login component if not authenticated
    if (isAuthenticated(authentication) && !localStorage.token) {
        return <Redirect to="/auth/login" />
    }

    return <Fragment>
        <div className="row justify-content-center bg-fade">
            <div className="col-xl-3">
                <div className="border wrapper mt-3 bg-white p-5">
                    <div className="text-center text-dark">
                        <img
                            src={temp_avatar}
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
            </div>
            <div className="col-xm-12 col-md-sm-12 col-md-9 col-lg-7 col-xl-6">
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex w-50">
                        <div className="d-flex align-items-center text-dark pointer mr-3">
                            <i className="fas fa-fire mr-1"></i>
                            <span>Hot topics</span>
                        </div>
                        <div className="d-flex align-items-center text-dark  pointer">
                            <i className="fas fa-project-diagram mr-1"></i>
                            <span>My projects</span>
                        </div>
                    </div>

                    <button className="uk-button uk-button-primary">
                        <div className="d-flex align-items-center">
                            <span className="mr-1" uk-icon="icon: git-fork; ratio: 0.8"></span>
                            <span>Forked Ideas</span>
                        </div>
                    </button>
                </div>
                <PostsComponent />
            </div>
            <div className="col-xl-2">

                <div className="mt-3 bg-white border p-3">
                    <div className="text-dark-fade fs-13">
                        <i className="fas fa-map-pin mr-1"></i>
                        <span>Communication</span>
                    </div>
                    <div className="mt-2">
                        <div>
                            <i className="far fa-comments mr-2"></i>
                            <span>Team discussion</span>
                        </div>
                        <div>
                            <i className="far fa-comment mr-2"></i>
                            <span>Messages</span>
                        </div>
                    </div>
                </div>
                <div className="mt-3 bg-white border p-3">
                    <div className="text-dark-fade fs-13">
                        <i className="fas fa-map-pin mr-1"></i>
                        <span>Pinned</span>
                    </div>
                    <div className="text-left fs-14 mt-2">
                        <i className="fas fa-th mr-1"></i>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                    </div>
                    <div className="text-left fs-14 mt-2">
                        <i className="fas fa-th mr-1"></i>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                    </div>
                    <div className="text-left fs-14 mt-2">
                        <i className="fas fa-th mr-1"></i>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                    </div>
                </div>
                <div className="mt-3 bg-white border p-3">
                    <div>
                        <i className="fab fa-bitbucket mr-2"></i>
                        <span>GitHub Repo</span>
                    </div>
                    <div>
                        <i className="fas fa-project-diagram mr-2"></i>
                        <span>Projects</span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment >
}

export default Posts;


