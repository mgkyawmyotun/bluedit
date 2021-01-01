import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';

interface VoteCountProps {
  vote_count: number;
}
export const VoteCount: FC<VoteCountProps> = ({ vote_count }) => {
  return <div className={styles.vote__count}>{vote_count}</div>;
};
