import { GraphQlClient } from '../ApolloClient';
import { useGetJoinedSubQuery } from '../generated/graphql';
export const useGetJoinSub = () => {
  const { loading, data } = useGetJoinedSubQuery({
    client: GraphQlClient.getClient(),
  });
  return {
    loading,
    data,
  };
};
