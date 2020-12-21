import { Error } from './../users/users.type';
export const shapeError = (error: Error): Error => {
  return { message: error.message, path: error.path };
};
