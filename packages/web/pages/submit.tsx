import { Layout } from 'antd';
import Head from 'next/head';
import { NavBar } from '../components/navbar';
import { SubmitForm } from '../components/submit';

export default function Submit() {
  return (
    <>
      <Head>
        <title>Submit To Bluedit</title>
      </Head>
      <Layout>
        <NavBar />
        <SubmitForm />
      </Layout>
    </>
  );
}
