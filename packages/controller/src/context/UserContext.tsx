import { QueryResult } from '@apollo/client';
import React, { createContext, FC, useContext, useEffect } from 'react';
import { GraphQlClient } from '..';
import { Exact, UserQuery, useUserQuery } from '../generated/graphql';

const UserContext = createContext<QueryResult<
  UserQuery,
  Exact<{
    [key: string]: never;
  }>
> | null>(null);
export const UserContextController: FC = ({ children }) => {
  const result = useUserQuery({
    fetchPolicy: 'network-only',
    client: GraphQlClient.getClient(),
  });
  return <UserContext.Provider value={result}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const value = useContext(UserContext);
  useEffect(() => {
    value?.refetch().then(() => {});
  }, []);
  return value;
};
