import { ErrorInterface } from 'src/shared/types';
export const shapeError = (error: ErrorInterface): ErrorInterface => {
  return { message: error.message, path: error.path };
};

export const sqlError = (
  error: any,
  path: string,
  name: string,
): ErrorInterface => {
  if (error.code === 'ER_DUP_ENTRY') {
    return {
      message: name + ' already exits',
      path: path,
    };
  }
  return {
    path,
    message: 'Might be server problem try again later',
  };
};
