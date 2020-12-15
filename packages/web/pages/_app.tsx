import 'antd/dist/antd.css';
import Head from 'next/head';
import '../styles/index.css';
const Test = ({ children }) => {
  console.log(children);
  return children;
};
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="bluedit.svg"></link>
        <title>Bluedit</title>
      </Head>
      <Test>
        <Component {...pageProps} />
      </Test>
    </>
  );
}

export default MyApp;
