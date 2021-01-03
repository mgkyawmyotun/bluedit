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
export declare type VoteError = ErrorInterface & {
    __typename?: 'VoteError';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type ErrorInterface = {
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type Sub = {
    __typename?: 'Sub';
    sub_id: Scalars['String'];
    displayName: Scalars['String'];
    name: Scalars['String'];
    picture_url?: Maybe<Scalars['String']>;
};
export declare type SubError = ErrorInterface & {
    __typename?: 'SubError';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type User = {
    __typename?: 'User';
    displayName: Scalars['String'];
    username: Scalars['String'];
    email: Scalars['String'];
    picture_url?: Maybe<Scalars['String']>;
};
export declare type UserError = ErrorInterface & {
    __typename?: 'UserError';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type Post = PostInteface & {
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
export declare type PostInteface = {
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
export declare type PostError = ErrorInterface & {
    __typename?: 'PostError';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type Comment = {
    __typename?: 'Comment';
    comment_text: Scalars['String'];
    comment_id: Scalars['String'];
    user: User;
};
export declare type CommentError = ErrorInterface & {
    __typename?: 'CommentError';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    getPosts: Array<Post>;
    getComments?: Maybe<Array<Comment>>;
    me?: Maybe<User>;
    logout?: Maybe<Scalars['String']>;
    isEmailExists: Scalars['Boolean'];
    isVoted?: Maybe<VoteType>;
};
export declare type QueryGetCommentsArgs = {
    post_id: Scalars['String'];
};
export declare type QueryIsEmailExistsArgs = {
    email: Scalars['String'];
};
export declare type QueryIsVotedArgs = {
    post_id: Scalars['String'];
};
export declare enum VoteType {
    Up = "UP",
    Down = "DOWN"
}
export declare type Mutation = {
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
export declare type MutationCreatePostWithMarkDownArgs = {
    postData: PostInputMarkDown;
};
export declare type MutationCreatePostWithLinkArgs = {
    postData: PostInputLink;
};
export declare type MutationCreatePostWithImageArgs = {
    postData: PostInputImage;
};
export declare type MutationCreatePostWithVideoArgs = {
    postData: PostInputVideo;
};
export declare type MutationDeletePostArgs = {
    post_id: Scalars['String'];
};
export declare type MutationEditPostMarkDownArgs = {
    postEditInput: PostInputEditText;
};
export declare type MutationEditPostLinkArgs = {
    postEditInput: PostInputEditLink;
};
export declare type MutationCreateCommentArgs = {
    commentInput: CommentInput;
};
export declare type MutationEditCommentArgs = {
    editCommentInput: CommentEditInput;
};
export declare type MutationDeleteCommentArgs = {
    comment_id: Scalars['String'];
};
export declare type MutationCreateSubBlueditArgs = {
    subInput: SubInput;
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
export declare type MutationSendForgetPasswordLinkArgs = {
    email: Scalars['String'];
};
export declare type MutationForgetPasswordChangeArgs = {
    forgetPassowrdChangeInput: ForgetPasswordChange;
};
export declare type MutationAddVoteArgs = {
    voteData: Vote;
};
export declare type MutationRemoveVoteArgs = {
    voteData: Vote;
};
export declare type PostInputMarkDown = {
    title?: Maybe<Scalars['String']>;
    subbluedit?: Maybe<Scalars['String']>;
    post_text: Scalars['String'];
};
export declare type PostInputLink = {
    title?: Maybe<Scalars['String']>;
    subbluedit?: Maybe<Scalars['String']>;
    link: Scalars['String'];
};
export declare type PostInputImage = {
    title?: Maybe<Scalars['String']>;
    subbluedit?: Maybe<Scalars['String']>;
    images: Array<Scalars['String']>;
};
export declare type PostInputVideo = {
    title?: Maybe<Scalars['String']>;
    subbluedit?: Maybe<Scalars['String']>;
    videos?: Maybe<Array<Scalars['String']>>;
};
export declare type PostInputEditText = {
    post_id?: Maybe<Scalars['String']>;
    post_text: Scalars['String'];
};
export declare type PostInputEditLink = {
    post_id?: Maybe<Scalars['String']>;
    post_link: Scalars['String'];
};
export declare type CommentInput = {
    comment_text: Scalars['String'];
    post_id: Scalars['String'];
};
export declare type CommentEditInput = {
    comment_text: Scalars['String'];
    comment_id: Scalars['String'];
};
export declare type SubInput = {
    displayName: Scalars['String'];
    name: Scalars['String'];
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
export declare type ForgetPasswordChange = {
    newPassword: Scalars['String'];
    key: Scalars['String'];
};
export declare type Vote = {
    voteType: VoteType;
    post_id: Scalars['String'];
};
export declare type Subscription = {
    __typename?: 'Subscription';
    voteAdded: Scalars['Float'];
};
export declare type SubscriptionVoteAddedArgs = {
    post_id: Scalars['String'];
};
export declare type ContinueWithFaceBookMutationVariables = Exact<{
    accessToken: Scalars['String'];
}>;
export declare type ContinueWithFaceBookMutation = ({
    __typename?: 'Mutation';
} & {
    loginFaceBook?: Maybe<({
        __typename?: 'UserError';
    } & Pick<UserError, 'path' | 'message'>)>;
});
export declare type LoginUserMutationVariables = Exact<{
    loginInput: UserLoginInput;
}>;
export declare type LoginUserMutation = ({
    __typename?: 'Mutation';
} & {
    login?: Maybe<({
        __typename?: 'UserError';
    } & Pick<UserError, 'path' | 'message'>)>;
});
export declare type LogoutQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type LogoutQuery = ({
    __typename?: 'Query';
} & Pick<Query, 'logout'>);
export declare type UserQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type UserQuery = ({
    __typename?: 'Query';
} & {
    me?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'username' | 'displayName' | 'email'>)>;
});
export declare type GetPostsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetPostsQuery = ({
    __typename?: 'Query';
} & {
    getPosts: Array<({
        __typename?: 'Post';
    } & Pick<Post, 'post_id' | 'post_text' | 'title' | 'link' | 'vote_count' | 'images' | 'videos' | 'comment_count'> & {
        sub?: Maybe<({
            __typename?: 'Sub';
        } & Pick<Sub, 'name'>)>;
        user: ({
            __typename?: 'User';
        } & Pick<User, 'username'>);
    })>;
});
export declare type CreateUserMutationVariables = Exact<{
    userInput: UserInputType;
}>;
export declare type CreateUserMutation = ({
    __typename?: 'Mutation';
} & {
    register?: Maybe<({
        __typename?: 'UserError';
    } & Pick<UserError, 'message' | 'path'>)>;
});
export declare type CheckEmailQueryVariables = Exact<{
    email: Scalars['String'];
}>;
export declare type CheckEmailQuery = ({
    __typename?: 'Query';
} & Pick<Query, 'isEmailExists'>);
export declare type AddVoteMutationVariables = Exact<{
    voteData: Vote;
}>;
export declare type AddVoteMutation = ({
    __typename?: 'Mutation';
} & {
    addVote?: Maybe<({
        __typename?: 'VoteError';
    } & Pick<VoteError, 'message' | 'path'>)>;
});
export declare type IsVotedQueryVariables = Exact<{
    post_id: Scalars['String'];
}>;
export declare type IsVotedQuery = ({
    __typename?: 'Query';
} & Pick<Query, 'isVoted'>);
export declare type RemoveVoteMutationVariables = Exact<{
    voteData: Vote;
}>;
export declare type RemoveVoteMutation = ({
    __typename?: 'Mutation';
} & {
    removeVote?: Maybe<({
        __typename?: 'VoteError';
    } & Pick<VoteError, 'message' | 'path'>)>;
});
export declare const ContinueWithFaceBookDocument: Apollo.DocumentNode;
export declare type ContinueWithFaceBookMutationFn = Apollo.MutationFunction<ContinueWithFaceBookMutation, ContinueWithFaceBookMutationVariables>;
export declare function useContinueWithFaceBookMutation(baseOptions?: Apollo.MutationHookOptions<ContinueWithFaceBookMutation, ContinueWithFaceBookMutationVariables>): Apollo.MutationTuple<ContinueWithFaceBookMutation, Exact<{
    accessToken: string;
}>>;
export declare type ContinueWithFaceBookMutationHookResult = ReturnType<typeof useContinueWithFaceBookMutation>;
export declare type ContinueWithFaceBookMutationResult = Apollo.MutationResult<ContinueWithFaceBookMutation>;
export declare type ContinueWithFaceBookMutationOptions = Apollo.BaseMutationOptions<ContinueWithFaceBookMutation, ContinueWithFaceBookMutationVariables>;
export declare const LoginUserDocument: Apollo.DocumentNode;
export declare type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export declare function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>): Apollo.MutationTuple<LoginUserMutation, Exact<{
    loginInput: UserLoginInput;
}>>;
export declare type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export declare type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export declare type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export declare const LogoutDocument: Apollo.DocumentNode;
export declare function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>): Apollo.QueryResult<LogoutQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>): Apollo.QueryTuple<LogoutQuery, Exact<{
    [key: string]: never;
}>>;
export declare type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export declare type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export declare type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
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
export declare const GetPostsDocument: Apollo.DocumentNode;
export declare function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>): Apollo.QueryResult<GetPostsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>): Apollo.QueryTuple<GetPostsQuery, Exact<{
    [key: string]: never;
}>>;
export declare type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export declare type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export declare type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
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
export declare const AddVoteDocument: Apollo.DocumentNode;
export declare type AddVoteMutationFn = Apollo.MutationFunction<AddVoteMutation, AddVoteMutationVariables>;
export declare function useAddVoteMutation(baseOptions?: Apollo.MutationHookOptions<AddVoteMutation, AddVoteMutationVariables>): Apollo.MutationTuple<AddVoteMutation, Exact<{
    voteData: Vote;
}>>;
export declare type AddVoteMutationHookResult = ReturnType<typeof useAddVoteMutation>;
export declare type AddVoteMutationResult = Apollo.MutationResult<AddVoteMutation>;
export declare type AddVoteMutationOptions = Apollo.BaseMutationOptions<AddVoteMutation, AddVoteMutationVariables>;
export declare const IsVotedDocument: Apollo.DocumentNode;
export declare function useIsVotedQuery(baseOptions: Apollo.QueryHookOptions<IsVotedQuery, IsVotedQueryVariables>): Apollo.QueryResult<IsVotedQuery, Exact<{
    post_id: string;
}>>;
export declare function useIsVotedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsVotedQuery, IsVotedQueryVariables>): Apollo.QueryTuple<IsVotedQuery, Exact<{
    post_id: string;
}>>;
export declare type IsVotedQueryHookResult = ReturnType<typeof useIsVotedQuery>;
export declare type IsVotedLazyQueryHookResult = ReturnType<typeof useIsVotedLazyQuery>;
export declare type IsVotedQueryResult = Apollo.QueryResult<IsVotedQuery, IsVotedQueryVariables>;
export declare const RemoveVoteDocument: Apollo.DocumentNode;
export declare type RemoveVoteMutationFn = Apollo.MutationFunction<RemoveVoteMutation, RemoveVoteMutationVariables>;
export declare function useRemoveVoteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveVoteMutation, RemoveVoteMutationVariables>): Apollo.MutationTuple<RemoveVoteMutation, Exact<{
    voteData: Vote;
}>>;
export declare type RemoveVoteMutationHookResult = ReturnType<typeof useRemoveVoteMutation>;
export declare type RemoveVoteMutationResult = Apollo.MutationResult<RemoveVoteMutation>;
export declare type RemoveVoteMutationOptions = Apollo.BaseMutationOptions<RemoveVoteMutation, RemoveVoteMutationVariables>;
//# sourceMappingURL=graphql.d.ts.map