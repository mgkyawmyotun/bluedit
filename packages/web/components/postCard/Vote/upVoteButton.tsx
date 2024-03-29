import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
interface UpVoteButtonProps {
  onClick: () => void;
  onRemove: () => void;
  isVoted: () => boolean;
}
export const UpVoteButton: FC<UpVoteButtonProps> = ({
  onClick,
  isVoted,
  onRemove,
}) => {
  return !isVoted() ? (
    <div className={styles.vote__up} onClick={onClick}>
      <svg
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="#C4C4C4"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.iconVote}
      >
        <path d="M11 0.734711L20.5263 6.89696H1.47372L11 0.734711Z" />
        <rect x="7.3335" y="5.21631" width="7.33333" height="11.2041" />
      </svg>
    </div>
  ) : (
    <div className={styles.vote__up__voted} onClick={onRemove}>
      <svg
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="#C4C4C4"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.iconVote}
      >
        <path d="M11 0.734711L20.5263 6.89696H1.47372L11 0.734711Z" />
        <rect x="7.3335" y="5.21631" width="7.33333" height="11.2041" />
      </svg>
    </div>
  );
};
