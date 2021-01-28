import { Sub } from '@bluedit/controller';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import { WithNavBar } from '../../components/common/withNavBar';
import { MainSub } from '../../components/sub/MainSub';
import styles from './../../styles/main.module.css';

interface SubCProps {}
export const getServerSideProps: GetServerSideProps<{
  sub: Sub;
}> = async (context) => {
  const subname = context.params.sub;
  const raw_res_user = await fetch(process.env.NEXT_PUBLIC_GQL_URI, {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
    body: `{"operationName":"getSub","variables":{},"query":"query getSub {\\n  getSub(subName: \\"${subname}\\") {\\n    displayName\\n    name\\n    picture_url\\n  }\\n}\\n"}`,
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  });
  const res_sub: { data: { getSub: Sub } } = await raw_res_user.json();

  if (res_sub.data.getSub) {
    const sub = res_sub.data;
    return {
      props: { sub: sub.getSub },
    };
  }
  return {
    notFound: true,
  };
};

const SubC: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  sub,
}) => {
  return (
    <>
      <Head>
        <title>{sub.name}</title>
        {sub.picture_url ? (
          <link rel="shortcut icon" href={sub.picture_url}></link>
        ) : (
          <link rel="shortcut icon" href="/bluedit.svg"></link>
        )}
      </Head>
      <Layout className={styles.main__layout}>
        <Sider className={styles.main__left} width={'20%'}></Sider>
        <Content style={{ marginTop: '64px' }}>
          <MainSub sub={sub} />
        </Content>
        <Sider className={styles.main__left} width={'20%'}></Sider>
      </Layout>
    </>
  );
};
export default WithNavBar(SubC, '');
