import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
interface CardContentTitleProps {}
export const CardContentTitle: FC = () => {
  return (
    <span className={styles.content__title}>
      Hello From Title This is Title it can last 4 char
    </span>
  );
};
