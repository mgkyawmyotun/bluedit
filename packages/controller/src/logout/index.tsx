import { GraphQlClient } from '../ApolloClient';
import { useLogoutLazyQuery } from '../generated/graphql';

export const useLogout = () =>
  useLogoutLazyQuery({
    client: GraphQlClient.getClient(),
    fetchPolicy: 'network-only',
  });
