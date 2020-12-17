"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQlClient = void 0;
var client_1 = require("@apollo/client");
var GraphQlClient = (function () {
    function GraphQlClient() {
    }
    GraphQlClient.getClient = function () {
        if (this.client) {
            return this.client;
        }
        this.client = new client_1.ApolloClient({
            uri: 'http://localhost:4000/graphql',
            cache: new client_1.InMemoryCache(),
            credentials: 'include',
        });
        return this.client;
    };
    return GraphQlClient;
}());
exports.GraphQlClient = GraphQlClient;
//# sourceMappingURL=ApolloClient.js.map