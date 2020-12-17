"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceBookController = void 0;
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var FaceBookController = function (_a) {
    var children = _a.children;
    var _b = graphql_1.useContinueWithFaceBookMutation({
        client: ApolloClient_1.GraphQlClient.getClient(),
    });
    return children();
};
exports.FaceBookController = FaceBookController;
//# sourceMappingURL=FaceBookController.js.map