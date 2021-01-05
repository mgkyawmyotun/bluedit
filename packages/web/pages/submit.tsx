import { Layout } from 'antd';
import 'draft-js/dist/Draft.css';
import Head from 'next/head';
import { NavBar } from '../components/navbar';
import { SubmitForm } from '../components/submit';
export default function Submit() {
  return (
    <>
      <Head>
        <title>Submit To Bluedit</title>
        <meta charSet="utf-8" />
      </Head>
      <Layout>
        <NavBar />
        <SubmitForm />
      </Layout>
    </>
  );
}
