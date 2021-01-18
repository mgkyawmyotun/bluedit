import { FC } from 'react';
import { CommentLine } from './CommentLine';
import { CommentSort } from './CommentSort';

interface CommentFooterProps {}
export const CommentFooter: FC<CommentFooterProps> = () => {
  return (
    <>
      <CommentSort />
      <CommentLine />
    </>
  );
};
