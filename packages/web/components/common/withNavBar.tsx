import { UserContextController } from '@bluedit/controller';
import Layout from 'antd/lib/layout/layout';
import Head from 'next/head';
import { NavBar } from '../navbar';

export const WithNavBar = (Component: React.FC, title: string) => {
  return (props) => (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="bluedit.svg"></link>
      </Head>
      <Layout>
        <UserContextController>
          <NavBar />
          <Component {...props} />
        </UserContextController>
      </Layout>
    </>
  );
};
