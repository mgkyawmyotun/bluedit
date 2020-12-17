"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var LoginController = function (_a) {
    var children = _a.children;
    var submit = graphql_1.useLoginUserMutation({ client: ApolloClient_1.GraphQlClient.getClient() })[0];
    return children({ submit: submit });
};
exports.LoginController = LoginController;
//# sourceMappingURL=index.js.map