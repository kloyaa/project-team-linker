import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import setAuthToken from "./helpers/token/setAuthToken";
import { store } from "./redux";
import { loadUser } from "./redux/authentication/auth-action";
import ProtectedRoute from "./routes/ProtectedRoute";

const LandingPage = lazy(() => import('./views/Landing/Landing'))
const RegisitrationPage = lazy(() => import('./views/Registration/Registration'))
const LoginPage = lazy(() => import('./views/Login/Login'))
const FeedPage = lazy(() => import('./views/Feed/Feed'))
const EditProfilePage = lazy(() => import('./views/EditProfile/Profile'))

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/registration" component={RegisitrationPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile/edit" component={EditProfilePage} />
          <ProtectedRoute path="/feed" component={FeedPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
