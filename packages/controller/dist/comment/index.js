"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
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
//# sourceMappingURL=index.js.map