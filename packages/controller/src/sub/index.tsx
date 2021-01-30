import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  useGetJoinedSubQuery,
  useJoinSubBlueEditMutation,
  useLeaveSubMutation,
} from '../generated/graphql';
export const useGetJoinSub = () => {
  const { loading, data } = useGetJoinedSubQuery({
    client: GraphQlClient.getClient(),
  });
  return {
    loading,
    data,
  };
};
interface JLInterface {
  children: ({
    joinSub,
    leaveSub,
  }: {
    joinSub: (subName: string) => void;
    leaveSub: (subName: string) => void;
  }) => JSX.Element;
}

export const JoinLeaveController: FC<JLInterface> = ({ children }) => {
  const [join] = useJoinSubBlueEditMutation({
    client: GraphQlClient.getClient(),
  });
  const [leave] = useLeaveSubMutation({ client: GraphQlClient.getClient() });

  const joinSub = async (subName: string) => {
    const data = await join({ variables: { subName } });
    if (data.data?.joinSubBluedit) {
      throw new Error(data.data?.joinSubBluedit.message);
    }
  };
  const leaveSub = async (subName: string) => {
    const data = await leave({ variables: { subName } });
    if (data.data?.leaveSub) {
      throw new Error(data.data?.leaveSub.message);
    }
  };
  return children({ joinSub, leaveSub });
};
