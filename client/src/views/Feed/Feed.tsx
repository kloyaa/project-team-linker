import React, { lazy, useEffect } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/hooks'
import SpinnerLarge from '../../components/Spinner/Spinner';
import NavbarMini from '../../components/Navbar/NavbarMini/NavbarMini';

const Posts = lazy(() => import('./Posts/Posts'));

const Feed: React.FC<any> = () => {
    const history = useHistory();
    const { path } = useRouteMatch();

    const profileState = useTypedSelector(state => state.profile);
    const { loading, profile } = profileState;

    // useEffect(() => {
    //     if (!profile && !loading)
    //         history.push('/profile/edit');
    // }, [profile, loading, history]);

    if (loading) return <SpinnerLarge />;

    return (
        <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-md-7">
                    <NavbarMini />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <Switch>
                        <Route exact path={`${path}`} component={Home} />
                        <Route path={`${path}/posts`} component={Posts} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

function Home() {
    return <h1>Homepage!</h1>
}

export default Feed
