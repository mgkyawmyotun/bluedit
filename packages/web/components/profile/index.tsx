import { CommentUser, Post, Sub, User } from '@bluedit/controller';
import { FC } from 'react';
import styles from './../../styles/profile.module.css';
import { ProfileBar } from './tabBar/ProfileBar';

export interface ProfileProps {
  comments: ({
    __typename?: 'CommentUser';
  } & Pick<
    CommentUser,
    'comment_text' | 'comment_id' | 'created_at' | 'post_id'
  >)[];
  posts: Post[];
  user: User;
  vote_count: number;
  joinsub: ({
    __typename?: 'Sub';
  } & Pick<Sub, 'displayName' | 'name' | 'picture_url'>)[];
  comment_count: number;
}
export const Profile: FC<ProfileProps> = (props) => {
  return (
    <div className={styles.main__layout}>
      <ProfileBar {...props}></ProfileBar>
    </div>
  );
};
