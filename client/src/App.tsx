import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import { store } from "./redux";
import { loadUser } from "./redux/authentication/auth-action";
import { useAuthenticationState } from "./hooks/hooks";
import setAuthToken from "./helpers/token/setAuthToken";
import Navbar from "./components/Navbar/Navbar";
import SpinnerLarge from "./components/Spinner/Spinner";

const RegisitrationPage = lazy(() => import('./views/Registration/Registration'));
const LoginPage = lazy(() => import('./views/Login/Login'));
const PostPage = lazy(() => import('./views/Content/Posts/Posts'));
const EditProfilePage = lazy(() => import('./views/EditProfile/Profile'));

// 1. If localstorage.token is exist or active
// 2. forward token to setAuthToken
// 3. Load user if authenticated
if (localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(loadUser());
}
const App: React.FC<any> = () => {
  const authentication = useAuthenticationState();
  const history = useHistory();

  useEffect(() => {
    // 1. if not authenticated and not localstorage.token 
    // 2. return to login component
    if (!authentication.isAuthenticated && !localStorage.token)
      history.push('/auth/login');
  }, [authentication.isAuthenticated, history]);

  return <Fragment>
    <Navbar />
    {/* Routes starts here */}
    <div className="container-fluid">
      <Suspense fallback={<SpinnerLarge />}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/feed" component={PostPage} />
          <Route path="/auth/registration" component={RegisitrationPage} />
          <Route path="/auth/login" component={LoginPage} />
          <Route path="/timeline/profile/edit" component={EditProfilePage} />
          <Route path="/timeline/:id" component={EditProfilePage} />
        </Switch>
      </Suspense>
    </div>
  </Fragment >
}
export default App;

