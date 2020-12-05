"use strict";
exports.__esModule = true;
exports.EmailRegister = void 0;
var layout_1 = require("antd/lib/layout/layout");
var Sider_1 = require("antd/lib/layout/Sider");
var image_1 = require("next/image");
exports.EmailRegister = function () {
    return (React.createElement(layout_1["default"], null,
        React.createElement(Sider_1["default"], null,
            React.createElement(image_1["default"], { src: "/registerEmail.jpg", alt: "Picture of the author", width: 200, height: 850, layout: 'fixed' })),
        React.createElement(layout_1.Content, null)));
};
