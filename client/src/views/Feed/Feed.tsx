import React, { lazy } from 'react'
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/hooks'
import SpinnerLarge from '../../components/Spinner/Spinner';
import NavbarMini from '../../components/Navbar/NavbarMini/NavbarMini';

const Posts = lazy(() => import('./Posts/Posts'));

const Feed: React.FC<any> = () => {
    let { path } = useRouteMatch();
    const profileState = useTypedSelector(state => state.profile);
    const { profile, loading } = profileState;

    if (loading) {
        return <SpinnerLarge />
    }
    if ((profile === null) && (!loading)) {
        return <Redirect to="/profile/edit" />
    }
    return (
        <div className="container">
            <div className="row justify-content-center p-5">
                <div className="col-md-7">
                    <NavbarMini />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia quisquam commodi molestias labore assumenda, amet ea pariatur aspernatur accusamus!
                </div>
                <div className="col-md">
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
