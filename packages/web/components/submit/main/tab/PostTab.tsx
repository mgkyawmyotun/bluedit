import { Tabs } from 'antd';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './../../../../styles/submit.module.css';
import { MarkDownEditor } from './MarkDownEditor';
import { Title } from './Title';

const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
});
interface PostTabProps {}
export const PostTab: FC = () => {
  return (
    <div>
      <Title />
      <Tabs>
        <Tabs.TabPane tab={'Text Editor'} key="1">
          <div className={styles.text__editor}>
            <TextEditor name={'post_text'} />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={'MarkDown'} key="2">
          <MarkDownEditor name={'post_text'} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
