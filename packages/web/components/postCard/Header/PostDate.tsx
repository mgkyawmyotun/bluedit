import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';

interface PostDateProps {}
export const PostDate: FC = () => {
  return <span className={styles.header__date}>2 hour ago</span>;
};
