import { User } from '@bluedit/controller';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import { WithNavBar } from '../../components/common/withNavBar';
import { Profile } from '../../components/profile';
import { ProfileCard } from '../../components/profile/card/ProfileCard';
import { ProfileContext } from '../../components/profile/ProfileContext';
import styles from './../../styles/main.module.css';
export const getServerSideProps: GetServerSideProps<{
  user: User;
}> = async (context) => {
  const username = context.params.id;
  const raw_res_user = await fetch('http://localhost:4000/graphql', {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
    body: `{"operationName":"getUser","variables":{},"query":"query getUser {\\n  getUser(username: \\"${username}\\") {\\n    displayName\\n    username\\n    email\\n    picture_url\\n  }\\n}\\n"}`,
    method: 'POST',
    credentials: 'include',
  });
  const res: { data: { getUser: User } } = await raw_res_user.json();
  if (res.data.getUser) {
    const user = res.data;
    return {
      props: { user: user.getUser },
    };
  }
  return {
    notFound: true,
  };
};

const Me: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  user,
}) => {
  return (
    <>
      <Head>
        <title>{user.username}</title>
        {user.picture_url ? (
          <link rel="shortcut icon" href={user.picture_url}></link>
        ) : (
          <link rel="shortcut icon" href="bluedit.svg"></link>
        )}
      </Head>
      <Layout className={styles.main__layout}>
        <Sider className={styles.main__left} width={'20%'}></Sider>
        <ProfileContext.Provider value={{ user }}>
          <Content className={styles.slider}>
            <Profile />
          </Content>
          <Sider className={styles.main__right} width={'30%'}>
            <ProfileCard />
          </Sider>
        </ProfileContext.Provider>
      </Layout>
    </>
  );
};

export default WithNavBar(Me, '');
