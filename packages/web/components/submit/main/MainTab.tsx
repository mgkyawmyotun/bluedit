import { Tabs } from 'antd';
import { FC, memo } from 'react';
import { SubBlueditState } from '../store';
import styles from './../../../styles/submit.module.css';
import { ImageForm } from './form/ImageForm';
import { LinkForm } from './form/LinkForm';
import { TextForm } from './form/TextForm';
interface MainTapProps {}
const TabPane = Tabs.TabPane;
const PostTabHeader = memo(() => (
  <div className={styles.tab__post}>
    <div></div>
    <div>Post</div>
  </div>
));

const ImageVideoTabHeader = memo(() => (
  <div className={styles.tab__img}>
    <div></div>
    <div>{'Images&Videos'}</div>
  </div>
));
const LinkTabHeader = memo(() => (
  <div className={styles.tab__link}>
    <div></div>
    <div>Link</div>
  </div>
));
export const MainTap: FC = () => {
  return (
    <Tabs className={styles.submit__tab}>
      <TabPane tab={<PostTabHeader />} key="1" animated>
        <TextForm />
      </TabPane>
      <TabPane tab={<ImageVideoTabHeader />} key="2">
        <ImageForm />
      </TabPane>
      <TabPane tab={<LinkTabHeader />} key="3">
        <LinkForm subName={SubBlueditState.getSubBleditState()} />
      </TabPane>
    </Tabs>
  );
};
