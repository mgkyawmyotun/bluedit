import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { FC } from 'react';
import styles from './../../styles/submit.module.css';
import { SubmitHeader } from './SubmitHeader';
import { SubmitMain } from './SubmitMain';
interface SubmitFormProps {}

export const SubmitForm: FC = () => {
  return (
    <Layout className={styles.main__layout}>
      <Sider className={styles.main__left} width={'25%'} />
      <Content
        style={{
          marginTop: 64,
          backgroundColor: '#DAE0E6',
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <SubmitHeader />
        <SubmitMain />
      </Content>
      <Sider className={styles.main__right} width={'25%'} />
    </Layout>
  );
};
