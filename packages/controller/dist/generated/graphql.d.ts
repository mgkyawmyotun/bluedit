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
export declare type UserQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type UserQuery = ({
    __typename?: 'Query';
} & {
    me?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'username' | 'displayName' | 'password' | 'email'>)>;
});
export declare type CreateUserMutationVariables = Exact<{
    userInput: UserInputType;
}>;
export declare type CreateUserMutation = ({
    __typename?: 'Mutation';
} & {
    register?: Maybe<({
        __typename?: 'Error';
    } & Pick<Error, 'message' | 'path'>)>;
});
export declare type CheckEmailQueryVariables = Exact<{
    email: Scalars['String'];
}>;
export declare type CheckEmailQuery = ({
    __typename?: 'Query';
} & Pick<Query, 'isEmailExists'>);
export declare const UserDocument: Apollo.DocumentNode;
export declare function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>): Apollo.QueryResult<UserQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>): Apollo.QueryTuple<UserQuery, Exact<{
    [key: string]: never;
}>>;
export declare type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export declare type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export declare type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export declare const CreateUserDocument: Apollo.DocumentNode;
export declare type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export declare function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>): Apollo.MutationTuple<CreateUserMutation, Exact<{
    userInput: UserInputType;
}>>;
export declare type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export declare type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export declare type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export declare const CheckEmailDocument: Apollo.DocumentNode;
export declare function useCheckEmailQuery(baseOptions: Apollo.QueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>): Apollo.QueryResult<CheckEmailQuery, Exact<{
    email: string;
}>>;
export declare function useCheckEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>): Apollo.QueryTuple<CheckEmailQuery, Exact<{
    email: string;
}>>;
export declare type CheckEmailQueryHookResult = ReturnType<typeof useCheckEmailQuery>;
export declare type CheckEmailLazyQueryHookResult = ReturnType<typeof useCheckEmailLazyQuery>;
export declare type CheckEmailQueryResult = Apollo.QueryResult<CheckEmailQuery, CheckEmailQueryVariables>;
//# sourceMappingURL=graphql.d.ts.map