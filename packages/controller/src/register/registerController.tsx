import {
  ApolloQueryResult,
  FetchResult,
  MutationFunctionOptions,
} from '@apollo/client';
import React, { FC } from 'react';
import { GraphQlClient } from '..';
import {
  CheckEmailQuery,
  CreateUserMutation,
  Exact,
  useCheckEmailQuery,
  useCreateUserMutation,
  UserInputType,
} from '../generated/graphql';

interface Children {
  submit: (
    options?:
      | MutationFunctionOptions<
          CreateUserMutation,
          Exact<{
            userInput: UserInputType;
          }>
        >
      | undefined
  ) => Promise<FetchResult<CreateUserMutation>>;

  checkEmail: (
    variables?: Partial<Exact<{ email: string }>> | undefined
  ) => Promise<ApolloQueryResult<CheckEmailQuery>>;
}
export type RegisterProps = Children;
interface RegisterControllerProps {
  children: ({ submit, checkEmail }: Children) => JSX.Element;
}
const GrapQLOptions = { client: GraphQlClient.getClient() };

export const RegisterController: FC<RegisterControllerProps> = ({
  children,
}) => {
  const [submit] = useCreateUserMutation({ ...GrapQLOptions });
  const { refetch: checkEmail } = useCheckEmailQuery({
    ...GrapQLOptions,
    variables: { email: '' },
  });

  const childrenValues: Children = {
    submit,
    checkEmail,
  };

  return <>{children(childrenValues)}</>;
};
