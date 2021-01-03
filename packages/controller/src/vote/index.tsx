import { FetchResult, QueryResult } from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  AddVoteMutation,
  Exact,
  IsVotedQuery,
  useAddVoteMutation,
  useIsVotedQuery,
  VoteType,
} from '../generated/graphql';

interface VoteControllerProps {
  post_id: string;
  children: ({
    upVote,
    downVote,
    isVotedQuery,
  }: {
    upVote: () => Promise<
      FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>
    >;
    downVote: () => Promise<
      FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>
    >;
    isVotedQuery: QueryResult<
      IsVotedQuery,
      Exact<{
        post_id: string;
      }>
    >;
  }) => JSX.Element;
}
export const VoteController: FC<VoteControllerProps> = ({
  children,
  post_id,
}) => {
  const [addVote] = useAddVoteMutation({ client: GraphQlClient.getClient() });
  const isVotedQuery = useIsVotedQuery({
    client: GraphQlClient.getClient(),
    fetchPolicy: 'network-only',
    variables: { post_id: post_id },
  });
  const upVote = () => {
    return addVote({
      variables: { voteData: { post_id, voteType: VoteType.Up } },
    });
  };
  const downVote = () => {
    return addVote({
      variables: { voteData: { post_id, voteType: VoteType.Down } },
    });
  };

  return children({ upVote, downVote, isVotedQuery });
};
