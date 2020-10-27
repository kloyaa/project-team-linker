import React, { Fragment } from 'react'
import { useAuthenticationState, useProfileState } from '../../../hooks/hooks';
import loadable from '@loadable/component';
import FeedMenu from '../../../components/Menu/FeedMenu/FeedMenu';
import classes from './Feed.module.css';
// import { store } from '../../../redux';
// import { loadUser } from '../../../redux/loaduser/load-action';

const Profile = loadable(() => import('./Profile/Profile'));
const PostsComponent = loadable(() => import('./Feed/Feed'));
const PanelRight = loadable(() => import('./PanelRight/PanelRight'));

const Posts: React.FC<any> = () => {
    const authenticationState = useAuthenticationState();
    const profileState = useProfileState();
    const { profile } = profileState;
    const { isAuthenticated } = authenticationState;

    return <Fragment>
        <div className="row justify-content-center bg-fade">
            {isAuthenticated &&
                <div className="col-xl-3">
                    {profile
                        && <section className={classes.profile}>
                            <Profile />
                        </section>}
                </div>
            }
            <div className="col-xm-12 col-md-sm-12 col-md-9 col-lg-7 col-xl-6">
                <FeedMenu />
                <PostsComponent />
            </div>
            {isAuthenticated &&
                <div className="col-xl-2">
                    <section>
                        <PanelRight />
                    </section>
                </div>
            }
        </div>
    </Fragment >
}

export default Posts;


