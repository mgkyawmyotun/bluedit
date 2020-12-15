"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var graphql_1 = require("../generated/graphql");
var RegisterController = function (_a) {
    var children = _a.children;
    var _b = graphql_1.useCreateUserMutation({ client: __1.client }), createUser = _b[0], results = _b[1];
    var childrenValues = {
        submit: function (user) {
            createUser({
                variables: {
                    userInput: user,
                },
            });
        },
        results: results,
    };
    return react_1.default.createElement(react_1.default.Fragment, null, children(childrenValues));
};
exports.RegisterController = RegisterController;
//# sourceMappingURL=registerController.js.map