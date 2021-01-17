import { GetPostQuery, Post } from '@bluedit/controller';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { FC } from 'react';
import { WithMainLayout } from '../../components/common/withMainLayout';
import { WithNavBar } from '../../components/common/withNavBar';
import { PostCard } from '../../components/postCard';

interface PageProps {}
export const getServerSideProps: GetServerSideProps<{
  post: GetPostQuery;
}> = async (context) => {
  const post_id = context.params.post;
  const raw_res = await fetch(process.env.NEXT_PUBLIC_GQL_URI, {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
    body: `{"operationName":"getPost","variables":{"post_id":"${post_id}"},"query":"query getPost {\\n  getPost(post_id: \\"${post_id}\\") {\\n    post_id\\n    post_text\\n    title\\n    link\\n    sub {\\n      name\\n      picture_url\\n    }\\n    vote_count\\n    images\\n    videos\\n    user {\\n      username\\n      picture_url\\n    }\\n    comment_count\\n    created_at\\n  }\\n}\\n"}`,
    method: 'POST',
    credentials: 'include',
  });
  const res: { data: GetPostQuery } = await raw_res.json();
  if (res.data) {
    const post = res.data;
    return {
      props: { post },
    };
  }
  return {
    notFound: true,
  };
};
const Page: FC<
  PageProps & InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ post }) => {
  return (
    <>
      <PostCard post={post.getPost as Post} />
    </>
  );
};

export default WithNavBar(WithMainLayout(Page), 'Post');
