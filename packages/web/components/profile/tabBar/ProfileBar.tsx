import { Tabs } from 'antd';
import { FC, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ProfileProps } from '..';
import { PostCard } from '../../postCard';
import { ProfileCardContext } from '../card/ProfileCardContext';
import { ProfileCardUser } from '../card/ProfileCardUser';
import { ProfileSubCard } from '../card/ProfileSubCard';
import { ProfileContext } from '../ProfileContext';
import styles from './../../../styles/profile.module.css';
import { ProfileCommentCard } from './ProfileCommentCard';
type ProfileBarProps = ProfileProps;
const { TabPane } = Tabs;
const Posts = <div className={styles.profile__tab__header}> POSTS </div>;
const Comments = <div className={styles.profile__tab__header}> COMMENTS </div>;
const UserPosts = (
  <div className={styles.profile__tab__header}> USER PROFILE </div>
);
export const ProfileBar: FC<ProfileBarProps> = ({ comments, posts }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const { comment_count, joinsub } = useContext(ProfileCardContext);
  const { user } = useContext(ProfileContext);
  return (
    <div className={styles.profile__tab}>
      <Tabs
        defaultActiveKey="1"
        size={'large'}
        style={{ marginBottom: 32 }}
        type={'card'}
      >
        <TabPane tab={Posts} key="1">
          {posts && posts.map((post) => <PostCard post={post}></PostCard>)}
        </TabPane>
        <TabPane tab={Comments} key="2">
          {comments &&
            comments.map((comment) => (
              <ProfileCommentCard comment={{ ...comment, user } as any} />
            ))}
        </TabPane>
        {!isDesktopOrLaptop && (
          <TabPane
            tab={UserPosts}
            key="3"
            className={styles.profile__tab__user}
          >
            <div>
              <ProfileCardUser comment_count={comment_count} />
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
