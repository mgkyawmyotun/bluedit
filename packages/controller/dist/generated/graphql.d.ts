import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type User = {
    __typename?: 'User';
    displayName: Scalars['String'];
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type Error = {
    __typename?: 'Error';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    me?: Maybe<User>;
    logout?: Maybe<Scalars['String']>;
    isEmailExists: Scalars['Boolean'];
};
export declare type QueryIsEmailExistsArgs = {
    email: Scalars['String'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    register?: Maybe<Error>;
    login?: Maybe<Error>;
    loginFaceBook?: Maybe<Error>;
};
export declare type MutationRegisterArgs = {
    userInput: UserInputType;
};
export declare type MutationLoginArgs = {
    loginInput: UserLoginInput;
};
export declare type MutationLoginFaceBookArgs = {
    accessToken: Scalars['String'];
};
export declare type UserInputType = {
    displayName: Scalars['String'];
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type UserLoginInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type CreateUserMutationVariables = Exact<{
    userInput: UserInputType;
}>;
export declare type CreateUserMutation = {
    __typename?: 'Mutation';
} & {
    register?: Maybe<{
        __typename?: 'Error';
    } & Pick<Error, 'message' | 'path'>>;
};
export declare const CreateUserDocument: Apollo.DocumentNode;
export declare type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export declare function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>): Apollo.MutationTuple<CreateUserMutation, Exact<{
    userInput: UserInputType;
}>>;
export declare type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export declare type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export declare type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
//# sourceMappingURL=graphql.d.ts.map