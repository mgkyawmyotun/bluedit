"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
var formik_1 = require("formik");
var react_1 = __importDefault(require("react"));
var RegisterController = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(formik_1.Formik, { initialValues: {
            username: '',
            email: '',
            displayName: '',
            password: '',
        }, onSubmit: function () {
            console.log('Submited');
        } }, function (props) { return children(props); }));
};
exports.RegisterController = RegisterController;
//# sourceMappingURL=registerController.js.map