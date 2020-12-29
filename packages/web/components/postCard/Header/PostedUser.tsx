import Link from 'next/link';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
export const PostedUser: FC = () => {
  return (
    <span className={styles.header__user}>
      Posted By{' '}
      <Link href="/u/kyawmyotun">
        <a className={styles.header__user__link}>/u/kyawmyotun</a>
      </Link>
    </span>
  );
};
