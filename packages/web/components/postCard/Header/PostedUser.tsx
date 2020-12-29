import Link from 'next/link';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
interface PostedUserProps {}
export const PostedUser: FC = () => {
  return (
    <span className={styles.header__user}>
      Posted By <Link href="/u/kyawmyotun">/u/kyawmyotun</Link>
    </span>
  );
};
