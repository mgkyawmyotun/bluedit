"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteController = void 0;
var client_1 = require("@apollo/client");
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var VOTE_SUB = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  subscription voteAdded($postID: String!) {\n    voteAdded(post_id: $postID)\n  }\n"], ["\n  subscription voteAdded($postID: String!) {\n    voteAdded(post_id: $postID)\n  }\n"])));
var VoteController = function (_a) {
    var children = _a.children, post_id = _a.post_id;
    var voteAddedSub = client_1.useSubscription(VOTE_SUB, {
        variables: { postID: post_id },
        client: ApolloClient_1.GraphQlClient.getClient(),
    });
    var addVote = graphql_1.useAddVoteMutation({ client: ApolloClient_1.GraphQlClient.getClient() })[0];
    var isVotedQuery = graphql_1.useIsVotedQuery({
        client: ApolloClient_1.GraphQlClient.getClient(),
        fetchPolicy: 'network-only',
        variables: { post_id: post_id },
    });
    var removeVote = graphql_1.useRemoveVoteMutation({
        client: ApolloClient_1.GraphQlClient.getClient(),
    })[0];
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
    var removeUpVote = function () {
        return removeVote({
            variables: { voteData: { post_id: post_id, voteType: graphql_1.VoteType.Up } },
        });
    };
    var removeDownVote = function () {
        return removeVote({
            variables: { voteData: { post_id: post_id, voteType: graphql_1.VoteType.Down } },
        });
    };
    return children({
        upVote: upVote,
        downVote: downVote,
        isVotedQuery: isVotedQuery,
        removeDownVote: removeDownVote,
        removeUpVote: removeUpVote,
        voteAddedSub: voteAddedSub,
    });
};
exports.VoteController = VoteController;
var templateObject_1;
//# sourceMappingURL=index.js.map