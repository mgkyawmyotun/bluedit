import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { FC } from 'react';
import styles from './../../styles/submit.module.css';
import { SubmitMain } from './SubmitMain';
interface SubmitFormProps {}
export const SubmitForm: FC = () => {
  return (
    <Layout className={styles.main__layout}>
      <Sider className={styles.main__left} width={'25%'} />
      <Content>
        <SubmitMain />
      </Content>
      <Sider className={styles.main__right} width={'25%'} />
    </Layout>
  );
};
