import * as yup from 'yup';
export const userValidationSchema = yup.object().shape({
  displayName: yup.string().min(3).max(50).required(),
  username: yup.string().min(3).max(50).required(),
  email: yup.string().email().max(255).required(),
  password: yup.string().min(5).required(),
});

export const userLoginValidationSchema = yup.object().shape({
  email: yup.string().email().max(255).required(),
  password: yup.string().min(5).required(),
});
