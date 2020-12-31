import { postQueryType } from '@bluedit/controller';
import { FC, useEffect, useState } from 'react';
import { PostCard } from '../postCard';

interface PostListProps {
  postQuery: postQueryType;
}
export const PostList: FC<PostListProps> = ({
  postQuery: [fetch, { data, loading }],
}) => {
  const [posts, setPosts] = useState<typeof data.getPosts>();
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {loading
        ? 'Loading ... '
        : data &&
          data.getPosts.map((post) => (
            <PostCard post={post as any} key={post.post_id} />
          ))}
    </>
  );
};
