import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { FC } from 'react';
import styles from './../../styles/main.module.css';
export const WithMainLayout = (Component: FC) => {
  return (props) => (
    <>
      <Layout className={styles.main__layout}>
        <Sider className={styles.main__left} width={'20%'}></Sider>
        <Content style={{ marginTop: 64 }} className={styles.slider}>
          <Component {...props} />
        </Content>
        <Sider className={styles.main__right} width={'20%'}></Sider>
      </Layout>
    </>
  );
};
