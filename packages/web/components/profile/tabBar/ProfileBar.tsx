import { Tabs } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/profile.module.css';
interface ProfileBarProps {}
const { TabPane } = Tabs;
const Posts = <div className={styles.profile__tab__header}> POSTS </div>;
const Comments = <div className={styles.profile__tab__header}> COMMENTS </div>;
const UserPosts = (
  <div className={styles.profile__tab__header}> USER POSTS </div>
);
export const ProfileBar: FC<ProfileBarProps> = () => {
  return (
    <div className={styles.profile__tab}>
      <Tabs
        defaultActiveKey="1"
        size={'large'}
        style={{ marginBottom: 32 }}
        type={'card'}
      >
        <TabPane tab={Posts} key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab={Comments} key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab={UserPosts} key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    </div>
  );
};
