"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogout = void 0;
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var useLogout = function () {
    return graphql_1.useLogoutLazyQuery({
        client: ApolloClient_1.GraphQlClient.getClient(),
        fetchPolicy: 'network-only',
    });
};
exports.useLogout = useLogout;
//# sourceMappingURL=index.js.map