import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  displayName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Error = {
  __typename?: 'Error';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  logout?: Maybe<Scalars['String']>;
  isEmailExists: Scalars['Boolean'];
};


export type QueryIsEmailExistsArgs = {
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<Error>;
  login?: Maybe<Error>;
  loginFaceBook?: Maybe<Error>;
};


export type MutationRegisterArgs = {
  userInput: UserInputType;
};


export type MutationLoginArgs = {
  loginInput: UserLoginInput;
};


export type MutationLoginFaceBookArgs = {
  accessToken: Scalars['String'];
};

export type UserInputType = {
  displayName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'displayName' | 'password' | 'email'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  userInput: UserInputType;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'Error' }
    & Pick<Error, 'message' | 'path'>
  )> }
);

export type CheckEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckEmailQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isEmailExists'>
);


export const UserDocument = gql`
    query User {
  me {
    username
    displayName
    password
    email
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($userInput: UserInputType!) {
  register(userInput: $userInput) {
    message
    path
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CheckEmailDocument = gql`
    query checkEmail($email: String!) {
  isEmailExists(email: $email)
}
    `;

/**
 * __useCheckEmailQuery__
 *
 * To run a query within a React component, call `useCheckEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckEmailQuery(baseOptions: Apollo.QueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>) {
        return Apollo.useQuery<CheckEmailQuery, CheckEmailQueryVariables>(CheckEmailDocument, baseOptions);
      }
export function useCheckEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>) {
          return Apollo.useLazyQuery<CheckEmailQuery, CheckEmailQueryVariables>(CheckEmailDocument, baseOptions);
        }
export type CheckEmailQueryHookResult = ReturnType<typeof useCheckEmailQuery>;
export type CheckEmailLazyQueryHookResult = ReturnType<typeof useCheckEmailLazyQuery>;
export type CheckEmailQueryResult = Apollo.QueryResult<CheckEmailQuery, CheckEmailQueryVariables>;