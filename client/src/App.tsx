import React, { Fragment, lazy, Suspense, FC, useEffect } from "react";
import { Switch, Route, useLocation } from 'react-router-dom'
import { store } from "./redux";
import { loadUser } from "./redux/loaduser/load-action";
import { NavbarBottom } from "./components/NavbarBottom/NavbarBottom";
import SideBar from "./components/Sidebar/Sidebar";
import setAuthToken from "./helpers/token/setAuthToken";
import Navbar from "./components/Navbar/Navbar";
import SpinnerLarge from "./components/Spinner/Spinner";

const RegisitrationPage = lazy(() => import('./views/Registration/Registration'));
const LoginPage = lazy(() => import('./views/Login/Login'));
const FeedPage = lazy(() => import('./views/Content/Feed/Feed'));
const EditProfilePage = lazy(() => import('./views/EditProfile/Profile'));
const HomePage = lazy(() => import('./views/Home/Home'));
const SettingsPage = lazy(() => import('./views/Settings/Settings'));

const App: FC<any> = () => {
  const location = useLocation();
  // 1. If localstorage.token is exist or active
  // 2. forward token to setAuthToken
  // 3. Load user if authenticated
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, [location.pathname]);
  return <Fragment>
    {/* Sidebar @sm-md-lg*/}
    <SideBar>
      {/* Navbar top @sm-md-lg*/}
      <Navbar />

      {/* Routes starts here */}
      <div className="container-fluid">
        <Suspense fallback={<SpinnerLarge />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/feed" component={FeedPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/auth/registration" component={RegisitrationPage} />
            <Route path="/auth/login" component={LoginPage} />
            <Route path="/timeline/profile/edit" component={EditProfilePage} />
            <Route path="/timeline/:id" component={EditProfilePage} />
          </Switch>
        </Suspense>
      </div>
    </SideBar>
    {/* Navbar bottom @xs only*/}
    <NavbarBottom />
  </Fragment >
}
export default App;

