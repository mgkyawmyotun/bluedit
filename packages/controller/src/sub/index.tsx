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
    joinSub: () => void;
    leaveSub: () => void;
    isJoin: boolean;
  }) => JSX.Element;
  subName: string;
}

export const JoinLeaveController: FC<JLInterface> = ({ children, subName }) => {
  const [join] = useJoinSubBlueEditMutation({
    client: GraphQlClient.getClient(),
  });
  const [leave] = useLeaveSubMutation({ client: GraphQlClient.getClient() });
  const [isJoin, setIsJoin] = useState<boolean>(false);
  const { data, loading } = useIsJoinQuery({
    client: GraphQlClient.getClient(),
    variables: { subName },
  });

  useEffect(() => {
    if (!loading && data) {
      setIsJoin(data.isJoin);
    }
  }, [data, loading]);
  const joinSub = async () => {
    const data = await join({ variables: { subName } });
    if (data.data?.joinSubBluedit) {
      throw new Error(data.data?.joinSubBluedit.message);
    }
    setIsJoin(true);
  };

  const leaveSub = async () => {
    const data = await leave({ variables: { subName } });
    if (data.data?.leaveSub) {
      throw new Error(data.data?.leaveSub.message);
    }
    setIsJoin(false);
  };
  return children({ joinSub, leaveSub, isJoin });
};
