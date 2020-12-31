import { Tooltip } from 'antd';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';

interface PostDateProps {}
export const PostDate: FC = () => {
  const {} = useContext(PostContext);
  return (
    <span className={styles.header__date}>
      <Tooltip placement={'top'} title={new Date().getFullYear()}>
        2 hour ago
      </Tooltip>
    </span>
  );
};
