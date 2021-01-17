import { useUserContext } from '@bluedit/controller';
import Link from 'next/link';
import { FC } from 'react';
import styles from './../../../styles/comment.module.css';

interface CommentHeaderProps {}
export const CommentHeader: FC<CommentHeaderProps> = () => {
  const { data, loading } = useUserContext();
  return (
    <div className={styles.comment__header}>
      Comment as
      {!loading && (
        <Link href={'/u/' + data.me.username}>
          <span className={styles.comment__link}>
            {data && data.me && data.me.username}
          </span>
        </Link>
      )}
    </div>
  );
};
