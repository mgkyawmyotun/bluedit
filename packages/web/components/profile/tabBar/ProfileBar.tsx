import { Tabs } from 'antd';
import { FC } from 'react';
import { ProfileProps } from '..';
import { PostCard } from '../../postCard';
import styles from './../../../styles/profile.module.css';
type ProfileBarProps = ProfileProps;
const { TabPane } = Tabs;
const Posts = <div className={styles.profile__tab__header}> POSTS </div>;
const Comments = <div className={styles.profile__tab__header}> COMMENTS </div>;
const UserPosts = (
  <div className={styles.profile__tab__header}> USER POSTS </div>
);
export const ProfileBar: FC<ProfileBarProps> = ({ comments, posts }) => {
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
          <div>{JSON.stringify(comments)}</div>
        </TabPane>
        <TabPane tab={UserPosts} key="3"></TabPane>
      </Tabs>
    </div>
  );
};
