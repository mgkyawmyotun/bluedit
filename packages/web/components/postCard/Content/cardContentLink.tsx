import Link from 'next/link';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';

interface CardContentLinkProps {}
export const CardContentLink: FC = () => {
  return (
    <Link href={'http://google.com'}>
      <a className={styles.content__link}>http://google.com</a>
    </Link>
  );
};
