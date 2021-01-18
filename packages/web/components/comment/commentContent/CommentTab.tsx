import { Tabs } from 'antd';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { MarkDownEditor } from '../../submit/main/tab/MarkDownEditor';
import styles from './../../../styles/submit.module.css';

const TextEditor = dynamic(() => import('../../submit/main/tab/TextEditor'), {
  ssr: false,
});
interface CommentTabProps {}
export const CommentTab: FC<CommentTabProps> = () => {
  return (
    <div>
      <Tabs>
        <Tabs.TabPane tab={'Text Editor'} key="1">
          <div className={styles.text__editor}>
            <TextEditor name={'comment_text'} />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab={'MarkDown'} key="2">
          <MarkDownEditor name={'comment_text'} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
