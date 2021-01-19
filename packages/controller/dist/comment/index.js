"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNewCommentAddedSub = exports.useCommentAddedSub = exports.useComment = exports.CommentController = void 0;
var client_1 = require("@apollo/client");
var react_1 = require("react");
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var CommentController = function (_a) {
    var children = _a.children;
    var _b = graphql_1.useCreateCommentMutation({
        client: ApolloClient_1.GraphQlClient.getClient(),
    }), createComment = _b[0], _c = _b[1];
    var submitComment = function (commentData) {
        return createComment({ variables: { commentInput: commentData } });
    };
    return children({ submitComment: submitComment });
};
exports.CommentController = CommentController;
var useComment = function (post_id) {
    var _a = react_1.useState(), comments = _a[0], setComments = _a[1];
    var _b = graphql_1.useGetCommentsQuery({
        variables: { post_id: post_id },
        client: ApolloClient_1.GraphQlClient.getClient(),
        fetchPolicy: 'network-only',
    }), data = _b.data, loading = _b.loading;
    react_1.useEffect(function () {
        if (data && !loading) {
            setComments(data);
        }
    }, [data, loading]);
    return comments;
};
exports.useComment = useComment;
var COMMENT_ADDED_SUB = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  subscription commentAdded($post_id: String!) {\n    commentAdded(post_id: $post_id)\n  }\n"], ["\n  subscription commentAdded($post_id: String!) {\n    commentAdded(post_id: $post_id)\n  }\n"])));
var useCommentAddedSub = function (post_id) {
    var _a = react_1.useState(), comment_count = _a[0], setComment_Count = _a[1];
    var _b = client_1.useSubscription(COMMENT_ADDED_SUB, {
        variables: { post_id: post_id },
        client: ApolloClient_1.GraphQlClient.getClient(),
    }), data = _b.data, loading = _b.loading;
    react_1.useEffect(function () {
        if (data && !loading) {
            setComment_Count(data.commentAdded);
        }
    }, [data]);
    return comment_count;
};
exports.useCommentAddedSub = useCommentAddedSub;
var NEW_COMMENT_ADDED = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  subscription newCommentAdded($post_id: String!) {\n    newCommentAdded(post_id: $post_id) {\n      comment_text\n      user {\n        displayName\n        username\n        picture_url\n      }\n      comment_id\n    }\n  }\n"], ["\n  subscription newCommentAdded($post_id: String!) {\n    newCommentAdded(post_id: $post_id) {\n      comment_text\n      user {\n        displayName\n        username\n        picture_url\n      }\n      comment_id\n    }\n  }\n"])));
var useNewCommentAddedSub = function (post_id) {
    var data = client_1.useSubscription(NEW_COMMENT_ADDED, {
        variables: { post_id: post_id },
        client: ApolloClient_1.GraphQlClient.getClient(),
    }).data;
    return data && data.newCommentAdded;
};
exports.useNewCommentAddedSub = useNewCommentAddedSub;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map