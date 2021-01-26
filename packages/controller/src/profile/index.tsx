import { QueryResult } from '@apollo/client';
import { FC, useMemo } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  Exact,
  GetCommentsByUserQuery,
  GetPostsByUserQuery,
  JoinSubQuery,
  useGetCommentsByUserQuery,
  useGetPostsByUserQuery,
  useJoinSubQuery,
} from '../generated/graphql';
interface ChildrenProps {
  joinsub: QueryResult<
    JoinSubQuery,
    Exact<{
      username: string;
    }>
  >;
  posts: QueryResult<
    GetPostsByUserQuery,
    Exact<{
      username: string;
    }>
  >;
  comments: QueryResult<
    GetCommentsByUserQuery,
    Exact<{
      username: string;
    }>
  >;
}
interface ProfileControllerProps {
  children: (props: ChildrenProps) => JSX.Element;
  username: string;
}
export const ProfileController: FC<ProfileControllerProps> = ({
  children,
  username,
}) => {
  const options = useMemo(() => {
    const _options = {
      client: GraphQlClient.getClient(),
      variables: { username },
    };

    return _options;
  }, [username]);

  const joinsub = useJoinSubQuery(options);
  const posts = useGetPostsByUserQuery(options);
  const comments = useGetCommentsByUserQuery(options);

  return children({ comments, posts, joinsub });
};
