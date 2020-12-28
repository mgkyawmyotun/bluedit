import Layout from 'antd/lib/layout/layout';
import { Main } from '../components/main';
import { NavBar } from '../components/navbar';

export default function Home() {
  return (
    <>
      <Layout>
        <NavBar />
        <Main />
      </Layout>
    </>
  );
}
