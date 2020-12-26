import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
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

export const userLoginValidationSchema = yup.object().shape({
  email: yup.string().email().max(255).required(),
  password: yup.string().min(5).required(),
});

export const emailValidation = yup.object().shape({
  email: yup.string().email().required().max(255),
});
export const postMarkDownValidation = yup.object().shape({
  title: yup.string().required().max(300).min(3),
  post_text: yup.string().required(),
});
export const postLinkValidation = yup.object().shape({
  title: yup.string().required().max(300).min(3),
  link: yup.string().required().url(),
});
export const postImagesValidation = yup.object().shape({
  title: yup.string().required().max(300).min(3),
  images: yup.array().of(yup.string()).required(),
});

export const postVideosValidation = yup.object().shape({
  title: yup.string().required().max(300).min(3),
  videos: yup.array().of(yup.string()).required(),
});
export const subCreateValidation = yup.object().shape({
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
export const commentValidation = yup.object().shape({
  post_id: yup.string().required(),
  comment_text: yup.string().required(),
});

export const postDeleteValidation = yup.object().shape({
  post_id: yup.string().required(),
});
