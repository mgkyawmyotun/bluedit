import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { FC } from 'react';
import { WithNavBar } from '../../components/common/withNavBar';
import { Profile } from '../../components/profile';
import { ProfileCard } from '../../components/profile/card/ProfileCard';
import styles from './../../styles/main.module.css';

const Me: FC = () => {
  return (
    <>
      <Layout className={styles.main__layout}>
        <Sider className={styles.main__left} width={'20%'}></Sider>
        <Content className={styles.slider}>
          <Profile />
        </Content>
        <Sider className={styles.main__right} width={'30%'}>
          <ProfileCard />
        </Sider>
      </Layout>
    </>
  );
};
export default WithNavBar(Me, 'User');
