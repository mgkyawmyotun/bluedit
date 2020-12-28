import { UserContextController } from '@bluedit/controller';
import 'antd/dist/antd.css';
import Head from 'next/head';
import '../styles/index.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="bluedit.svg"></link>
        <title>Bluedit</title>
      </Head>
      <UserContextController>
        <Component {...pageProps} />
      </UserContextController>
    </>
  );
}

export default MyApp;
