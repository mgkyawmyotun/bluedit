import Link from 'next/link';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
interface SubLinkProps {}
export const SubLink: FC = () => {
  const { sub, user } = useContext(PostContext);
  return (
    <Link href="/blog/hello-world">
      <a className={styles.header__link}>
        {sub ? 'r/' + sub.name : 'u/' + user.username}
      </a>
    </Link>
  );
};
