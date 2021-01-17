import { createContext } from 'react';

export const PostCommentContext = createContext<{ withComment: boolean }>({
  withComment: false,
});
