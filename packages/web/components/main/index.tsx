import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { FC } from 'react';
import styles from './../../styles/main.module.css';
interface MainProps {}
export const Main: FC = () => {
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Sider className={styles.slider} width={'20%'}></Sider>
        <Content style={{ marginTop: 64 }}>
          <h1>Hello From World</h1>
        </Content>
        <Sider className={styles.slider} width={'20%'}></Sider>
      </Layout>
    </>
  );
};
