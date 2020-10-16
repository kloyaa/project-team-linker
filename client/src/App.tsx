import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import setAuthToken from "./helpers/token/setAuthToken";
import {store} from "./redux/index";
import { loadUser } from "./redux/authentication/auth-action";
import SpinnerLarge from "./components/Spinner/Spinner";
import { useTypedSelector } from "./hooks/hooks";

const LandingPage = lazy(() => import('./views/Landing/Landing'))
const RegisitrationPage = lazy(() => import('./views/Registration/Registration'))
const Login = lazy(() => import('./views/Login/Login'))
const Feed = lazy(() => import('./views/Feed/Feed'))
const Profile = lazy(() => import('./views/Profile/Profile'))

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  const authentication = useTypedSelector((state : any) => state.authentication);
  const { loading, isAuthenticated  } = authentication;
  
  useEffect(() => {
    store.dispatch(loadUser())
  }, [isAuthenticated]);

  if(loading) {
    return <SpinnerLarge />
  }
  return (
    <div>
        {/* <NavbarTop /> */}
        <Suspense fallback={ <div></div>}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/registration" component={RegisitrationPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile/edit" component={Profile} />
            <Route exact path="/feed" component={Feed} />
          </Switch>
        </Suspense>
    </div>
  );
}

export default App;
