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
exports.useRemoveVoteMutation = exports.RemoveVoteDocument = exports.useIsVotedLazyQuery = exports.useIsVotedQuery = exports.IsVotedDocument = exports.useAddVoteMutation = exports.AddVoteDocument = exports.useCreatePostMutation = exports.CreatePostDocument = exports.useCheckEmailLazyQuery = exports.useCheckEmailQuery = exports.CheckEmailDocument = exports.useCreateUserMutation = exports.CreateUserDocument = exports.useGetPostsLazyQuery = exports.useGetPostsQuery = exports.GetPostsDocument = exports.useUserLazyQuery = exports.useUserQuery = exports.UserDocument = exports.useLogoutLazyQuery = exports.useLogoutQuery = exports.LogoutDocument = exports.useLoginUserMutation = exports.LoginUserDocument = exports.useContinueWithFaceBookMutation = exports.ContinueWithFaceBookDocument = exports.VoteType = void 0;
var client_1 = require("@apollo/client");
var Apollo = __importStar(require("@apollo/client"));
var VoteType;
(function (VoteType) {
    VoteType["Up"] = "UP";
    VoteType["Down"] = "DOWN";
})(VoteType = exports.VoteType || (exports.VoteType = {}));
exports.ContinueWithFaceBookDocument = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation ContinueWithFaceBook($accessToken: String!) {\n  loginFaceBook(accessToken: $accessToken) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation ContinueWithFaceBook($accessToken: String!) {\n  loginFaceBook(accessToken: $accessToken) {\n    path\n    message\n  }\n}\n    "])));
function useContinueWithFaceBookMutation(baseOptions) {
    return Apollo.useMutation(exports.ContinueWithFaceBookDocument, baseOptions);
}
exports.useContinueWithFaceBookMutation = useContinueWithFaceBookMutation;
exports.LoginUserDocument = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation LoginUser($loginInput: UserLoginInput!) {\n  login(loginInput: $loginInput) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation LoginUser($loginInput: UserLoginInput!) {\n  login(loginInput: $loginInput) {\n    path\n    message\n  }\n}\n    "])));
function useLoginUserMutation(baseOptions) {
    return Apollo.useMutation(exports.LoginUserDocument, baseOptions);
}
exports.useLoginUserMutation = useLoginUserMutation;
exports.LogoutDocument = client_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query Logout {\n  logout\n}\n    "], ["\n    query Logout {\n  logout\n}\n    "])));
function useLogoutQuery(baseOptions) {
    return Apollo.useQuery(exports.LogoutDocument, baseOptions);
}
exports.useLogoutQuery = useLogoutQuery;
function useLogoutLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.LogoutDocument, baseOptions);
}
exports.useLogoutLazyQuery = useLogoutLazyQuery;
exports.UserDocument = client_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query User {\n  me {\n    username\n    displayName\n    email\n    picture_url\n  }\n}\n    "], ["\n    query User {\n  me {\n    username\n    displayName\n    email\n    picture_url\n  }\n}\n    "])));
function useUserQuery(baseOptions) {
    return Apollo.useQuery(exports.UserDocument, baseOptions);
}
exports.useUserQuery = useUserQuery;
function useUserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.UserDocument, baseOptions);
}
exports.useUserLazyQuery = useUserLazyQuery;
exports.GetPostsDocument = client_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    query getPosts {\n  getPosts {\n    post_id\n    post_text\n    title\n    link\n    sub {\n      name\n      picture_url\n    }\n    vote_count\n    images\n    videos\n    user {\n      username\n      picture_url\n    }\n    comment_count\n    created_at\n  }\n}\n    "], ["\n    query getPosts {\n  getPosts {\n    post_id\n    post_text\n    title\n    link\n    sub {\n      name\n      picture_url\n    }\n    vote_count\n    images\n    videos\n    user {\n      username\n      picture_url\n    }\n    comment_count\n    created_at\n  }\n}\n    "])));
function useGetPostsQuery(baseOptions) {
    return Apollo.useQuery(exports.GetPostsDocument, baseOptions);
}
exports.useGetPostsQuery = useGetPostsQuery;
function useGetPostsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GetPostsDocument, baseOptions);
}
exports.useGetPostsLazyQuery = useGetPostsLazyQuery;
exports.CreateUserDocument = client_1.gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    mutation createUser($userInput: UserInputType!) {\n  register(userInput: $userInput) {\n    message\n    path\n  }\n}\n    "], ["\n    mutation createUser($userInput: UserInputType!) {\n  register(userInput: $userInput) {\n    message\n    path\n  }\n}\n    "])));
function useCreateUserMutation(baseOptions) {
    return Apollo.useMutation(exports.CreateUserDocument, baseOptions);
}
exports.useCreateUserMutation = useCreateUserMutation;
exports.CheckEmailDocument = client_1.gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    query checkEmail($email: String!) {\n  isEmailExists(email: $email)\n}\n    "], ["\n    query checkEmail($email: String!) {\n  isEmailExists(email: $email)\n}\n    "])));
function useCheckEmailQuery(baseOptions) {
    return Apollo.useQuery(exports.CheckEmailDocument, baseOptions);
}
exports.useCheckEmailQuery = useCheckEmailQuery;
function useCheckEmailLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.CheckEmailDocument, baseOptions);
}
exports.useCheckEmailLazyQuery = useCheckEmailLazyQuery;
exports.CreatePostDocument = client_1.gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    mutation createPost($postData: PostInputMarkDown!) {\n  createPostWithMarkDown(postData: $postData) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation createPost($postData: PostInputMarkDown!) {\n  createPostWithMarkDown(postData: $postData) {\n    path\n    message\n  }\n}\n    "])));
function useCreatePostMutation(baseOptions) {
    return Apollo.useMutation(exports.CreatePostDocument, baseOptions);
}
exports.useCreatePostMutation = useCreatePostMutation;
exports.AddVoteDocument = client_1.gql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    mutation addVote($voteData: Vote!) {\n  addVote(voteData: $voteData) {\n    message\n    path\n  }\n}\n    "], ["\n    mutation addVote($voteData: Vote!) {\n  addVote(voteData: $voteData) {\n    message\n    path\n  }\n}\n    "])));
function useAddVoteMutation(baseOptions) {
    return Apollo.useMutation(exports.AddVoteDocument, baseOptions);
}
exports.useAddVoteMutation = useAddVoteMutation;
exports.IsVotedDocument = client_1.gql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    query isVoted($post_id: String!) {\n  isVoted(post_id: $post_id)\n}\n    "], ["\n    query isVoted($post_id: String!) {\n  isVoted(post_id: $post_id)\n}\n    "])));
function useIsVotedQuery(baseOptions) {
    return Apollo.useQuery(exports.IsVotedDocument, baseOptions);
}
exports.useIsVotedQuery = useIsVotedQuery;
function useIsVotedLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.IsVotedDocument, baseOptions);
}
exports.useIsVotedLazyQuery = useIsVotedLazyQuery;
exports.RemoveVoteDocument = client_1.gql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    mutation removeVote($voteData: Vote!) {\n  removeVote(voteData: $voteData) {\n    message\n    path\n  }\n}\n    "], ["\n    mutation removeVote($voteData: Vote!) {\n  removeVote(voteData: $voteData) {\n    message\n    path\n  }\n}\n    "])));
function useRemoveVoteMutation(baseOptions) {
    return Apollo.useMutation(exports.RemoveVoteDocument, baseOptions);
}
exports.useRemoveVoteMutation = useRemoveVoteMutation;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=graphql.js.map