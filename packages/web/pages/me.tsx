import { MeController } from '@bluedit/controller';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';
import { WithNavBar } from '../components/common/withNavBar';
export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const raw_res = await fetch('http://localhost:4000/graphql', {
    headers: {
      'content-type': 'application/json',
    },
    body:
      '{"operationName":"Me","variables":{},"query":"query Me {\\n  me {\\n    displayName\\n    username\\n    picture_url\\n    email\\n  }\\n}\\n"}',
    method: 'POST',
    credentials: 'include',
  });
  return {
    notFound: true,
  };
};
const Me: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return (
    <MeController>
      {({ data, loading }) => (
        <>
          {loading && <h1>Loading ...</h1>}
          {data && data.me && <h1>{data.me.username}</h1>}
        </>
      )}
    </MeController>
  );
};
export default WithNavBar(Me, '');
