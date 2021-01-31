import { QueryLazyOptions } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  Exact,
  Sub,
  SubSearchInput,
  useGetSearchSubsLazyQuery,
} from '../generated/graphql';

export type SubSearchType =
  | ({
      __typename?: 'Sub' | undefined;
    } & Pick<Sub, 'displayName' | 'name' | 'picture_url'>)[]
  | null
  | undefined;

type SubSearchReturn = [
  SubSearchType,
  (
    options?:
      | QueryLazyOptions<
          Exact<{
            subInput: SubSearchInput;
          }>
        >
      | undefined
  ) => void
];
export const getSearchResut = (): SubSearchReturn => {
  const [subs, setSubs] = useState<SubSearchType>();
  const [getSubResult, { data, loading }] = useGetSearchSubsLazyQuery({
    client: GraphQlClient.getClient(),
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    if (data && !loading) {
      setSubs(data.getSubs);
    }
  }, [data, loading]);
  return [subs, getSubResult];
};
