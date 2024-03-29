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
exports.CreatePostWithMarkDownDocument = exports.useIsJoinLazyQuery = exports.useIsJoinQuery = exports.IsJoinDocument = exports.useLeaveSubMutation = exports.LeaveSubDocument = exports.useJoinSubBlueEditMutation = exports.JoinSubBlueEditDocument = exports.useGetJoinedSubLazyQuery = exports.useGetJoinedSubQuery = exports.GetJoinedSubDocument = exports.useGetSearchSubsLazyQuery = exports.useGetSearchSubsQuery = exports.GetSearchSubsDocument = exports.useCheckEmailLazyQuery = exports.useCheckEmailQuery = exports.CheckEmailDocument = exports.useCreateUserMutation = exports.CreateUserDocument = exports.useGetCommentsByUserLazyQuery = exports.useGetCommentsByUserQuery = exports.GetCommentsByUserDocument = exports.useGetPostsByUserLazyQuery = exports.useGetPostsByUserQuery = exports.GetPostsByUserDocument = exports.useJoinSubLazyQuery = exports.useJoinSubQuery = exports.JoinSubDocument = exports.useGetPostLazyQuery = exports.useGetPostQuery = exports.GetPostDocument = exports.useGetPostsLazyQuery = exports.useGetPostsQuery = exports.GetPostsDocument = exports.useUserLazyQuery = exports.useUserQuery = exports.UserDocument = exports.useLogoutLazyQuery = exports.useLogoutQuery = exports.LogoutDocument = exports.useLoginUserMutation = exports.LoginUserDocument = exports.useContinueWithFaceBookMutation = exports.ContinueWithFaceBookDocument = exports.useGetCommentsLazyQuery = exports.useGetCommentsQuery = exports.GetCommentsDocument = exports.useCreateCommentMutation = exports.CreateCommentDocument = exports.VoteType = void 0;
exports.useRemoveVoteMutation = exports.RemoveVoteDocument = exports.useIsVotedLazyQuery = exports.useIsVotedQuery = exports.IsVotedDocument = exports.useAddVoteMutation = exports.AddVoteDocument = exports.useCreatePostWithImageMutation = exports.CreatePostWithImageDocument = exports.useCreatePostWithLinkMutation = exports.CreatePostWithLinkDocument = exports.useCreatePostWithMarkDownMutation = void 0;
var client_1 = require("@apollo/client");
var Apollo = __importStar(require("@apollo/client"));
var VoteType;
(function (VoteType) {
    VoteType["Up"] = "UP";
    VoteType["Down"] = "DOWN";
})(VoteType = exports.VoteType || (exports.VoteType = {}));
exports.CreateCommentDocument = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation createComment($commentInput: CommentInput!) {\n  createComment(commentInput: $commentInput) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation createComment($commentInput: CommentInput!) {\n  createComment(commentInput: $commentInput) {\n    path\n    message\n  }\n}\n    "])));
function useCreateCommentMutation(baseOptions) {
    return Apollo.useMutation(exports.CreateCommentDocument, baseOptions);
}
exports.useCreateCommentMutation = useCreateCommentMutation;
exports.GetCommentsDocument = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query getComments($post_id: String!) {\n  getComments(post_id: $post_id) {\n    comment_text\n    comment_id\n    user {\n      displayName\n      username\n      picture_url\n    }\n    created_at\n  }\n}\n    "], ["\n    query getComments($post_id: String!) {\n  getComments(post_id: $post_id) {\n    comment_text\n    comment_id\n    user {\n      displayName\n      username\n      picture_url\n    }\n    created_at\n  }\n}\n    "])));
function useGetCommentsQuery(baseOptions) {
    return Apollo.useQuery(exports.GetCommentsDocument, baseOptions);
}
exports.useGetCommentsQuery = useGetCommentsQuery;
function useGetCommentsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GetCommentsDocument, baseOptions);
}
exports.useGetCommentsLazyQuery = useGetCommentsLazyQuery;
exports.ContinueWithFaceBookDocument = client_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation ContinueWithFaceBook($accessToken: String!) {\n  loginFaceBook(accessToken: $accessToken) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation ContinueWithFaceBook($accessToken: String!) {\n  loginFaceBook(accessToken: $accessToken) {\n    path\n    message\n  }\n}\n    "])));
function useContinueWithFaceBookMutation(baseOptions) {
    return Apollo.useMutation(exports.ContinueWithFaceBookDocument, baseOptions);
}
exports.useContinueWithFaceBookMutation = useContinueWithFaceBookMutation;
exports.LoginUserDocument = client_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    mutation LoginUser($loginInput: UserLoginInput!) {\n  login(loginInput: $loginInput) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation LoginUser($loginInput: UserLoginInput!) {\n  login(loginInput: $loginInput) {\n    path\n    message\n  }\n}\n    "])));
function useLoginUserMutation(baseOptions) {
    return Apollo.useMutation(exports.LoginUserDocument, baseOptions);
}
exports.useLoginUserMutation = useLoginUserMutation;
exports.LogoutDocument = client_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    query Logout {\n  logout\n}\n    "], ["\n    query Logout {\n  logout\n}\n    "])));
function useLogoutQuery(baseOptions) {
    return Apollo.useQuery(exports.LogoutDocument, baseOptions);
}
exports.useLogoutQuery = useLogoutQuery;
function useLogoutLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.LogoutDocument, baseOptions);
}
exports.useLogoutLazyQuery = useLogoutLazyQuery;
exports.UserDocument = client_1.gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    query User {\n  me {\n    username\n    displayName\n    email\n    picture_url\n  }\n}\n    "], ["\n    query User {\n  me {\n    username\n    displayName\n    email\n    picture_url\n  }\n}\n    "])));
function useUserQuery(baseOptions) {
    return Apollo.useQuery(exports.UserDocument, baseOptions);
}
exports.useUserQuery = useUserQuery;
function useUserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.UserDocument, baseOptions);
}
exports.useUserLazyQuery = useUserLazyQuery;
exports.GetPostsDocument = client_1.gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    query getPosts {\n  getPosts {\n    post_id\n    post_text\n    title\n    link\n    sub {\n      name\n      picture_url\n    }\n    vote_count\n    images\n    videos\n    user {\n      username\n      picture_url\n    }\n    comment_count\n    created_at\n  }\n}\n    "], ["\n    query getPosts {\n  getPosts {\n    post_id\n    post_text\n    title\n    link\n    sub {\n      name\n      picture_url\n    }\n    vote_count\n    images\n    videos\n    user {\n      username\n      picture_url\n    }\n    comment_count\n    created_at\n  }\n}\n    "])));
function useGetPostsQuery(baseOptions) {
    return Apollo.useQuery(exports.GetPostsDocument, baseOptions);
}
exports.useGetPostsQuery = useGetPostsQuery;
function useGetPostsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GetPostsDocument, baseOptions);
}
exports.useGetPostsLazyQuery = useGetPostsLazyQuery;
exports.GetPostDocument = client_1.gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    query getPost($post_id: String!) {\n  getPost(post_id: $post_id) {\n    post_id\n    post_text\n    title\n    link\n    sub {\n      name\n      picture_url\n    }\n    vote_count\n    images\n    videos\n    user {\n      username\n      picture_url\n    }\n    comment_count\n    created_at\n  }\n}\n    "], ["\n    query getPost($post_id: String!) {\n  getPost(post_id: $post_id) {\n    post_id\n    post_text\n    title\n    link\n    sub {\n      name\n      picture_url\n    }\n    vote_count\n    images\n    videos\n    user {\n      username\n      picture_url\n    }\n    comment_count\n    created_at\n  }\n}\n    "])));
function useGetPostQuery(baseOptions) {
    return Apollo.useQuery(exports.GetPostDocument, baseOptions);
}
exports.useGetPostQuery = useGetPostQuery;
function useGetPostLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GetPostDocument, baseOptions);
}
exports.useGetPostLazyQuery = useGetPostLazyQuery;
exports.JoinSubDocument = client_1.gql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    query JoinSub($username: String!) {\n  getUserJoinedSub(username: $username) {\n    displayName\n    name\n    picture_url\n  }\n}\n    "], ["\n    query JoinSub($username: String!) {\n  getUserJoinedSub(username: $username) {\n    displayName\n    name\n    picture_url\n  }\n}\n    "])));
function useJoinSubQuery(baseOptions) {
    return Apollo.useQuery(exports.JoinSubDocument, baseOptions);
}
exports.useJoinSubQuery = useJoinSubQuery;
function useJoinSubLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.JoinSubDocument, baseOptions);
}
exports.useJoinSubLazyQuery = useJoinSubLazyQuery;
exports.GetPostsByUserDocument = client_1.gql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    query getPostsByUser($username: String!) {\n  getPostsByUser(username: $username) {\n    post_id\n    post_text\n    title\n    link\n    sub {\n      name\n      picture_url\n    }\n    vote_count\n    images\n    videos\n    user {\n      username\n      picture_url\n    }\n    comment_count\n    created_at\n  }\n}\n    "], ["\n    query getPostsByUser($username: String!) {\n  getPostsByUser(username: $username) {\n    post_id\n    post_text\n    title\n    link\n    sub {\n      name\n      picture_url\n    }\n    vote_count\n    images\n    videos\n    user {\n      username\n      picture_url\n    }\n    comment_count\n    created_at\n  }\n}\n    "])));
function useGetPostsByUserQuery(baseOptions) {
    return Apollo.useQuery(exports.GetPostsByUserDocument, baseOptions);
}
exports.useGetPostsByUserQuery = useGetPostsByUserQuery;
function useGetPostsByUserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GetPostsByUserDocument, baseOptions);
}
exports.useGetPostsByUserLazyQuery = useGetPostsByUserLazyQuery;
exports.GetCommentsByUserDocument = client_1.gql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    query getCommentsByUser($username: String!) {\n  getCommentsByUser(username: $username) {\n    comment_text\n    comment_id\n    created_at\n    post_id\n  }\n}\n    "], ["\n    query getCommentsByUser($username: String!) {\n  getCommentsByUser(username: $username) {\n    comment_text\n    comment_id\n    created_at\n    post_id\n  }\n}\n    "])));
function useGetCommentsByUserQuery(baseOptions) {
    return Apollo.useQuery(exports.GetCommentsByUserDocument, baseOptions);
}
exports.useGetCommentsByUserQuery = useGetCommentsByUserQuery;
function useGetCommentsByUserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GetCommentsByUserDocument, baseOptions);
}
exports.useGetCommentsByUserLazyQuery = useGetCommentsByUserLazyQuery;
exports.CreateUserDocument = client_1.gql(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    mutation createUser($userInput: UserInputType!) {\n  register(userInput: $userInput) {\n    message\n    path\n  }\n}\n    "], ["\n    mutation createUser($userInput: UserInputType!) {\n  register(userInput: $userInput) {\n    message\n    path\n  }\n}\n    "])));
function useCreateUserMutation(baseOptions) {
    return Apollo.useMutation(exports.CreateUserDocument, baseOptions);
}
exports.useCreateUserMutation = useCreateUserMutation;
exports.CheckEmailDocument = client_1.gql(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    query checkEmail($email: String!) {\n  isEmailExists(email: $email)\n}\n    "], ["\n    query checkEmail($email: String!) {\n  isEmailExists(email: $email)\n}\n    "])));
function useCheckEmailQuery(baseOptions) {
    return Apollo.useQuery(exports.CheckEmailDocument, baseOptions);
}
exports.useCheckEmailQuery = useCheckEmailQuery;
function useCheckEmailLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.CheckEmailDocument, baseOptions);
}
exports.useCheckEmailLazyQuery = useCheckEmailLazyQuery;
exports.GetSearchSubsDocument = client_1.gql(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    query getSearchSubs($subInput: SubSearchInput!) {\n  getSubs(subInput: $subInput) {\n    displayName\n    name\n    picture_url\n  }\n}\n    "], ["\n    query getSearchSubs($subInput: SubSearchInput!) {\n  getSubs(subInput: $subInput) {\n    displayName\n    name\n    picture_url\n  }\n}\n    "])));
function useGetSearchSubsQuery(baseOptions) {
    return Apollo.useQuery(exports.GetSearchSubsDocument, baseOptions);
}
exports.useGetSearchSubsQuery = useGetSearchSubsQuery;
function useGetSearchSubsLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GetSearchSubsDocument, baseOptions);
}
exports.useGetSearchSubsLazyQuery = useGetSearchSubsLazyQuery;
exports.GetJoinedSubDocument = client_1.gql(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    query getJoinedSub {\n  getJoinSub {\n    sub {\n      displayName\n      name\n      picture_url\n    }\n  }\n}\n    "], ["\n    query getJoinedSub {\n  getJoinSub {\n    sub {\n      displayName\n      name\n      picture_url\n    }\n  }\n}\n    "])));
function useGetJoinedSubQuery(baseOptions) {
    return Apollo.useQuery(exports.GetJoinedSubDocument, baseOptions);
}
exports.useGetJoinedSubQuery = useGetJoinedSubQuery;
function useGetJoinedSubLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GetJoinedSubDocument, baseOptions);
}
exports.useGetJoinedSubLazyQuery = useGetJoinedSubLazyQuery;
exports.JoinSubBlueEditDocument = client_1.gql(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    mutation joinSubBlueEdit($subName: String!) {\n  joinSubBluedit(subName: $subName) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation joinSubBlueEdit($subName: String!) {\n  joinSubBluedit(subName: $subName) {\n    path\n    message\n  }\n}\n    "])));
function useJoinSubBlueEditMutation(baseOptions) {
    return Apollo.useMutation(exports.JoinSubBlueEditDocument, baseOptions);
}
exports.useJoinSubBlueEditMutation = useJoinSubBlueEditMutation;
exports.LeaveSubDocument = client_1.gql(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    mutation leaveSub($subName: String!) {\n  leaveSub(subName: $subName) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation leaveSub($subName: String!) {\n  leaveSub(subName: $subName) {\n    path\n    message\n  }\n}\n    "])));
function useLeaveSubMutation(baseOptions) {
    return Apollo.useMutation(exports.LeaveSubDocument, baseOptions);
}
exports.useLeaveSubMutation = useLeaveSubMutation;
exports.IsJoinDocument = client_1.gql(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    query isJoin($subName: String!) {\n  isJoin(subName: $subName)\n}\n    "], ["\n    query isJoin($subName: String!) {\n  isJoin(subName: $subName)\n}\n    "])));
function useIsJoinQuery(baseOptions) {
    return Apollo.useQuery(exports.IsJoinDocument, baseOptions);
}
exports.useIsJoinQuery = useIsJoinQuery;
function useIsJoinLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.IsJoinDocument, baseOptions);
}
exports.useIsJoinLazyQuery = useIsJoinLazyQuery;
exports.CreatePostWithMarkDownDocument = client_1.gql(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    mutation createPostWithMarkDown($postData: PostInputMarkDown!) {\n  createPostWithMarkDown(postData: $postData) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation createPostWithMarkDown($postData: PostInputMarkDown!) {\n  createPostWithMarkDown(postData: $postData) {\n    path\n    message\n  }\n}\n    "])));
function useCreatePostWithMarkDownMutation(baseOptions) {
    return Apollo.useMutation(exports.CreatePostWithMarkDownDocument, baseOptions);
}
exports.useCreatePostWithMarkDownMutation = useCreatePostWithMarkDownMutation;
exports.CreatePostWithLinkDocument = client_1.gql(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n    mutation createPostWithLink($postData: PostInputLink!) {\n  createPostWithLink(postData: $postData) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation createPostWithLink($postData: PostInputLink!) {\n  createPostWithLink(postData: $postData) {\n    path\n    message\n  }\n}\n    "])));
function useCreatePostWithLinkMutation(baseOptions) {
    return Apollo.useMutation(exports.CreatePostWithLinkDocument, baseOptions);
}
exports.useCreatePostWithLinkMutation = useCreatePostWithLinkMutation;
exports.CreatePostWithImageDocument = client_1.gql(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    mutation createPostWithImage($postData: PostInputImage!) {\n  createPostWithImage(postData: $postData) {\n    path\n    message\n  }\n}\n    "], ["\n    mutation createPostWithImage($postData: PostInputImage!) {\n  createPostWithImage(postData: $postData) {\n    path\n    message\n  }\n}\n    "])));
function useCreatePostWithImageMutation(baseOptions) {
    return Apollo.useMutation(exports.CreatePostWithImageDocument, baseOptions);
}
exports.useCreatePostWithImageMutation = useCreatePostWithImageMutation;
exports.AddVoteDocument = client_1.gql(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n    mutation addVote($voteData: Vote!) {\n  addVote(voteData: $voteData) {\n    message\n    path\n  }\n}\n    "], ["\n    mutation addVote($voteData: Vote!) {\n  addVote(voteData: $voteData) {\n    message\n    path\n  }\n}\n    "])));
function useAddVoteMutation(baseOptions) {
    return Apollo.useMutation(exports.AddVoteDocument, baseOptions);
}
exports.useAddVoteMutation = useAddVoteMutation;
exports.IsVotedDocument = client_1.gql(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n    query isVoted($post_id: String!) {\n  isVoted(post_id: $post_id)\n}\n    "], ["\n    query isVoted($post_id: String!) {\n  isVoted(post_id: $post_id)\n}\n    "])));
function useIsVotedQuery(baseOptions) {
    return Apollo.useQuery(exports.IsVotedDocument, baseOptions);
}
exports.useIsVotedQuery = useIsVotedQuery;
function useIsVotedLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.IsVotedDocument, baseOptions);
}
exports.useIsVotedLazyQuery = useIsVotedLazyQuery;
exports.RemoveVoteDocument = client_1.gql(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n    mutation removeVote($voteData: Vote!) {\n  removeVote(voteData: $voteData) {\n    message\n    path\n  }\n}\n    "], ["\n    mutation removeVote($voteData: Vote!) {\n  removeVote(voteData: $voteData) {\n    message\n    path\n  }\n}\n    "])));
function useRemoveVoteMutation(baseOptions) {
    return Apollo.useMutation(exports.RemoveVoteDocument, baseOptions);
}
exports.useRemoveVoteMutation = useRemoveVoteMutation;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24;
//# sourceMappingURL=graphql.js.map