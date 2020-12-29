import { FC } from 'react';
import styles from './../../styles/postCard.module.css';
interface DownVoteButtonProps {}
export const DownVoteButton: FC = () => {
  return (
    <div className={styles.vote__down}>
      <svg
        width="23"
        height="15"
        viewBox="0 0 23 15"
        fill="#C4C4C4"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.iconVote1}
      >
        <path d="M11.5 14.1918L21.4593 8.61647H1.54071L11.5 14.1918Z" />
        <rect
          width="7.66667"
          height="10.137"
          transform="matrix(1 0 0 -1 7.6665 10.1371)"
        />
      </svg>
    </div>
  );
};
