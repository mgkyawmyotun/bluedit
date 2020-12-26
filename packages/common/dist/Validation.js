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
exports.postInputEditTextValidation = exports.postDeleteValidation = exports.commentValidation = exports.subCreateValidation = exports.postVideosValidation = exports.postImagesValidation = exports.postLinkValidation = exports.postMarkDownValidation = exports.emailValidation = exports.userLoginValidationSchema = exports.userValidationSchema = void 0;
var yup = __importStar(require("yup"));
exports.userValidationSchema = yup.object().shape({
    displayName: yup.string().min(3).max(50).required(),
    username: yup
        .string()
        .min(3)
        .max(50)
        .matches(/^[A-Za-z0-9-_.!~*'()]+$/g, {
        message: "Only accept url allow char A-Za-z0-9-_.!~*'() ",
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
exports.postLinkValidation = yup.object().shape({
    title: yup.string().required().max(300).min(3),
    link: yup.string().required().url(),
});
exports.postImagesValidation = yup.object().shape({
    title: yup.string().required().max(300).min(3),
    images: yup.array().of(yup.string()).required(),
});
exports.postVideosValidation = yup.object().shape({
    title: yup.string().required().max(300).min(3),
    videos: yup.array().of(yup.string()).required(),
});
exports.subCreateValidation = yup.object().shape({
    displayName: yup.string().required().max(50).min(3),
    name: yup
        .string()
        .required()
        .max(50)
        .min(3)
        .matches(/^[A-Za-z0-9-_.!~*'()]+$/g, {
        message: "Only accept url allow char A-Za-z0-9-_.!~*'() ",
    }),
});
exports.commentValidation = yup.object().shape({
    post_id: yup.string().required(),
    comment_text: yup.string().required(),
});
exports.postDeleteValidation = yup.object().shape({
    post_id: yup.string().required(),
});
exports.postInputEditTextValidation = yup.object().shape({
    post_id: yup.string().required(),
    post_text: yup.string().required(),
});
//# sourceMappingURL=Validation.js.map