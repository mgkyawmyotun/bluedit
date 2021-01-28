import Avatar from 'antd/lib/avatar/avatar';
import { FC, memo } from 'react';
import { getFirstUpperName } from '../../../common/utils';
import styles from './../../../../styles/comment.module.css';

interface CommentAvatarProps {
  username: string;
  picture_url: string;
}
export const CommentAvatar: FC<CommentAvatarProps> = memo(
  ({ username, picture_url }) => {
    return (
      <div className={styles.comment__card__avatar}>
        <Avatar
          size={40}
          style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
          src={picture_url}
        >
          {getFirstUpperName(username)}
        </Avatar>
      </div>
    );
  },
  (prevProps, nextPrps) =>
    prevProps.picture_url === nextPrps.picture_url &&
    prevProps.username === nextPrps.username
);
