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
exports.postMarkDownValidation = exports.emailValidation = exports.userLoginValidationSchema = exports.userValidationSchema = void 0;
var yup = __importStar(require("yup"));
exports.userValidationSchema = yup.object().shape({
    displayName: yup.string().min(3).max(50).required(),
    username: yup
        .string()
        .min(3)
        .max(50)
        .matches(/[A-Za-z0-9-_.!~*'()]/, {
        message: "only accept A-Za-z0-9-_.!~*'",
    })
        .required(),
    email: yup.string().email().max(255).required(),
    password: yup.string().min(5).required(),
});
exports.userLoginValidationSchema = yup.object().shape({
    email: yup.string().email().max(255).required(),
    password: yup.string().min(5).required(),
});
exports.emailValidation = yup.object().shape({
    email: yup.string().email().required().max(255),
});
exports.postMarkDownValidation = yup.object().shape({
    title: yup.string().required().max(300).min(3),
    post_text: yup.string().required(),
});
//# sourceMappingURL=Validation.js.map