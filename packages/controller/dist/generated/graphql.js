"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateUserMutation = exports.CreateUserDocument = void 0;
var Apollo = __importStar(require("@apollo/client"));
var client_1 = require("@apollo/client");
exports.CreateUserDocument = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation createUser($userInput: UserInputType!) {\n    register(userInput: $userInput) {\n      message\n      path\n    }\n  }\n"], ["\n  mutation createUser($userInput: UserInputType!) {\n    register(userInput: $userInput) {\n      message\n      path\n    }\n  }\n"])));
function useCreateUserMutation(baseOptions) {
    return Apollo.useMutation(exports.CreateUserDocument, baseOptions);
}
exports.useCreateUserMutation = useCreateUserMutation;
var templateObject_1;
//# sourceMappingURL=graphql.js.map