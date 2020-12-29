import { Tooltip } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';

interface PostDateProps {}
export const PostDate: FC = () => {
  return (
    <span className={styles.header__date}>
      <Tooltip placement={'top'} title={new Date().getFullYear()}>
        2 hour ago
      </Tooltip>
    </span>
  );
};
