import { FetchResult, MutationFunctionOptions } from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  ContinueWithFaceBookMutation,
  Exact,
  useContinueWithFaceBookMutation,
} from '../generated/graphql';

interface FaceBookControllerProps {
  children: (
    submit: (
      options?:
        | MutationFunctionOptions<
            ContinueWithFaceBookMutation,
            Exact<{
              accessToken: string;
            }>
          >
        | undefined
    ) => Promise<FetchResult<ContinueWithFaceBookMutation>>
  ) => JSX.Element;
}
export const FaceBookController: FC<FaceBookControllerProps> = ({
  children,
}) => {
  const [submit] = useContinueWithFaceBookMutation({
    client: GraphQlClient.getClient(),
  });
  return children(submit);
};
