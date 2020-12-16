"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeController = void 0;
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var MeController = function (_a) {
    var children = _a.children;
    var result = graphql_1.useUserQuery({
        fetchPolicy: 'network-only',
        client: ApolloClient_1.client,
    });
    return children(result);
};
exports.MeController = MeController;
//# sourceMappingURL=index.js.map