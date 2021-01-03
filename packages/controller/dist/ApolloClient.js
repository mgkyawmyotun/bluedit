"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQlClient = void 0;
var client_1 = require("@apollo/client");
var ws_1 = require("@apollo/client/link/ws");
var utilities_1 = require("@apollo/client/utilities");
var httpLink = new client_1.HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
});
var wsLink = new ws_1.WebSocketLink({
    uri: "ws://localhost:4000/graphql",
    options: {
        reconnect: true,
    },
});
var splitLink = client_1.split(function (_a) {
    var query = _a.query;
    var definition = utilities_1.getMainDefinition(query);
    return (definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription');
}, wsLink, httpLink);
var GraphQlClient = (function () {
    function GraphQlClient() {
    }
    GraphQlClient.getClient = function () {
        if (this.client) {
            return this.client;
        }
        this.client = new client_1.ApolloClient({
            cache: new client_1.InMemoryCache(),
            link: splitLink,
        });
        return this.client;
    };
    return GraphQlClient;
}());
exports.GraphQlClient = GraphQlClient;
//# sourceMappingURL=ApolloClient.js.map