"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var setAuthToken_1 = require("./helpers/token/setAuthToken");
var index_1 = require("./redux/index");
//Load user if token is not null
var auth_action_1 = require("./redux/authentication/auth-action");
var Spinner_1 = require("./components/Spinner/Spinner");
var hooks_1 = require("./hooks/hooks");
var LandingPage = react_1.lazy(function () { return Promise.resolve().then(function () { return require('./views/Landing/Landing'); }); });
var RegisitrationPage = react_1.lazy(function () { return Promise.resolve().then(function () { return require('./views/Registration/Registration'); }); });
var Login = react_1.lazy(function () { return Promise.resolve().then(function () { return require('./views/Login/Login'); }); });
if (localStorage.token) {
    setAuthToken_1["default"](localStorage.token);
}
function App() {
    var authentication = hooks_1.useTypedSelector(function (state) { return state.authentication; });
    var loading = authentication.loading;
    react_1.useEffect(function () {
        index_1.store.dispatch(auth_action_1.loadUser());
    }, []);
    if (loading) {
        return react_1["default"].createElement(Spinner_1["default"], null);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", null) },
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: LandingPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/registration", component: RegisitrationPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: Login }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/profile/edit", component: LandingPage })))));
}
exports["default"] = App;
