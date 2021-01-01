import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import { useAddVoteMutation, VoteType } from '../generated/graphql';

interface VoteControllerProps {
  children: ({
    upVote,
    downVote,
  }: {
    upVote: (post_id: string) => Promise<void>;
    downVote: (post_id: string) => Promise<void>;
  }) => JSX.Element;
}
export const VoteController: FC<VoteControllerProps> = ({ children }) => {
  const [addVote] = useAddVoteMutation({ client: GraphQlClient.getClient() });
  const upVote = async (post_id: string) => {
    await addVote({
      variables: { voteData: { post_id, voteType: VoteType.Up } },
    });
  };
  const downVote = async (post_id: string) => {
    await addVote({
      variables: { voteData: { post_id, voteType: VoteType.Down } },
    });
  };
  return children({ upVote, downVote });
};
