"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQlClient = void 0;
var client_1 = require("@apollo/client");
var ws_1 = require("@apollo/client/link/ws");
var utilities_1 = require("@apollo/client/utilities");
var wsLink = process.browser
    ? new ws_1.WebSocketLink({
        uri: "ws://" + process.env.NEXT_PUBLIC_GQL_URI,
        options: {
            reconnect: true,
        },
    })
    : null;
var httplink = new client_1.HttpLink({
    uri: process.env.NEXT_PUBLIC_GQL_URI,
    credentials: 'include',
});
var splitLink = process.browser
    ? client_1.split(function (_a) {
        var query = _a.query;
        var _b = utilities_1.getMainDefinition(query), kind = _b.kind, operation = _b.operation;
        return kind === 'OperationDefinition' && operation === 'subscription';
    }, wsLink, httplink)
    : httplink;
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