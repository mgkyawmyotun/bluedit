"use strict";
exports.__esModule = true;
exports.EmailRegister = void 0;
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var layout_1 = require("antd/lib/layout/layout");
var Sider_1 = require("antd/lib/layout/Sider");
var react_1 = require("react");
var Item = antd_1.Form.Item;
exports.EmailRegister = function () {
    return (react_1["default"].createElement(layout_1["default"], { color: "white" },
        react_1["default"].createElement(Sider_1["default"], { width: "156px" },
            react_1["default"].createElement("img", { src: "/registerEmail.jpg" })),
        react_1["default"].createElement(layout_1.Content, null,
            react_1["default"].createElement(antd_1.Row, null,
                react_1["default"].createElement(antd_1.Col, { style: { marginTop: '100px', marginLeft: '20px' } },
                    react_1["default"].createElement(antd_1.Row, null,
                        react_1["default"].createElement("span", { style: { fontSize: 30, fontWeight: 'bold' } }, "SingUp")),
                    react_1["default"].createElement(antd_1.Row, null,
                        react_1["default"].createElement("p", null,
                            "By continuing, you agree to our UserAgreement and",
                            react_1["default"].createElement("br", null),
                            "Privacy Policy. CONTINUE")),
                    react_1["default"].createElement(antd_1.Row, { style: { marginTop: '100px' } },
                        react_1["default"].createElement(antd_1.Button, { type: "primary", className: "emailRegisterField", icon: react_1["default"].createElement(icons_1.GoogleOutlined, null), size: 'large' }, "Continue With Google")),
                    react_1["default"].createElement(antd_1.Row, { style: { marginTop: '30px' } },
                        react_1["default"].createElement(antd_1.Button, { className: "emailRegisterField", icon: react_1["default"].createElement(icons_1.FacebookOutlined, null), size: 'large' }, "Continue With FaceBook")),
                    react_1["default"].createElement(antd_1.Divider, { dashed: true }, " OR "),
                    react_1["default"].createElement(antd_1.Row, { style: { marginTop: '30px' } },
                        react_1["default"].createElement(antd_1.Form, null,
                            react_1["default"].createElement(Item, { label: "Email", name: "email", className: "emailRegisterFieldInput" },
                                react_1["default"].createElement(antd_1.Input, null)))),
                    react_1["default"].createElement(antd_1.Row, null,
                        react_1["default"].createElement(antd_1.Button, { size: "large", type: "primary", className: "emailRegisterFieldInput" }, "Continue")))))));
};
