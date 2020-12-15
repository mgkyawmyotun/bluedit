import { MutationResult } from '@apollo/client';
import React, { FC } from 'react';
import { client } from '..';
import {
  CreateUserMutation,
  useCreateUserMutation,
  UserInputType,
} from '../generated/graphql';

interface Children {
  submit: (user: UserInputType) => void;
  results: MutationResult<CreateUserMutation>;
}
interface RegisterControllerProps {
  children: ({ submit }: Children) => JSX.Element;
}
export const RegisterController: FC<RegisterControllerProps> = ({
  children,
}) => {
  const [createUser, results] = useCreateUserMutation({ client: client });
  const childrenValues: Children = {
    submit: (user) => {
      createUser({
        variables: {
          userInput: user,
        },
      });
    },
    results,
  };

  return <>{children(childrenValues)}</>;
};
