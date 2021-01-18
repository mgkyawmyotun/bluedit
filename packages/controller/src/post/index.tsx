import { QueryTuple } from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  Exact,
  GetPostsQuery,
  useGetPostsLazyQuery,
} from '../generated/graphql';
export type postQueryType = QueryTuple<
  GetPostsQuery,
  Exact<{
    [key: string]: never;
  }>
>;
interface PostControllerInterface {
  children: (postQuery: postQueryType) => JSX.Element;
}
export const PostController: FC<PostControllerInterface> = ({ children }) => {
  const postQuery = useGetPostsLazyQuery({
    client: GraphQlClient.getClient(),
  });
  return children(postQuery);
};
// export const usePost = (post_id: string) => {
//   const [post, setPost] = useState<GetPostQuery>();
//   const { data, loading } = useGetPostQuery({
//     client: GraphQlClient.getClient(),
//     variables: { post_id },
//   });
//   useEffect(() => {
//     if (data && !loading) {
//       setPost(data);
//     }
//   }, [data, loading]);
//   return post;
// };
