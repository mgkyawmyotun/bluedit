import { Tooltip } from 'antd';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
import { timeAgo } from './../../common/utils';

interface PostDateProps {}
export const PostDate: FC = () => {
  const { created_at } = useContext(PostContext);

  return (
    <span className={styles.header__date}>
      <Tooltip
        placement={'top'}
        title={new Date(created_at).toLocaleDateString()}
      >
        {timeAgo(created_at)}
      </Tooltip>
    </span>
  );
};
