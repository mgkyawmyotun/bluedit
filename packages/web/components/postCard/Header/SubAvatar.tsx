import Avatar from 'antd/lib/avatar/avatar';
import { FC, useContext } from 'react';
import { getFirstUpperName } from '../../common/utils';
import { PostContext } from '../Context/CardContext';

interface SubAvatarProps {}
export const SubAvatar: FC = () => {
  const { sub, user } = useContext(PostContext);
  return (
    <Avatar
      size={20}
      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
      src={user ? user.picture_url : sub.picture_url}
    >
      {user
        ? getFirstUpperName(user.username)
        : getFirstUpperName(sub.displayName)}
    </Avatar>
  );
};
