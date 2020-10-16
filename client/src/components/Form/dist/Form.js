"use strict";
exports.__esModule = true;
exports.ChkBoxOPT = exports.ChkBoxAgreement = exports.InputPasswordConfirm = exports.InputPassword = exports.InputEmail = void 0;
var react_1 = require("react");
exports.InputEmail = function (_a) {
    var _b;
    var errors = _a.errors, register = _a.register, responseMessage = _a.responseMessage;
    var _c = react_1.useState({
        emailValue: (_b = localStorage.getItem('email')) === null || _b === void 0 ? void 0 : _b.toString()
    }), email = _c[0], setEmail = _c[1];
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: "uk-inline mt-1" },
            react_1["default"].createElement("span", { className: "uk-form-icon " + ((errors || responseMessage) && 'text-danger'), "uk-icon": "icon: mail" }),
            react_1["default"].createElement("input", { value: email.emailValue, onChange: function (e) { return setEmail(e.target.value); }, name: "email", ref: register, className: "uk-input " + ((errors || responseMessage) && 'uk-form-danger') + " text-dark uk-form-width-large", type: "text", placeholder: "Email" })),
        errors && react_1["default"].createElement("p", { className: "text-danger fw-400 fs-13 p-0 m-0" }, errors.message),
        responseMessage && react_1["default"].createElement("p", { className: "text-danger fw-400 fs-13  p-0 m-0" }, responseMessage)));
};
exports.InputPassword = function (_a) {
    var register = _a.register, errors = _a.errors;
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: "uk-inline mt-2" },
            react_1["default"].createElement("span", { className: "uk-form-icon uk-form-icon-flip " + (errors && 'text-danger'), "uk-icon": "icon: lock" }),
            react_1["default"].createElement("input", { name: "password", ref: register, className: "uk-input " + (errors && 'uk-form-danger') + " text-dark uk-form-width-large", type: "password", placeholder: "Password" })),
        errors && react_1["default"].createElement("p", { className: "text-danger fw-400 fs-13  p-0 m-0" }, errors.message)));
};
exports.InputPasswordConfirm = function (_a) {
    var register = _a.register, errors = _a.errors, passwordIsEqual = _a.passwordIsEqual;
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: "uk-inline mt-2" },
            react_1["default"].createElement("span", { className: "uk-form-icon uk-form-icon-flip " + (errors && 'text-danger'), "uk-icon": "icon: lock" }),
            react_1["default"].createElement("input", { name: "confirmPassword", ref: register, className: "uk-input " + (errors && 'uk-form-danger') + " text-dark uk-form-width-large", type: "password", placeholder: "Confirm password" })),
        errors && react_1["default"].createElement("p", { className: "text-danger fw-400 fs-13  p-0 m-0" }, errors.message),
        passwordIsEqual && react_1["default"].createElement("p", { className: "text-danger fw-400 fs-13  p-0 m-0" }, "Password does not match ")));
};
exports.ChkBoxAgreement = function (_a) {
    var register = _a.register, errors = _a.errors;
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("label", null,
            react_1["default"].createElement("input", { name: "ChkBoxAgreement", ref: register, className: "uk-checkbox", type: "checkbox" }),
            react_1["default"].createElement("span", { className: (errors ? 'text-danger b' : 'text-dark') + " ml-1 fs-14" }, " I agree to Deviance's Term of service "))));
};
exports.ChkBoxOPT = function () {
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("label", null,
            react_1["default"].createElement("input", { className: "uk-checkbox", type: "checkbox" }),
            react_1["default"].createElement("span", { className: "ml-1 text-dark fs-14" }, "I don't want to receive Developer's Allience notifications to the email I have provided *"))));
};
