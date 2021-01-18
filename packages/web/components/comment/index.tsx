import { FC } from 'react';
import styles from './../../styles/comment.module.css';
import { CommentContent } from './commentContent';
import { CommentFooter } from './footer';
import { CommentHeader } from './header/commentHeader';

interface CommentProps {}
export const Comment: FC<CommentProps> = () => {
  return (
    <div className={styles.comment__main}>
      <CommentHeader />
      <CommentContent />
      <CommentFooter />
    </div>
  );
};
