import { Tabs } from 'antd';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ProfileProps } from '..';
import { PostCard } from '../../postCard';
import { ProfileCardUser } from '../card/ProfileCardUser';
import { ProfileSubCard } from '../card/ProfileSubCard';
import styles from './../../../styles/profile.module.css';
import { ProfileCommentCard } from './ProfileCommentCard';
type ProfileBarProps = ProfileProps;

const { TabPane } = Tabs;
const Posts = <div className={styles.profile__tab__header}> POSTS </div>;
const Comments = <div className={styles.profile__tab__header}> COMMENTS </div>;
const UserPosts = (
  <div className={styles.profile__tab__header}> USER PROFILE </div>
);
export const ProfileBar: FC<ProfileBarProps> = ({
  comments,
  posts,
  user,
  vote_count,
  comment_count,
  joinsub,
}) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  return (
    <div className={styles.profile__tab}>
      <Tabs
        defaultActiveKey="1"
        size={'large'}
        style={{ marginBottom: 32 }}
        type={'card'}
      >
        <TabPane tab={Posts} key="1">
          {posts &&
            posts.map((post) => (
              <PostCard post={post} key={post.post_id}></PostCard>
            ))}
        </TabPane>
        <TabPane tab={Comments} key="2">
          {comments &&
            comments.map((comment) => (
              <ProfileCommentCard
                comment={{ ...comment, user } as any}
                key={comment.comment_id}
              />
            ))}
        </TabPane>
        {!isDesktopOrLaptop && (
          <TabPane
            tab={UserPosts}
            key="3"
            className={styles.profile__tab__user}
          >
            <div>
              <ProfileCardUser
                comment_count={comment_count}
                user={user}
                vote_count={vote_count}
              />
            </div>
            <div>
              <ProfileSubCard joinsub={joinsub} />
            </div>
          </TabPane>
        )}
      </Tabs>
    </div>
  );
};
