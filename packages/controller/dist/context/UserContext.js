"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserContext = exports.UserContextController = void 0;
var react_1 = __importStar(require("react"));
var __1 = require("..");
var graphql_1 = require("../generated/graphql");
var UserContext = react_1.createContext(null);
var UserContextController = function (_a) {
    var children = _a.children;
    var result = graphql_1.useUserQuery({
        fetchPolicy: 'network-only',
        client: __1.GraphQlClient.getClient(),
    });
    return react_1.default.createElement(UserContext.Provider, { value: result }, children);
};
exports.UserContextController = UserContextController;
var useUserContext = function () {
    var value = react_1.useContext(UserContext);
    react_1.useEffect(function () {
        value === null || value === void 0 ? void 0 : value.refetch().then(function () { });
    }, []);
    return value;
};
exports.useUserContext = useUserContext;
//# sourceMappingURL=UserContext.js.map