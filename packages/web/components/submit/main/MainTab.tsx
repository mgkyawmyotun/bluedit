import { Tabs } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/submit.module.css';
import { PostTab } from './tab/PostTab';

interface MainTapProps {}
const TabPane = Tabs.TabPane;
const PostTabHeader = (
  <div className={styles.tab__post}>
    <div></div>
    <div>Post</div>
  </div>
);
const ImageVideoTabHeader = (
  <div className={styles.tab__img}>
    <div></div>
    <div>{'Images&Videos'}</div>
  </div>
);
const LinkTabHeader = (
  <div className={styles.tab__link}>
    <div></div>
    <div>Link</div>
  </div>
);
export const MainTap: FC = () => {
  return (
    <Tabs className={styles.submit__tab}>
      <TabPane tab={PostTabHeader} key="1">
        <PostTab />
      </TabPane>
      <TabPane tab={ImageVideoTabHeader} key="2">
        Content of tab 2
      </TabPane>
      <TabPane tab={LinkTabHeader} key="3">
        Content of tab 3
      </TabPane>
    </Tabs>
  );
};
