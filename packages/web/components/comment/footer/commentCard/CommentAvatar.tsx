import { User } from '@bluedit/controller';
import Avatar from 'antd/lib/avatar/avatar';
import { FC, memo } from 'react';
import { getFirstUpperName } from '../../../common/utils';
import styles from './../../../../styles/comment.module.css';

interface CommentAvatarProps {
  user: Pick<User, 'displayName' | 'username' | 'picture_url'>;
}
export const CommentAvatar: FC<CommentAvatarProps> = memo(({ user }) => {
  return (
    <div className={styles.comment__card__avatar}>
      <Avatar
        size={40}
        style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        src={user.picture_url}
      >
        {getFirstUpperName(user.username)}
      </Avatar>
    </div>
  );
});
