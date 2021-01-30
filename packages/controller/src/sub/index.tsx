import { FC, useEffect, useState } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  useGetJoinedSubQuery,
  useIsJoinQuery,
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
    isJoin,
  }: {
    joinSub: (subName: string) => void;
    leaveSub: (subName: string) => void;
    isJoin: boolean;
  }) => JSX.Element;
}

export const JoinLeaveController: FC<JLInterface> = ({ children }) => {
  const [join] = useJoinSubBlueEditMutation({
    client: GraphQlClient.getClient(),
  });
  const [leave] = useLeaveSubMutation({ client: GraphQlClient.getClient() });
  const [isJoin, setIsJoin] = useState<boolean>(false);
  const { data, loading } = useIsJoinQuery({
    client: GraphQlClient.getClient(),
  });

  useEffect(() => {
    if (!loading && data) {
      setIsJoin(data.isJoin);
    }
  }, [data, loading]);
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
  return children({ joinSub, leaveSub, isJoin });
};
