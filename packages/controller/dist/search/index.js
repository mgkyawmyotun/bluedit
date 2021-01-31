"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchResut = void 0;
var react_1 = require("react");
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var getSearchResut = function () {
    var _a = react_1.useState(), subs = _a[0], setSubs = _a[1];
    var _b = graphql_1.useGetSearchSubsLazyQuery({
        client: ApolloClient_1.GraphQlClient.getClient(),
        fetchPolicy: 'network-only',
    }), getSubResult = _b[0], _c = _b[1], data = _c.data, loading = _c.loading;
    react_1.useEffect(function () {
        if (data && !loading) {
            setSubs(data.getSubs);
        }
    }, [data, loading]);
    return [subs, getSubResult];
};
exports.getSearchResut = getSearchResut;
//# sourceMappingURL=index.js.map