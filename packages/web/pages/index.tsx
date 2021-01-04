import { UserContextController } from '@bluedit/controller';
import Layout from 'antd/lib/layout/layout';
import Head from 'next/head';
import { Main } from '../components/main';
import { NavBar } from '../components/navbar';

export default function Home() {
  return (
    <>
      {' '}
      <Head>
        <title>Bluedit:Front page of internet</title>
      </Head>
      <Layout>
        <UserContextController>
          <NavBar />
          <Main />
        </UserContextController>
      </Layout>
    </>
  );
}
