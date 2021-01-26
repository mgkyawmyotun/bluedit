import Image from 'next/image';
import { FC } from 'react';
import styles from './../../../styles/profile.module.css';
interface ProfileCardBodyProps {
  vote_count: number;
  comment_count: number;
}

export const ProfileCardBody: FC<ProfileCardBodyProps> = ({
  vote_count,
  comment_count,
}) => {
  return (
    <div className={styles.profile__card__body}>
      <div>Votes</div>
      <div className={styles.profile__card__body__vote}>
        <Image src={'/voteIcon.svg'} width={25} height={25}></Image>
        <div style={{ padding: '10px' }}>
          -{' '}
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {vote_count}
          </span>
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>Comments</div>
      <div className={styles.profile__card__body__vote}>
        <Image src={'/comment.svg'} width={25} height={25}></Image>
        <div style={{ padding: '10px' }}>
          -{' '}
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {comment_count}
          </span>
        </div>
      </div>
    </div>
  );
};
