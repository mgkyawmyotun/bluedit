import { QueryResult } from '@apollo/client';
import { FC } from 'react';
import { client } from '../ApolloClient';
import { Exact, UserQuery, useUserQuery } from '../generated/graphql';
interface MeControllerProps {
  children: (
    result: QueryResult<
      UserQuery,
      Exact<{
        [key: string]: never;
      }>
    >
  ) => JSX.Element;
}
export const MeController: FC<MeControllerProps> = ({ children }) => {
  const result = useUserQuery({
    fetchPolicy: 'network-only',
    client: client,
  });
  return children(result);
};
