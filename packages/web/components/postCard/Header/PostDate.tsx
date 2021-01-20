import { FC, useContext } from 'react';
import { ReactDate } from '../../common/Date';
import { PostContext } from '../Context/CardContext';

interface PostDateProps {}
export const PostDate: FC = () => {
  const { created_at } = useContext(PostContext);

  return <ReactDate created_at={created_at} />;
};
