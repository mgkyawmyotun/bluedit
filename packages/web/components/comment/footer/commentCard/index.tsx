import { Comment, User } from '@bluedit/controller';
import { FC } from 'react';
import styles from './../../../../styles/comment.module.css';
import { CommentAvatar } from './CommentAvatar';
import { CommentName } from './CommentName';

interface CommentCardProps {
  comment: {
    __typename?: 'Comment';
  } & Pick<Comment, 'comment_text' | 'comment_id'> & {
      user: {
        __typename?: 'User';
      } & Pick<User, 'displayName' | 'username' | 'picture_url'>;
    };
}
export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className={styles.comment__card}>
      <CommentAvatar user={comment.user} />
      <div className={styles.comment__card__right}>
        <div className={styles.comment__card__right__top}>
          <CommentName username={comment.user.username} />
        </div>
        <div>{comment.comment_id}</div>
      </div>
    </div>
  );
};
