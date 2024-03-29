import { ProfileController, User } from '@bluedit/controller';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import { WithNavBar } from '../../components/common/withNavBar';
import { Profile } from '../../components/profile';
import { ProfileCard } from '../../components/profile/card/ProfileCard';
import { ProfileCardContext } from '../../components/profile/card/ProfileCardContext';
import { ProfileContext } from '../../components/profile/ProfileContext';
import styles from './../../styles/main.module.css';
export const getServerSideProps: GetServerSideProps<{
  user: User;
  vote_count: number;
}> = async (context) => {
  const username = context.params.id;
  const raw_res_user = await fetch(process.env.NEXT_PUBLIC_GQL_URI, {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
    body: `{"operationName":"getUser","variables":{},"query":"query getUser {\\n  getUser(username: \\"${username}\\") {\\n    displayName\\n    username\\n    email\\n    picture_url\\n  }\\n}\\n"}`,
    method: 'POST',
    credentials: 'include',
  });
  const res_user: { data: { getUser: User } } = await raw_res_user.json();
  const raw_res_vote = await fetch(process.env.NEXT_PUBLIC_GQL_URI, {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
    body: `{"operationName":"getVoteCountByUser","variables":{},"query":"query getVoteCountByUser {\\n  getVoteCountUser(username: \\"${username}\\")\\n}\\n"}`,
    method: 'POST',
  });
  const res_vote: {
    data: { getVoteCountUser: number };
  } = await raw_res_vote.json();

  if (res_user.data.getUser && res_vote.data) {
    const user = res_user.data;
    const vote_count = res_vote.data.getVoteCountUser;
    return {
      props: { user: user.getUser, vote_count },
    };
  }
  return {
    notFound: true,
  };
};

const Me: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  user,
  vote_count,
}) => {
  return (
    <>
      <Head>
        <title>{user.username}</title>
        {user.picture_url ? (
          <link rel="shortcut icon" href={user.picture_url}></link>
        ) : (
          <link rel="shortcut icon" href="/bluedit.svg"></link>
        )}
      </Head>
      <Layout className={styles.main__layout}>
        <Sider className={styles.main__left} width={'15%'}></Sider>
        <ProfileController username={user.username}>
          {({ joinsub, comments, posts }) => (
            <>
              <Content className={styles.slider}>
                <Profile
                  posts={posts.data && (posts.data.getPostsByUser as any)}
                  comments={comments.data && comments.data.getCommentsByUser}
                  comment_count={
                    comments.data && comments.data.getCommentsByUser.length
                  }
                  joinsub={joinsub.data && joinsub.data.getUserJoinedSub}
                  user={user}
                  vote_count={vote_count}
                />
              </Content>
              <ProfileContext.Provider value={{ user, vote_count }}>
                <ProfileCardContext.Provider
                  value={{
                    comment_count:
                      comments.data && comments.data.getCommentsByUser.length,
                    joinsub: joinsub.data && joinsub.data.getUserJoinedSub,
                  }}
                >
                  <Sider className={styles.main__right} width={'25%'}>
                    <ProfileCard />
                  </Sider>
                </ProfileCardContext.Provider>
              </ProfileContext.Provider>
            </>
          )}
        </ProfileController>
      </Layout>
    </>
  );
};

export default WithNavBar(Me, '');
