"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFormController = void 0;
var ApolloClient_1 = require("../ApolloClient");
var graphql_1 = require("../generated/graphql");
var ImageFormController = function (_a) {
    var children = _a.children;
    var _b = graphql_1.useCreatePostWithImageMutation({
        client: ApolloClient_1.GraphQlClient.getClient(),
    }), createPost = _b[0], _c = _b[1];
    var submitPost = function (postData) {
        return createPost({ variables: { postData: postData } });
    };
    return children({ submitPost: submitPost });
};
exports.ImageFormController = ImageFormController;
//# sourceMappingURL=ImageFormController.js.map