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

export type VoteError = ErrorInterface & {
  __typename?: 'VoteError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type ErrorInterface = {
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Sub = {
  __typename?: 'Sub';
  sub_id: Scalars['String'];
  displayName: Scalars['String'];
  name: Scalars['String'];
  picture_url?: Maybe<Scalars['String']>;
};

export type SubError = ErrorInterface & {
  __typename?: 'SubError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  displayName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  picture_url?: Maybe<Scalars['String']>;
};

export type UserError = ErrorInterface & {
  __typename?: 'UserError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Post = PostInteface & {
  __typename?: 'Post';
  post_id: Scalars['String'];
  post_text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  sub?: Maybe<Sub>;
  vote_count: Scalars['Float'];
  images?: Maybe<Array<Scalars['String']>>;
  videos?: Maybe<Array<Scalars['String']>>;
  user: User;
  comment_count: Scalars['Float'];
  created_at: Scalars['String'];
};

export type PostInteface = {
  post_id: Scalars['String'];
  post_text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  sub?: Maybe<Sub>;
  vote_count: Scalars['Float'];
  images?: Maybe<Array<Scalars['String']>>;
  videos?: Maybe<Array<Scalars['String']>>;
  user: User;
  comment_count: Scalars['Float'];
  created_at: Scalars['String'];
};

export type PostError = ErrorInterface & {
  __typename?: 'PostError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  comment_text: Scalars['String'];
  comment_id: Scalars['String'];
  user: User;
};

export type CommentError = ErrorInterface & {
  __typename?: 'CommentError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getPosts: Array<Post>;
  getComments?: Maybe<Array<Comment>>;
  me?: Maybe<User>;
  logout?: Maybe<Scalars['String']>;
  isEmailExists: Scalars['Boolean'];
  isVoted?: Maybe<VoteType>;
};


export type QueryGetCommentsArgs = {
  post_id: Scalars['String'];
};


export type QueryIsEmailExistsArgs = {
  email: Scalars['String'];
};


export type QueryIsVotedArgs = {
  post_id: Scalars['String'];
};

export enum VoteType {
  Up = 'UP',
  Down = 'DOWN'
}

export type Mutation = {
  __typename?: 'Mutation';
  createPostWithMarkDown?: Maybe<PostError>;
  createPostWithLink?: Maybe<PostError>;
  createPostWithImage?: Maybe<PostError>;
  createPostWithVideo?: Maybe<PostError>;
  deletePost?: Maybe<PostError>;
  editPostMarkDown?: Maybe<PostError>;
  editPostLink?: Maybe<PostError>;
  createComment?: Maybe<CommentError>;
  editComment?: Maybe<CommentError>;
  deleteComment?: Maybe<CommentError>;
  createSubBluedit?: Maybe<SubError>;
  register?: Maybe<UserError>;
  login?: Maybe<UserError>;
  loginFaceBook?: Maybe<UserError>;
  sendForgetPasswordLink?: Maybe<Scalars['Boolean']>;
  forgetPasswordChange?: Maybe<UserError>;
  addVote?: Maybe<VoteError>;
  removeVote?: Maybe<VoteError>;
};


export type MutationCreatePostWithMarkDownArgs = {
  postData: PostInputMarkDown;
};


export type MutationCreatePostWithLinkArgs = {
  postData: PostInputLink;
};


export type MutationCreatePostWithImageArgs = {
  postData: PostInputImage;
};


export type MutationCreatePostWithVideoArgs = {
  postData: PostInputVideo;
};


export type MutationDeletePostArgs = {
  post_id: Scalars['String'];
};


export type MutationEditPostMarkDownArgs = {
  postEditInput: PostInputEditText;
};


export type MutationEditPostLinkArgs = {
  postEditInput: PostInputEditLink;
};


export type MutationCreateCommentArgs = {
  commentInput: CommentInput;
};


export type MutationEditCommentArgs = {
  editCommentInput: CommentEditInput;
};


export type MutationDeleteCommentArgs = {
  comment_id: Scalars['String'];
};


export type MutationCreateSubBlueditArgs = {
  subInput: SubInput;
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


export type MutationSendForgetPasswordLinkArgs = {
  email: Scalars['String'];
};


export type MutationForgetPasswordChangeArgs = {
  forgetPassowrdChangeInput: ForgetPasswordChange;
};


export type MutationAddVoteArgs = {
  voteData: Vote;
};


export type MutationRemoveVoteArgs = {
  voteData: Vote;
};

export type PostInputMarkDown = {
  title?: Maybe<Scalars['String']>;
  subbluedit?: Maybe<Scalars['String']>;
  post_text: Scalars['String'];
};

export type PostInputLink = {
  title?: Maybe<Scalars['String']>;
  subbluedit?: Maybe<Scalars['String']>;
  link: Scalars['String'];
};

export type PostInputImage = {
  title?: Maybe<Scalars['String']>;
  subbluedit?: Maybe<Scalars['String']>;
  images: Array<Scalars['String']>;
};

export type PostInputVideo = {
  title?: Maybe<Scalars['String']>;
  subbluedit?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Scalars['String']>>;
};

export type PostInputEditText = {
  post_id?: Maybe<Scalars['String']>;
  post_text: Scalars['String'];
};

export type PostInputEditLink = {
  post_id?: Maybe<Scalars['String']>;
  post_link: Scalars['String'];
};

export type CommentInput = {
  comment_text: Scalars['String'];
  post_id: Scalars['String'];
};

export type CommentEditInput = {
  comment_text: Scalars['String'];
  comment_id: Scalars['String'];
};

export type SubInput = {
  displayName: Scalars['String'];
  name: Scalars['String'];
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

export type ForgetPasswordChange = {
  newPassword: Scalars['String'];
  key: Scalars['String'];
};

export type Vote = {
  voteType: VoteType;
  post_id: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  voteAdded: Scalars['Float'];
};


export type SubscriptionVoteAddedArgs = {
  post_id: Scalars['String'];
};

export type ContinueWithFaceBookMutationVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type ContinueWithFaceBookMutation = (
  { __typename?: 'Mutation' }
  & { loginFaceBook?: Maybe<(
    { __typename?: 'UserError' }
    & Pick<UserError, 'path' | 'message'>
  )> }
);

export type LoginUserMutationVariables = Exact<{
  loginInput: UserLoginInput;
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'UserError' }
    & Pick<UserError, 'path' | 'message'>
  )> }
);

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'logout'>
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'displayName' | 'email'>
  )> }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { getPosts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'post_id' | 'post_text' | 'title' | 'link' | 'vote_count' | 'images' | 'videos' | 'comment_count'>
    & { sub?: Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'name'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  )> }
);

export type CreateUserMutationVariables = Exact<{
  userInput: UserInputType;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'UserError' }
    & Pick<UserError, 'message' | 'path'>
  )> }
);

export type CheckEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckEmailQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isEmailExists'>
);

export type AddVoteMutationVariables = Exact<{
  voteData: Vote;
}>;


export type AddVoteMutation = (
  { __typename?: 'Mutation' }
  & { addVote?: Maybe<(
    { __typename?: 'VoteError' }
    & Pick<VoteError, 'message' | 'path'>
  )> }
);

export type IsVotedQueryVariables = Exact<{
  post_id: Scalars['String'];
}>;


export type IsVotedQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isVoted'>
);

export type RemoveVoteMutationVariables = Exact<{
  voteData: Vote;
}>;


export type RemoveVoteMutation = (
  { __typename?: 'Mutation' }
  & { removeVote?: Maybe<(
    { __typename?: 'VoteError' }
    & Pick<VoteError, 'message' | 'path'>
  )> }
);


export const ContinueWithFaceBookDocument = gql`
    mutation ContinueWithFaceBook($accessToken: String!) {
  loginFaceBook(accessToken: $accessToken) {
    path
    message
  }
}
    `;
export type ContinueWithFaceBookMutationFn = Apollo.MutationFunction<ContinueWithFaceBookMutation, ContinueWithFaceBookMutationVariables>;

/**
 * __useContinueWithFaceBookMutation__
 *
 * To run a mutation, you first call `useContinueWithFaceBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContinueWithFaceBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [continueWithFaceBookMutation, { data, loading, error }] = useContinueWithFaceBookMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useContinueWithFaceBookMutation(baseOptions?: Apollo.MutationHookOptions<ContinueWithFaceBookMutation, ContinueWithFaceBookMutationVariables>) {
        return Apollo.useMutation<ContinueWithFaceBookMutation, ContinueWithFaceBookMutationVariables>(ContinueWithFaceBookDocument, baseOptions);
      }
export type ContinueWithFaceBookMutationHookResult = ReturnType<typeof useContinueWithFaceBookMutation>;
export type ContinueWithFaceBookMutationResult = Apollo.MutationResult<ContinueWithFaceBookMutation>;
export type ContinueWithFaceBookMutationOptions = Apollo.BaseMutationOptions<ContinueWithFaceBookMutation, ContinueWithFaceBookMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($loginInput: UserLoginInput!) {
  login(loginInput: $loginInput) {
    path
    message
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutDocument = gql`
    query Logout {
  logout
}
    `;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
        return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, baseOptions);
      }
export function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
          return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, baseOptions);
        }
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const UserDocument = gql`
    query User {
  me {
    username
    displayName
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
export const GetPostsDocument = gql`
    query getPosts {
  getPosts {
    post_id
    post_text
    title
    link
    sub {
      name
    }
    vote_count
    images
    videos
    user {
      username
    }
    comment_count
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
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
export const AddVoteDocument = gql`
    mutation addVote($voteData: Vote!) {
  addVote(voteData: $voteData) {
    message
    path
  }
}
    `;
export type AddVoteMutationFn = Apollo.MutationFunction<AddVoteMutation, AddVoteMutationVariables>;

/**
 * __useAddVoteMutation__
 *
 * To run a mutation, you first call `useAddVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVoteMutation, { data, loading, error }] = useAddVoteMutation({
 *   variables: {
 *      voteData: // value for 'voteData'
 *   },
 * });
 */
export function useAddVoteMutation(baseOptions?: Apollo.MutationHookOptions<AddVoteMutation, AddVoteMutationVariables>) {
        return Apollo.useMutation<AddVoteMutation, AddVoteMutationVariables>(AddVoteDocument, baseOptions);
      }
export type AddVoteMutationHookResult = ReturnType<typeof useAddVoteMutation>;
export type AddVoteMutationResult = Apollo.MutationResult<AddVoteMutation>;
export type AddVoteMutationOptions = Apollo.BaseMutationOptions<AddVoteMutation, AddVoteMutationVariables>;
export const IsVotedDocument = gql`
    query isVoted($post_id: String!) {
  isVoted(post_id: $post_id)
}
    `;

/**
 * __useIsVotedQuery__
 *
 * To run a query within a React component, call `useIsVotedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsVotedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsVotedQuery({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useIsVotedQuery(baseOptions: Apollo.QueryHookOptions<IsVotedQuery, IsVotedQueryVariables>) {
        return Apollo.useQuery<IsVotedQuery, IsVotedQueryVariables>(IsVotedDocument, baseOptions);
      }
export function useIsVotedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsVotedQuery, IsVotedQueryVariables>) {
          return Apollo.useLazyQuery<IsVotedQuery, IsVotedQueryVariables>(IsVotedDocument, baseOptions);
        }
export type IsVotedQueryHookResult = ReturnType<typeof useIsVotedQuery>;
export type IsVotedLazyQueryHookResult = ReturnType<typeof useIsVotedLazyQuery>;
export type IsVotedQueryResult = Apollo.QueryResult<IsVotedQuery, IsVotedQueryVariables>;
export const RemoveVoteDocument = gql`
    mutation removeVote($voteData: Vote!) {
  removeVote(voteData: $voteData) {
    message
    path
  }
}
    `;
export type RemoveVoteMutationFn = Apollo.MutationFunction<RemoveVoteMutation, RemoveVoteMutationVariables>;

/**
 * __useRemoveVoteMutation__
 *
 * To run a mutation, you first call `useRemoveVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeVoteMutation, { data, loading, error }] = useRemoveVoteMutation({
 *   variables: {
 *      voteData: // value for 'voteData'
 *   },
 * });
 */
export function useRemoveVoteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveVoteMutation, RemoveVoteMutationVariables>) {
        return Apollo.useMutation<RemoveVoteMutation, RemoveVoteMutationVariables>(RemoveVoteDocument, baseOptions);
      }
export type RemoveVoteMutationHookResult = ReturnType<typeof useRemoveVoteMutation>;
export type RemoveVoteMutationResult = Apollo.MutationResult<RemoveVoteMutation>;
export type RemoveVoteMutationOptions = Apollo.BaseMutationOptions<RemoveVoteMutation, RemoveVoteMutationVariables>;