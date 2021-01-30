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
  displayName: Scalars['String'];
  name: Scalars['String'];
  picture_url?: Maybe<Scalars['String']>;
};

export type SubError = ErrorInterface & {
  __typename?: 'SubError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type JoinSub = {
  __typename?: 'JoinSub';
  sub: Sub;
};

export type User = {
  __typename?: 'User';
  displayName: Scalars['String'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
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
  created_at: Scalars['String'];
};

export type CommentUser = {
  __typename?: 'CommentUser';
  comment_text: Scalars['String'];
  comment_id: Scalars['String'];
  created_at: Scalars['String'];
  post_id: Scalars['String'];
};

export type CommentError = ErrorInterface & {
  __typename?: 'CommentError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getPosts: Array<Post>;
  getPost?: Maybe<Post>;
  getPostsByUser?: Maybe<Array<Post>>;
  getPostsBySub?: Maybe<Array<Post>>;
  getComments?: Maybe<Array<Comment>>;
  getCommentsByUser?: Maybe<Array<CommentUser>>;
  getJoinSub?: Maybe<Array<JoinSub>>;
  getUserJoinedSub?: Maybe<Array<Sub>>;
  getSub?: Maybe<Sub>;
  me?: Maybe<User>;
  /** email can be null  */
  getUser?: Maybe<User>;
  logout?: Maybe<Scalars['String']>;
  isEmailExists: Scalars['Boolean'];
  isVoted?: Maybe<VoteType>;
  getVoteCountUser: Scalars['Float'];
};


export type QueryGetPostArgs = {
  post_id: Scalars['String'];
};


export type QueryGetPostsByUserArgs = {
  username: Scalars['String'];
};


export type QueryGetPostsBySubArgs = {
  subname: Scalars['String'];
};


export type QueryGetCommentsArgs = {
  post_id: Scalars['String'];
};


export type QueryGetCommentsByUserArgs = {
  username: Scalars['String'];
};


export type QueryGetUserJoinedSubArgs = {
  username: Scalars['String'];
};


export type QueryGetSubArgs = {
  subName: Scalars['String'];
};


export type QueryGetUserArgs = {
  username: Scalars['String'];
};


export type QueryIsEmailExistsArgs = {
  email: Scalars['String'];
};


export type QueryIsVotedArgs = {
  post_id: Scalars['String'];
};


export type QueryGetVoteCountUserArgs = {
  username: Scalars['String'];
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
  joinSubBluedit?: Maybe<SubError>;
  leaveSub?: Maybe<SubError>;
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


export type MutationJoinSubBlueditArgs = {
  subName: Scalars['String'];
};


export type MutationLeaveSubArgs = {
  subName: Scalars['String'];
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
  commentAdded: Scalars['Float'];
  newCommentAdded: Comment;
  voteAdded: Scalars['Float'];
};


export type SubscriptionCommentAddedArgs = {
  post_id: Scalars['String'];
};


export type SubscriptionNewCommentAddedArgs = {
  post_id: Scalars['String'];
};


export type SubscriptionVoteAddedArgs = {
  post_id: Scalars['String'];
};

export type CreateCommentMutationVariables = Exact<{
  commentInput: CommentInput;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment?: Maybe<(
    { __typename?: 'CommentError' }
    & Pick<CommentError, 'path' | 'message'>
  )> }
);

export type GetCommentsQueryVariables = Exact<{
  post_id: Scalars['String'];
}>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { getComments?: Maybe<Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'comment_text' | 'comment_id' | 'created_at'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'displayName' | 'username' | 'picture_url'>
    ) }
  )>> }
);

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
    & Pick<User, 'username' | 'displayName' | 'email' | 'picture_url'>
  )> }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { getPosts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'post_id' | 'post_text' | 'title' | 'link' | 'vote_count' | 'images' | 'videos' | 'comment_count' | 'created_at'>
    & { sub?: Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'name' | 'picture_url'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'picture_url'>
    ) }
  )> }
);

export type GetPostQueryVariables = Exact<{
  post_id: Scalars['String'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { getPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'post_id' | 'post_text' | 'title' | 'link' | 'vote_count' | 'images' | 'videos' | 'comment_count' | 'created_at'>
    & { sub?: Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'name' | 'picture_url'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'picture_url'>
    ) }
  )> }
);

export type JoinSubQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type JoinSubQuery = (
  { __typename?: 'Query' }
  & { getUserJoinedSub?: Maybe<Array<(
    { __typename?: 'Sub' }
    & Pick<Sub, 'displayName' | 'name' | 'picture_url'>
  )>> }
);

export type GetPostsByUserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetPostsByUserQuery = (
  { __typename?: 'Query' }
  & { getPostsByUser?: Maybe<Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'post_id' | 'post_text' | 'title' | 'link' | 'vote_count' | 'images' | 'videos' | 'comment_count' | 'created_at'>
    & { sub?: Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'name' | 'picture_url'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'picture_url'>
    ) }
  )>> }
);

export type GetCommentsByUserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetCommentsByUserQuery = (
  { __typename?: 'Query' }
  & { getCommentsByUser?: Maybe<Array<(
    { __typename?: 'CommentUser' }
    & Pick<CommentUser, 'comment_text' | 'comment_id' | 'created_at' | 'post_id'>
  )>> }
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

export type GetJoinedSubQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJoinedSubQuery = (
  { __typename?: 'Query' }
  & { getJoinSub?: Maybe<Array<(
    { __typename?: 'JoinSub' }
    & { sub: (
      { __typename?: 'Sub' }
      & Pick<Sub, 'displayName' | 'name' | 'picture_url'>
    ) }
  )>> }
);

export type JoinSubBlueEditMutationVariables = Exact<{
  subName: Scalars['String'];
}>;


export type JoinSubBlueEditMutation = (
  { __typename?: 'Mutation' }
  & { joinSubBluedit?: Maybe<(
    { __typename?: 'SubError' }
    & Pick<SubError, 'path' | 'message'>
  )> }
);

export type LeaveSubMutationVariables = Exact<{
  subName: Scalars['String'];
}>;


export type LeaveSubMutation = (
  { __typename?: 'Mutation' }
  & { leaveSub?: Maybe<(
    { __typename?: 'SubError' }
    & Pick<SubError, 'path' | 'message'>
  )> }
);

export type CreatePostWithMarkDownMutationVariables = Exact<{
  postData: PostInputMarkDown;
}>;


export type CreatePostWithMarkDownMutation = (
  { __typename?: 'Mutation' }
  & { createPostWithMarkDown?: Maybe<(
    { __typename?: 'PostError' }
    & Pick<PostError, 'path' | 'message'>
  )> }
);

export type CreatePostWithLinkMutationVariables = Exact<{
  postData: PostInputLink;
}>;


export type CreatePostWithLinkMutation = (
  { __typename?: 'Mutation' }
  & { createPostWithLink?: Maybe<(
    { __typename?: 'PostError' }
    & Pick<PostError, 'path' | 'message'>
  )> }
);

export type CreatePostWithImageMutationVariables = Exact<{
  postData: PostInputImage;
}>;


export type CreatePostWithImageMutation = (
  { __typename?: 'Mutation' }
  & { createPostWithImage?: Maybe<(
    { __typename?: 'PostError' }
    & Pick<PostError, 'path' | 'message'>
  )> }
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


export const CreateCommentDocument = gql`
    mutation createComment($commentInput: CommentInput!) {
  createComment(commentInput: $commentInput) {
    path
    message
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      commentInput: // value for 'commentInput'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const GetCommentsDocument = gql`
    query getComments($post_id: String!) {
  getComments(post_id: $post_id) {
    comment_text
    comment_id
    user {
      displayName
      username
      picture_url
    }
    created_at
  }
}
    `;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, baseOptions);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, baseOptions);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
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
    picture_url
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
      picture_url
    }
    vote_count
    images
    videos
    user {
      username
      picture_url
    }
    comment_count
    created_at
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
export const GetPostDocument = gql`
    query getPost($post_id: String!) {
  getPost(post_id: $post_id) {
    post_id
    post_text
    title
    link
    sub {
      name
      picture_url
    }
    vote_count
    images
    videos
    user {
      username
      picture_url
    }
    comment_count
    created_at
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const JoinSubDocument = gql`
    query JoinSub($username: String!) {
  getUserJoinedSub(username: $username) {
    displayName
    name
    picture_url
  }
}
    `;

/**
 * __useJoinSubQuery__
 *
 * To run a query within a React component, call `useJoinSubQuery` and pass it any options that fit your needs.
 * When your component renders, `useJoinSubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJoinSubQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useJoinSubQuery(baseOptions: Apollo.QueryHookOptions<JoinSubQuery, JoinSubQueryVariables>) {
        return Apollo.useQuery<JoinSubQuery, JoinSubQueryVariables>(JoinSubDocument, baseOptions);
      }
export function useJoinSubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JoinSubQuery, JoinSubQueryVariables>) {
          return Apollo.useLazyQuery<JoinSubQuery, JoinSubQueryVariables>(JoinSubDocument, baseOptions);
        }
export type JoinSubQueryHookResult = ReturnType<typeof useJoinSubQuery>;
export type JoinSubLazyQueryHookResult = ReturnType<typeof useJoinSubLazyQuery>;
export type JoinSubQueryResult = Apollo.QueryResult<JoinSubQuery, JoinSubQueryVariables>;
export const GetPostsByUserDocument = gql`
    query getPostsByUser($username: String!) {
  getPostsByUser(username: $username) {
    post_id
    post_text
    title
    link
    sub {
      name
      picture_url
    }
    vote_count
    images
    videos
    user {
      username
      picture_url
    }
    comment_count
    created_at
  }
}
    `;

/**
 * __useGetPostsByUserQuery__
 *
 * To run a query within a React component, call `useGetPostsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsByUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetPostsByUserQuery(baseOptions: Apollo.QueryHookOptions<GetPostsByUserQuery, GetPostsByUserQueryVariables>) {
        return Apollo.useQuery<GetPostsByUserQuery, GetPostsByUserQueryVariables>(GetPostsByUserDocument, baseOptions);
      }
export function useGetPostsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsByUserQuery, GetPostsByUserQueryVariables>) {
          return Apollo.useLazyQuery<GetPostsByUserQuery, GetPostsByUserQueryVariables>(GetPostsByUserDocument, baseOptions);
        }
export type GetPostsByUserQueryHookResult = ReturnType<typeof useGetPostsByUserQuery>;
export type GetPostsByUserLazyQueryHookResult = ReturnType<typeof useGetPostsByUserLazyQuery>;
export type GetPostsByUserQueryResult = Apollo.QueryResult<GetPostsByUserQuery, GetPostsByUserQueryVariables>;
export const GetCommentsByUserDocument = gql`
    query getCommentsByUser($username: String!) {
  getCommentsByUser(username: $username) {
    comment_text
    comment_id
    created_at
    post_id
  }
}
    `;

/**
 * __useGetCommentsByUserQuery__
 *
 * To run a query within a React component, call `useGetCommentsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsByUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetCommentsByUserQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsByUserQuery, GetCommentsByUserQueryVariables>) {
        return Apollo.useQuery<GetCommentsByUserQuery, GetCommentsByUserQueryVariables>(GetCommentsByUserDocument, baseOptions);
      }
export function useGetCommentsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsByUserQuery, GetCommentsByUserQueryVariables>) {
          return Apollo.useLazyQuery<GetCommentsByUserQuery, GetCommentsByUserQueryVariables>(GetCommentsByUserDocument, baseOptions);
        }
export type GetCommentsByUserQueryHookResult = ReturnType<typeof useGetCommentsByUserQuery>;
export type GetCommentsByUserLazyQueryHookResult = ReturnType<typeof useGetCommentsByUserLazyQuery>;
export type GetCommentsByUserQueryResult = Apollo.QueryResult<GetCommentsByUserQuery, GetCommentsByUserQueryVariables>;
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
export const GetJoinedSubDocument = gql`
    query getJoinedSub {
  getJoinSub {
    sub {
      displayName
      name
      picture_url
    }
  }
}
    `;

/**
 * __useGetJoinedSubQuery__
 *
 * To run a query within a React component, call `useGetJoinedSubQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJoinedSubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJoinedSubQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJoinedSubQuery(baseOptions?: Apollo.QueryHookOptions<GetJoinedSubQuery, GetJoinedSubQueryVariables>) {
        return Apollo.useQuery<GetJoinedSubQuery, GetJoinedSubQueryVariables>(GetJoinedSubDocument, baseOptions);
      }
export function useGetJoinedSubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJoinedSubQuery, GetJoinedSubQueryVariables>) {
          return Apollo.useLazyQuery<GetJoinedSubQuery, GetJoinedSubQueryVariables>(GetJoinedSubDocument, baseOptions);
        }
export type GetJoinedSubQueryHookResult = ReturnType<typeof useGetJoinedSubQuery>;
export type GetJoinedSubLazyQueryHookResult = ReturnType<typeof useGetJoinedSubLazyQuery>;
export type GetJoinedSubQueryResult = Apollo.QueryResult<GetJoinedSubQuery, GetJoinedSubQueryVariables>;
export const JoinSubBlueEditDocument = gql`
    mutation joinSubBlueEdit($subName: String!) {
  joinSubBluedit(subName: $subName) {
    path
    message
  }
}
    `;
export type JoinSubBlueEditMutationFn = Apollo.MutationFunction<JoinSubBlueEditMutation, JoinSubBlueEditMutationVariables>;

/**
 * __useJoinSubBlueEditMutation__
 *
 * To run a mutation, you first call `useJoinSubBlueEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinSubBlueEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinSubBlueEditMutation, { data, loading, error }] = useJoinSubBlueEditMutation({
 *   variables: {
 *      subName: // value for 'subName'
 *   },
 * });
 */
export function useJoinSubBlueEditMutation(baseOptions?: Apollo.MutationHookOptions<JoinSubBlueEditMutation, JoinSubBlueEditMutationVariables>) {
        return Apollo.useMutation<JoinSubBlueEditMutation, JoinSubBlueEditMutationVariables>(JoinSubBlueEditDocument, baseOptions);
      }
export type JoinSubBlueEditMutationHookResult = ReturnType<typeof useJoinSubBlueEditMutation>;
export type JoinSubBlueEditMutationResult = Apollo.MutationResult<JoinSubBlueEditMutation>;
export type JoinSubBlueEditMutationOptions = Apollo.BaseMutationOptions<JoinSubBlueEditMutation, JoinSubBlueEditMutationVariables>;
export const LeaveSubDocument = gql`
    mutation leaveSub($subName: String!) {
  leaveSub(subName: $subName) {
    path
    message
  }
}
    `;
export type LeaveSubMutationFn = Apollo.MutationFunction<LeaveSubMutation, LeaveSubMutationVariables>;

/**
 * __useLeaveSubMutation__
 *
 * To run a mutation, you first call `useLeaveSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveSubMutation, { data, loading, error }] = useLeaveSubMutation({
 *   variables: {
 *      subName: // value for 'subName'
 *   },
 * });
 */
export function useLeaveSubMutation(baseOptions?: Apollo.MutationHookOptions<LeaveSubMutation, LeaveSubMutationVariables>) {
        return Apollo.useMutation<LeaveSubMutation, LeaveSubMutationVariables>(LeaveSubDocument, baseOptions);
      }
export type LeaveSubMutationHookResult = ReturnType<typeof useLeaveSubMutation>;
export type LeaveSubMutationResult = Apollo.MutationResult<LeaveSubMutation>;
export type LeaveSubMutationOptions = Apollo.BaseMutationOptions<LeaveSubMutation, LeaveSubMutationVariables>;
export const CreatePostWithMarkDownDocument = gql`
    mutation createPostWithMarkDown($postData: PostInputMarkDown!) {
  createPostWithMarkDown(postData: $postData) {
    path
    message
  }
}
    `;
export type CreatePostWithMarkDownMutationFn = Apollo.MutationFunction<CreatePostWithMarkDownMutation, CreatePostWithMarkDownMutationVariables>;

/**
 * __useCreatePostWithMarkDownMutation__
 *
 * To run a mutation, you first call `useCreatePostWithMarkDownMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostWithMarkDownMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostWithMarkDownMutation, { data, loading, error }] = useCreatePostWithMarkDownMutation({
 *   variables: {
 *      postData: // value for 'postData'
 *   },
 * });
 */
export function useCreatePostWithMarkDownMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostWithMarkDownMutation, CreatePostWithMarkDownMutationVariables>) {
        return Apollo.useMutation<CreatePostWithMarkDownMutation, CreatePostWithMarkDownMutationVariables>(CreatePostWithMarkDownDocument, baseOptions);
      }
export type CreatePostWithMarkDownMutationHookResult = ReturnType<typeof useCreatePostWithMarkDownMutation>;
export type CreatePostWithMarkDownMutationResult = Apollo.MutationResult<CreatePostWithMarkDownMutation>;
export type CreatePostWithMarkDownMutationOptions = Apollo.BaseMutationOptions<CreatePostWithMarkDownMutation, CreatePostWithMarkDownMutationVariables>;
export const CreatePostWithLinkDocument = gql`
    mutation createPostWithLink($postData: PostInputLink!) {
  createPostWithLink(postData: $postData) {
    path
    message
  }
}
    `;
export type CreatePostWithLinkMutationFn = Apollo.MutationFunction<CreatePostWithLinkMutation, CreatePostWithLinkMutationVariables>;

/**
 * __useCreatePostWithLinkMutation__
 *
 * To run a mutation, you first call `useCreatePostWithLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostWithLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostWithLinkMutation, { data, loading, error }] = useCreatePostWithLinkMutation({
 *   variables: {
 *      postData: // value for 'postData'
 *   },
 * });
 */
export function useCreatePostWithLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostWithLinkMutation, CreatePostWithLinkMutationVariables>) {
        return Apollo.useMutation<CreatePostWithLinkMutation, CreatePostWithLinkMutationVariables>(CreatePostWithLinkDocument, baseOptions);
      }
export type CreatePostWithLinkMutationHookResult = ReturnType<typeof useCreatePostWithLinkMutation>;
export type CreatePostWithLinkMutationResult = Apollo.MutationResult<CreatePostWithLinkMutation>;
export type CreatePostWithLinkMutationOptions = Apollo.BaseMutationOptions<CreatePostWithLinkMutation, CreatePostWithLinkMutationVariables>;
export const CreatePostWithImageDocument = gql`
    mutation createPostWithImage($postData: PostInputImage!) {
  createPostWithImage(postData: $postData) {
    path
    message
  }
}
    `;
export type CreatePostWithImageMutationFn = Apollo.MutationFunction<CreatePostWithImageMutation, CreatePostWithImageMutationVariables>;

/**
 * __useCreatePostWithImageMutation__
 *
 * To run a mutation, you first call `useCreatePostWithImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostWithImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostWithImageMutation, { data, loading, error }] = useCreatePostWithImageMutation({
 *   variables: {
 *      postData: // value for 'postData'
 *   },
 * });
 */
export function useCreatePostWithImageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostWithImageMutation, CreatePostWithImageMutationVariables>) {
        return Apollo.useMutation<CreatePostWithImageMutation, CreatePostWithImageMutationVariables>(CreatePostWithImageDocument, baseOptions);
      }
export type CreatePostWithImageMutationHookResult = ReturnType<typeof useCreatePostWithImageMutation>;
export type CreatePostWithImageMutationResult = Apollo.MutationResult<CreatePostWithImageMutation>;
export type CreatePostWithImageMutationOptions = Apollo.BaseMutationOptions<CreatePostWithImageMutation, CreatePostWithImageMutationVariables>;
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