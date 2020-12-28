import React, { createContext, FC, useContext } from 'react';
import { GraphQlClient } from '..';
import { UserQuery, useUserQuery } from '../generated/graphql';

const UserContext = createContext<UserQuery | null>(null);
export const UserContextController: FC = ({ children }) => {
  const result = useUserQuery({
    fetchPolicy: 'network-only',
    client: GraphQlClient.getClient(),
  });
  return (
    <UserContext.Provider value={result.data || null}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
