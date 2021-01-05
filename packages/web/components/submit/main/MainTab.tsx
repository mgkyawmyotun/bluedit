import { Tabs } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/submit.module.css';
interface MainTapProps {}
const TabPane = Tabs.TabPane;
const PostTab = (
  <div className={styles.tab__post}>
    <div></div>
    <div>Post</div>
  </div>
);
const ImageVideoTab = (
  <div className={styles.tab__img}>
    <div></div>
    <div>{'Images&Videos'}</div>
  </div>
);
const LinkTab = (
  <div className={styles.tab__link}>
    <div></div>
    <div>Link</div>
  </div>
);
export const MainTap: FC = () => {
  return (
    <Tabs className={styles.submit__tab}>
      <TabPane tab={PostTab} key="1">
        Content of tab 1
      </TabPane>
      <TabPane tab={ImageVideoTab} key="2">
        Content of tab 2
      </TabPane>
      <TabPane tab={LinkTab} key="3">
        Content of tab 3
      </TabPane>
    </Tabs>
  );
};
