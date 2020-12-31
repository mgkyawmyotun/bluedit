import { QueryTuple } from '@apollo/client';
import { FC, useEffect } from 'react';
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
export const usePost = () => {
  useEffect(() => {}, []);
};
export const PostController: FC<PostControllerInterface> = ({ children }) => {
  const postQuery = useGetPostsLazyQuery({
    client: GraphQlClient.getClient(),
  });
  return children(postQuery);
};
