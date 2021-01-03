"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteController = void 0;
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var VoteController = function (_a) {
    var children = _a.children, post_id = _a.post_id;
    var addVote = graphql_1.useAddVoteMutation({ client: ApolloClient_1.GraphQlClient.getClient() })[0];
    var isVotedQuery = graphql_1.useIsVotedQuery({
        client: ApolloClient_1.GraphQlClient.getClient(),
        fetchPolicy: 'network-only',
        variables: { post_id: post_id },
    });
    var upVote = function () {
        return addVote({
            variables: { voteData: { post_id: post_id, voteType: graphql_1.VoteType.Up } },
        });
    };
    var downVote = function () {
        return addVote({
            variables: { voteData: { post_id: post_id, voteType: graphql_1.VoteType.Down } },
        });
    };
    return children({ upVote: upVote, downVote: downVote, isVotedQuery: isVotedQuery });
};
exports.VoteController = VoteController;
//# sourceMappingURL=index.js.map