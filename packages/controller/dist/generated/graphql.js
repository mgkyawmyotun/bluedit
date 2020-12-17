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
exports.useContinueWithFaceBookMutation = exports.ContinueWithFaceBookDocument = exports.useCheckEmailLazyQuery = exports.useCheckEmailQuery = exports.CheckEmailDocument = exports.useCreateUserMutation = exports.CreateUserDocument = exports.useUserLazyQuery = exports.useUserQuery = exports.UserDocument = exports.useLoginUserMutation = exports.LoginUserDocument = void 0;
var client_1 = require("@apollo/client");
var Apollo = __importStar(require("@apollo/client"));
exports.LoginUserDocument = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation LoginUser($loginInput: UserLoginInput!) {\n  login(loginInput: $loginInput) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation LoginUser($loginInput: UserLoginInput!) {\n  login(loginInput: $loginInput) {\n    path\n    message\n  }\n}\n    "])));
function useLoginUserMutation(baseOptions) {
    return Apollo.useMutation(exports.LoginUserDocument, baseOptions);
}
exports.useLoginUserMutation = useLoginUserMutation;
exports.UserDocument = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query User {\n  me {\n    username\n    displayName\n    password\n    email\n  }\n}\n    "], ["\n    query User {\n  me {\n    username\n    displayName\n    password\n    email\n  }\n}\n    "])));
function useUserQuery(baseOptions) {
    return Apollo.useQuery(exports.UserDocument, baseOptions);
}
exports.useUserQuery = useUserQuery;
function useUserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.UserDocument, baseOptions);
}
exports.useUserLazyQuery = useUserLazyQuery;
exports.CreateUserDocument = client_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation createUser($userInput: UserInputType!) {\n  register(userInput: $userInput) {\n    message\n    path\n  }\n}\n    "], ["\n    mutation createUser($userInput: UserInputType!) {\n  register(userInput: $userInput) {\n    message\n    path\n  }\n}\n    "])));
function useCreateUserMutation(baseOptions) {
    return Apollo.useMutation(exports.CreateUserDocument, baseOptions);
}
exports.useCreateUserMutation = useCreateUserMutation;
exports.CheckEmailDocument = client_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query checkEmail($email: String!) {\n  isEmailExists(email: $email)\n}\n    "], ["\n    query checkEmail($email: String!) {\n  isEmailExists(email: $email)\n}\n    "])));
function useCheckEmailQuery(baseOptions) {
    return Apollo.useQuery(exports.CheckEmailDocument, baseOptions);
}
exports.useCheckEmailQuery = useCheckEmailQuery;
function useCheckEmailLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.CheckEmailDocument, baseOptions);
}
exports.useCheckEmailLazyQuery = useCheckEmailLazyQuery;
exports.ContinueWithFaceBookDocument = client_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation ContinueWithFaceBook($accessToken: String!) {\n  loginFaceBook(accessToken: $accessToken) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation ContinueWithFaceBook($accessToken: String!) {\n  loginFaceBook(accessToken: $accessToken) {\n    path\n    message\n  }\n}\n    "])));
function useContinueWithFaceBookMutation(baseOptions) {
    return Apollo.useMutation(exports.ContinueWithFaceBookDocument, baseOptions);
}
exports.useContinueWithFaceBookMutation = useContinueWithFaceBookMutation;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=graphql.js.map