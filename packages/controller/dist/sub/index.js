"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetJoinSub = void 0;
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var useGetJoinSub = function () {
    var _a = graphql_1.useGetJoinedSubQuery({
        client: ApolloClient_1.GraphQlClient.getClient(),
    }), loading = _a.loading, data = _a.data;
    return {
        loading: loading,
        data: data,
    };
};
exports.useGetJoinSub = useGetJoinSub;
//# sourceMappingURL=index.js.map