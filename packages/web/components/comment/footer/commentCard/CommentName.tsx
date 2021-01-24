import Link from 'next/link';
import { FC } from 'react';
import styles from './../../../../styles/comment.module.css';

interface CommentNameProps {
  username: string;
}
export const CommentName: FC<CommentNameProps> = ({ username }) => {
  return (
    <div className={styles.comment__card__name}>
      <Link href={'/u/' + username}>{username}</Link>
    </div>
  );
};
