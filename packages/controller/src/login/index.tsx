import { FetchResult, MutationFunctionOptions } from '@apollo/client';
import { FC } from 'react';
import { client } from '../ApolloClient';
import {
  Exact,
  LoginUserMutation,
  useLoginUserMutation,
  UserLoginInput,
} from '../generated/graphql';
export interface LoginChildrenProps {
  submit: (
    options?:
      | MutationFunctionOptions<
          LoginUserMutation,
          Exact<{
            loginInput: UserLoginInput;
          }>
        >
      | undefined
  ) => Promise<FetchResult<LoginUserMutation>>;
}
interface LoginControllerProps {
  children: ({ submit }: LoginChildrenProps) => JSX.Element;
}
export const LoginController: FC<LoginControllerProps> = ({ children }) => {
  const [submit] = useLoginUserMutation({ client: client });
  return children({ submit });
};
