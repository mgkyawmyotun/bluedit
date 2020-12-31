"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = exports.usePost = void 0;
var react_1 = require("react");
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var usePost = function () {
    react_1.useEffect(function () { }, []);
};
exports.usePost = usePost;
var PostController = function (_a) {
    var children = _a.children;
    var postQuery = graphql_1.useGetPostsLazyQuery({
        client: ApolloClient_1.GraphQlClient.getClient(),
    });
    return children(postQuery);
};
exports.PostController = PostController;
//# sourceMappingURL=index.js.map