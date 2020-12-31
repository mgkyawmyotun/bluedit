import Link from 'next/link';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';

interface CardContentLinkProps {
  link: string;
}
export const CardContentLink: FC<CardContentLinkProps> = ({ link }) => {
  return (
    <Link href={link}>
      <a className={styles.content__link}>{link}</a>
    </Link>
  );
};
