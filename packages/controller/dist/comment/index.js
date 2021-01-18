"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComment = exports.CommentController = void 0;
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
    }), data = _b.data, loading = _b.loading;
    react_1.useEffect(function () {
        if (data && !loading) {
            setComments(data);
        }
    }, [data, loading]);
    return comments;
};
exports.useComment = useComment;
//# sourceMappingURL=index.js.map