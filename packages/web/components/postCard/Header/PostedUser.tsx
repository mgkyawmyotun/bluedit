import Link from 'next/link';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
export const PostedUser: FC = () => {
  const { user } = useContext(PostContext);
  return (
    <span className={styles.header__user}>
      Posted By{' '}
      <Link href={'u/' + user.username}>
        <a className={styles.header__user__link}>{'u/' + user.username}</a>
      </Link>
    </span>
  );
};
