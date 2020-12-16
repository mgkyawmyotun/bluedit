"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var client_1 = require("@apollo/client");
exports.client = new client_1.ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new client_1.InMemoryCache(),
    credentials: 'include',
});
//# sourceMappingURL=ApolloClient.js.map