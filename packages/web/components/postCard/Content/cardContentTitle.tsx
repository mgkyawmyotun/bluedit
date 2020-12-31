import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
interface CardContentTitleProps {
  title: string;
}
export const CardContentTitle: FC<CardContentTitleProps> = ({ title }) => {
  return <span className={styles.content__title}>{title}</span>;
};
