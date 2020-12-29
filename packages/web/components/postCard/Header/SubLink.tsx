import Link from 'next/link';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
interface SubLinkProps {}
export const SubLink: FC = () => {
  return (
    <Link href="/blog/hello-world">
      <a className={styles.header__link}>r/reactjs</a>
    </Link>
  );
};
