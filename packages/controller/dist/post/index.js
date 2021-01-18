"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var PostController = function (_a) {
    var children = _a.children;
    var postQuery = graphql_1.useGetPostsLazyQuery({
        client: ApolloClient_1.GraphQlClient.getClient(),
    });
    return children(postQuery);
};
exports.PostController = PostController;
//# sourceMappingURL=index.js.map