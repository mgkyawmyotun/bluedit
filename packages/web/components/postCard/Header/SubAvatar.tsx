import Avatar from 'antd/lib/avatar/avatar';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';

interface SubAvatarProps {}
export const SubAvatar: FC = () => {
  const { sub, user } = useContext(PostContext);
  return <Avatar size={20} />;
};
