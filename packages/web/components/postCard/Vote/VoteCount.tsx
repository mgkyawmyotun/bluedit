import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';

interface VoteCountProps {}
export const VoteCount: FC = () => {
  const { vote_count } = useContext(PostContext);
  return <div className={styles.vote__count}>{vote_count}</div>;
};
