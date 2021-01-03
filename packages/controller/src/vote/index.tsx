import {
  ApolloError,
  FetchResult,
  gql,
  QueryResult,
  useSubscription,
} from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  AddVoteMutation,
  Exact,
  IsVotedQuery,
  RemoveVoteMutation,
  useAddVoteMutation,
  useIsVotedQuery,
  useRemoveVoteMutation,
  VoteType,
} from '../generated/graphql';
const VOTE_SUB = gql`
  subscription voteAdded($postID: String!) {
    voteAdded(post_id: $postID)
  }
`;

interface VoteControllerProps {
  post_id: string;
  children: ({
    upVote,
    downVote,
    isVotedQuery,
    removeDownVote,
    removeUpVote,
    voteAddedSub,
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
    removeUpVote: () => Promise<
      FetchResult<RemoveVoteMutation, Record<string, any>, Record<string, any>>
    >;
    removeDownVote: () => Promise<
      FetchResult<RemoveVoteMutation, Record<string, any>, Record<string, any>>
    >;
    voteAddedSub: {
      variables:
        | {
            postID: string;
          }
        | undefined;
      loading: boolean;
      data?: any;
      error?: ApolloError | undefined;
    };
  }) => JSX.Element;
}
export const VoteController: FC<VoteControllerProps> = ({
  children,
  post_id,
}) => {
  const voteAddedSub = useSubscription(VOTE_SUB, {
    variables: { postID: post_id },
    client: GraphQlClient.getClient(),
  });
  const [addVote] = useAddVoteMutation({ client: GraphQlClient.getClient() });
  const isVotedQuery = useIsVotedQuery({
    client: GraphQlClient.getClient(),
    fetchPolicy: 'network-only',
    variables: { post_id: post_id },
  });
  const [removeVote] = useRemoveVoteMutation({
    client: GraphQlClient.getClient(),
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

  const removeUpVote = () => {
    return removeVote({
      variables: { voteData: { post_id, voteType: VoteType.Up } },
    });
  };
  const removeDownVote = () => {
    return removeVote({
      variables: { voteData: { post_id, voteType: VoteType.Down } },
    });
  };

  return children({
    upVote,
    downVote,
    isVotedQuery,
    removeDownVote,
    removeUpVote,
    voteAddedSub,
  });
};
