import { useRouter } from 'next/router';
import { FC } from 'react';
import { CommentCard } from '../../comment/footer/commentCard';
import styles from './../../../styles/profile.module.css';
interface ProfileCommentCardProps {
  comment: any;
}
export const ProfileCommentCard: FC<ProfileCommentCardProps> = ({
  comment,
}) => {
  const { push } = useRouter();

  return (
    <div
      className={styles.profile__comment}
      onClick={() => push('/p/' + comment.post_id)}
    >
      <CommentCard comment={comment} />
    </div>
  );
};
