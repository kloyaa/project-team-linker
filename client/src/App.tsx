import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import setAuthToken from "./helpers/token/setAuthToken";
import { store } from "./redux";
import { loadUser } from "./redux/authentication/auth-action";
import ProtectedRoute from "./routes/ProtectedRoute";


const LandingPage = lazy(() => import('./views/Landing/Landing'))
const RegisitrationPage = lazy(() => import('./views/Registration/Registration'))
const Login = lazy(() => import('./views/Login/Login'))
const Feed = lazy(() => import('./views/Feed/Feed'))
const ProfilePage = lazy(() => import('./views/Profile/Profile'))

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);
  return (
    <div>
      {/* <NavbarTop /> */}
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/registration" component={RegisitrationPage} />
          <Route path="/login" component={Login} />
          <Route path="/profile/edit" component={ProfilePage} />
          <ProtectedRoute path="/feed" component={Feed} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
