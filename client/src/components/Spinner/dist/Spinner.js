"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var ball_triangle_svg_1 = require("../../assets/loaders/ball-triangle.svg");
var SpinnerLarge = function () {
    var portalSpinner = document.getElementById("portalSpinner");
    return react_dom_1["default"].createPortal(react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: "box-center" },
            react_1["default"].createElement("img", { src: ball_triangle_svg_1["default"], alt: "spinner", className: "img-fluid" }))), portalSpinner);
};
exports["default"] = SpinnerLarge;
