import { GetPostQuery } from '@bluedit/controller';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface PageProps {}
export const getServerSideProps: GetServerSideProps<{
  post: GetPostQuery;
}> = async (context) => {
  const post_id = context.params.post;
  const res: { data: { getPost: GetPostQuery } } = await fetch(
    process.env.NEXT_PUBLIC_GQL_URI,
    {
      headers: {
        accept: '*/*',
        'content-type': 'application/json',
      },
      body: `{"operationName":"getPost","variables":{"post_id":"${post_id}"},"query":"query getPost {\\n  getPost(post_id: \\"${post_id}\\") {\\n    post_id\\n    post_text\\n    title\\n    link\\n    sub {\\n      name\\n      picture_url\\n    }\\n    vote_count\\n    images\\n    videos\\n    user {\\n      username\\n      picture_url\\n    }\\n    comment_count\\n    created_at\\n  }\\n}\\n"}`,
      method: 'POST',
      credentials: 'include',
    }
  ).then((x) => x.json());
  return {
    props: { post: res.data.getPost },
  };
};
const Page: FC<
  PageProps & InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ post }) => {
  const router = useRouter();
  return <h1>{JSON.stringify(post)}</h1>;
};

export default Page;
