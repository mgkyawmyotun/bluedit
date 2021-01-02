import { PostController } from '@bluedit/controller';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { FC } from 'react';
import { PostList } from '../postList';
import { SubmitView } from '../submit/submitView';
import styles from './../../styles/main.module.css';
interface MainProps {}
export const Main: FC = () => {
  return (
    <>
      <Layout className={styles.main__layout}>
        <Sider className={styles.main__left} width={'20%'}></Sider>
        <Content style={{ marginTop: 64 }} className={styles.slider}>
          <SubmitView />
          <PostController>
            {(postQuery) => <PostList postQuery={postQuery}></PostList>}
          </PostController>
        </Content>
        <Sider className={styles.main__right} width={'20%'}></Sider>
      </Layout>
    </>
  );
};
