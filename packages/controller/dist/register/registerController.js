"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var graphql_1 = require("../generated/graphql");
var GrapQLOptions = { client: __1.GraphQlClient.getClient() };
var RegisterController = function (_a) {
    var children = _a.children;
    var submit = graphql_1.useCreateUserMutation(__assign({}, GrapQLOptions))[0];
    var checkEmail = graphql_1.useCheckEmailQuery(__assign(__assign({}, GrapQLOptions), { variables: { email: '' } })).refetch;
    var childrenValues = {
        submit: submit,
        checkEmail: checkEmail,
    };
    return react_1.default.createElement(react_1.default.Fragment, null, children(childrenValues));
};
exports.RegisterController = RegisterController;
//# sourceMappingURL=registerController.js.map