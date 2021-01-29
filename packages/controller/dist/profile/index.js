"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
var react_1 = require("react");
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var ProfileController = function (_a) {
    var children = _a.children, username = _a.username;
    var options = react_1.useMemo(function () {
        var _options = {
            client: ApolloClient_1.GraphQlClient.getClient(),
            variables: { username: username },
            fetchPolicy: 'network-only',
        };
        return _options;
    }, [username]);
    var joinsub = graphql_1.useJoinSubQuery(options);
    var posts = graphql_1.useGetPostsByUserQuery(options);
    var comments = graphql_1.useGetCommentsByUserQuery(options);
    return children({ comments: comments, posts: posts, joinsub: joinsub });
};
exports.ProfileController = ProfileController;
//# sourceMappingURL=index.js.map