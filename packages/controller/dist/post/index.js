"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePost = exports.PostController = void 0;
var react_1 = require("react");
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
var usePost = function (post_id) {
    var _a = react_1.useState(), post = _a[0], setPost = _a[1];
    var _b = graphql_1.useGetPostQuery({
        client: ApolloClient_1.GraphQlClient.getClient(),
        variables: { post_id: post_id },
    }), data = _b.data, loading = _b.loading;
    react_1.useEffect(function () {
        if (data && !loading) {
            setPost(data);
        }
    }, [data, loading]);
    return post;
};
exports.usePost = usePost;
//# sourceMappingURL=index.js.map