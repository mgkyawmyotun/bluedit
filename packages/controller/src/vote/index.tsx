import { FetchResult } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  AddVoteMutation,
  useAddVoteMutation,
  useIsVotedLazyQuery,
  VoteType,
} from '../generated/graphql';

interface VoteControllerProps {
  children: ({
    upVote,
    downVote,
    checkIsVoted,
  }: {
    upVote: (
      post_id: string
    ) => Promise<
      FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>
    >;
    downVote: (
      post_id: string
    ) => Promise<
      FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>
    >;
    checkIsVoted(post_id: string): boolean;
  }) => JSX.Element;
}
export const VoteController: FC<VoteControllerProps> = ({ children }) => {
  const [addVote] = useAddVoteMutation({ client: GraphQlClient.getClient() });
  const [fetch, { loading, data }] = useIsVotedLazyQuery({
    client: GraphQlClient.getClient(),
    fetchPolicy: 'network-only',
  });
  const upVote = (post_id: string) => {
    return addVote({
      variables: { voteData: { post_id, voteType: VoteType.Up } },
    });
  };
  const downVote = (post_id: string) => {
    return addVote({
      variables: { voteData: { post_id, voteType: VoteType.Down } },
    });
  };
  const checkIsVoted = (post_id: string) => {
    const [res, setRes] = useState<boolean>(false);
    useEffect(() => {
      if (!loading && data) {
        setRes(data?.isVoted);
      } else {
        fetch({ variables: { post_id } });
      }
    }, [loading, data]);
    return res;
  };
  return children({ upVote, downVote, checkIsVoted });
};
