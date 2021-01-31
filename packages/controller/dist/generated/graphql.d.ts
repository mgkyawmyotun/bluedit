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
    displayName: Scalars['String'];
    name: Scalars['String'];
    picture_url?: Maybe<Scalars['String']>;
};
export declare type SubError = ErrorInterface & {
    __typename?: 'SubError';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type JoinSub = {
    __typename?: 'JoinSub';
    sub: Sub;
};
export declare type User = {
    __typename?: 'User';
    displayName: Scalars['String'];
    username: Scalars['String'];
    email?: Maybe<Scalars['String']>;
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
    created_at: Scalars['String'];
};
export declare type CommentUser = {
    __typename?: 'CommentUser';
    comment_text: Scalars['String'];
    comment_id: Scalars['String'];
    created_at: Scalars['String'];
    post_id: Scalars['String'];
};
export declare type CommentError = ErrorInterface & {
    __typename?: 'CommentError';
    path: Scalars['String'];
    message: Scalars['String'];
};
export declare type Query = {
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
    isJoin: Scalars['Boolean'];
    getSubs?: Maybe<Array<Sub>>;
    me?: Maybe<User>;
    getUser?: Maybe<User>;
    logout?: Maybe<Scalars['String']>;
    isEmailExists: Scalars['Boolean'];
    isVoted?: Maybe<VoteType>;
    getVoteCountUser: Scalars['Float'];
};
export declare type QueryGetPostArgs = {
    post_id: Scalars['String'];
};
export declare type QueryGetPostsByUserArgs = {
    username: Scalars['String'];
};
export declare type QueryGetPostsBySubArgs = {
    subname: Scalars['String'];
};
export declare type QueryGetCommentsArgs = {
    post_id: Scalars['String'];
};
export declare type QueryGetCommentsByUserArgs = {
    username: Scalars['String'];
};
export declare type QueryGetUserJoinedSubArgs = {
    username: Scalars['String'];
};
export declare type QueryGetSubArgs = {
    subName: Scalars['String'];
};
export declare type QueryIsJoinArgs = {
    subName: Scalars['String'];
};
export declare type QueryGetSubsArgs = {
    subInput: SubSearchInput;
};
export declare type QueryGetUserArgs = {
    username: Scalars['String'];
};
export declare type QueryIsEmailExistsArgs = {
    email: Scalars['String'];
};
export declare type QueryIsVotedArgs = {
    post_id: Scalars['String'];
};
export declare type QueryGetVoteCountUserArgs = {
    username: Scalars['String'];
};
export declare type SubSearchInput = {
    search_value: Scalars['String'];
    limit?: Maybe<Scalars['Float']>;
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
export declare type MutationJoinSubBlueditArgs = {
    subName: Scalars['String'];
};
export declare type MutationLeaveSubArgs = {
    subName: Scalars['String'];
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
    commentAdded: Scalars['Float'];
    newCommentAdded: Comment;
    voteAdded: Scalars['Float'];
};
export declare type SubscriptionCommentAddedArgs = {
    post_id: Scalars['String'];
};
export declare type SubscriptionNewCommentAddedArgs = {
    post_id: Scalars['String'];
};
export declare type SubscriptionVoteAddedArgs = {
    post_id: Scalars['String'];
};
export declare type CreateCommentMutationVariables = Exact<{
    commentInput: CommentInput;
}>;
export declare type CreateCommentMutation = ({
    __typename?: 'Mutation';
} & {
    createComment?: Maybe<({
        __typename?: 'CommentError';
    } & Pick<CommentError, 'path' | 'message'>)>;
});
export declare type GetCommentsQueryVariables = Exact<{
    post_id: Scalars['String'];
}>;
export declare type GetCommentsQuery = ({
    __typename?: 'Query';
} & {
    getComments?: Maybe<Array<({
        __typename?: 'Comment';
    } & Pick<Comment, 'comment_text' | 'comment_id' | 'created_at'> & {
        user: ({
            __typename?: 'User';
        } & Pick<User, 'displayName' | 'username' | 'picture_url'>);
    })>>;
});
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
    } & Pick<User, 'username' | 'displayName' | 'email' | 'picture_url'>)>;
});
export declare type GetPostsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetPostsQuery = ({
    __typename?: 'Query';
} & {
    getPosts: Array<({
        __typename?: 'Post';
    } & Pick<Post, 'post_id' | 'post_text' | 'title' | 'link' | 'vote_count' | 'images' | 'videos' | 'comment_count' | 'created_at'> & {
        sub?: Maybe<({
            __typename?: 'Sub';
        } & Pick<Sub, 'name' | 'picture_url'>)>;
        user: ({
            __typename?: 'User';
        } & Pick<User, 'username' | 'picture_url'>);
    })>;
});
export declare type GetPostQueryVariables = Exact<{
    post_id: Scalars['String'];
}>;
export declare type GetPostQuery = ({
    __typename?: 'Query';
} & {
    getPost?: Maybe<({
        __typename?: 'Post';
    } & Pick<Post, 'post_id' | 'post_text' | 'title' | 'link' | 'vote_count' | 'images' | 'videos' | 'comment_count' | 'created_at'> & {
        sub?: Maybe<({
            __typename?: 'Sub';
        } & Pick<Sub, 'name' | 'picture_url'>)>;
        user: ({
            __typename?: 'User';
        } & Pick<User, 'username' | 'picture_url'>);
    })>;
});
export declare type JoinSubQueryVariables = Exact<{
    username: Scalars['String'];
}>;
export declare type JoinSubQuery = ({
    __typename?: 'Query';
} & {
    getUserJoinedSub?: Maybe<Array<({
        __typename?: 'Sub';
    } & Pick<Sub, 'displayName' | 'name' | 'picture_url'>)>>;
});
export declare type GetPostsByUserQueryVariables = Exact<{
    username: Scalars['String'];
}>;
export declare type GetPostsByUserQuery = ({
    __typename?: 'Query';
} & {
    getPostsByUser?: Maybe<Array<({
        __typename?: 'Post';
    } & Pick<Post, 'post_id' | 'post_text' | 'title' | 'link' | 'vote_count' | 'images' | 'videos' | 'comment_count' | 'created_at'> & {
        sub?: Maybe<({
            __typename?: 'Sub';
        } & Pick<Sub, 'name' | 'picture_url'>)>;
        user: ({
            __typename?: 'User';
        } & Pick<User, 'username' | 'picture_url'>);
    })>>;
});
export declare type GetCommentsByUserQueryVariables = Exact<{
    username: Scalars['String'];
}>;
export declare type GetCommentsByUserQuery = ({
    __typename?: 'Query';
} & {
    getCommentsByUser?: Maybe<Array<({
        __typename?: 'CommentUser';
    } & Pick<CommentUser, 'comment_text' | 'comment_id' | 'created_at' | 'post_id'>)>>;
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
export declare type GetSearchSubsQueryVariables = Exact<{
    subInput: SubSearchInput;
}>;
export declare type GetSearchSubsQuery = ({
    __typename?: 'Query';
} & {
    getSubs?: Maybe<Array<({
        __typename?: 'Sub';
    } & Pick<Sub, 'displayName' | 'name' | 'picture_url'>)>>;
});
export declare type GetJoinedSubQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetJoinedSubQuery = ({
    __typename?: 'Query';
} & {
    getJoinSub?: Maybe<Array<({
        __typename?: 'JoinSub';
    } & {
        sub: ({
            __typename?: 'Sub';
        } & Pick<Sub, 'displayName' | 'name' | 'picture_url'>);
    })>>;
});
export declare type JoinSubBlueEditMutationVariables = Exact<{
    subName: Scalars['String'];
}>;
export declare type JoinSubBlueEditMutation = ({
    __typename?: 'Mutation';
} & {
    joinSubBluedit?: Maybe<({
        __typename?: 'SubError';
    } & Pick<SubError, 'path' | 'message'>)>;
});
export declare type LeaveSubMutationVariables = Exact<{
    subName: Scalars['String'];
}>;
export declare type LeaveSubMutation = ({
    __typename?: 'Mutation';
} & {
    leaveSub?: Maybe<({
        __typename?: 'SubError';
    } & Pick<SubError, 'path' | 'message'>)>;
});
export declare type IsJoinQueryVariables = Exact<{
    subName: Scalars['String'];
}>;
export declare type IsJoinQuery = ({
    __typename?: 'Query';
} & Pick<Query, 'isJoin'>);
export declare type CreatePostWithMarkDownMutationVariables = Exact<{
    postData: PostInputMarkDown;
}>;
export declare type CreatePostWithMarkDownMutation = ({
    __typename?: 'Mutation';
} & {
    createPostWithMarkDown?: Maybe<({
        __typename?: 'PostError';
    } & Pick<PostError, 'path' | 'message'>)>;
});
export declare type CreatePostWithLinkMutationVariables = Exact<{
    postData: PostInputLink;
}>;
export declare type CreatePostWithLinkMutation = ({
    __typename?: 'Mutation';
} & {
    createPostWithLink?: Maybe<({
        __typename?: 'PostError';
    } & Pick<PostError, 'path' | 'message'>)>;
});
export declare type CreatePostWithImageMutationVariables = Exact<{
    postData: PostInputImage;
}>;
export declare type CreatePostWithImageMutation = ({
    __typename?: 'Mutation';
} & {
    createPostWithImage?: Maybe<({
        __typename?: 'PostError';
    } & Pick<PostError, 'path' | 'message'>)>;
});
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
export declare const CreateCommentDocument: Apollo.DocumentNode;
export declare type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;
export declare function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>): Apollo.MutationTuple<CreateCommentMutation, Exact<{
    commentInput: CommentInput;
}>>;
export declare type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export declare type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export declare type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export declare const GetCommentsDocument: Apollo.DocumentNode;
export declare function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>): Apollo.QueryResult<GetCommentsQuery, Exact<{
    post_id: string;
}>>;
export declare function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>): Apollo.QueryTuple<GetCommentsQuery, Exact<{
    post_id: string;
}>>;
export declare type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export declare type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export declare type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
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
export declare const GetPostDocument: Apollo.DocumentNode;
export declare function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>): Apollo.QueryResult<GetPostQuery, Exact<{
    post_id: string;
}>>;
export declare function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>): Apollo.QueryTuple<GetPostQuery, Exact<{
    post_id: string;
}>>;
export declare type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export declare type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export declare type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export declare const JoinSubDocument: Apollo.DocumentNode;
export declare function useJoinSubQuery(baseOptions: Apollo.QueryHookOptions<JoinSubQuery, JoinSubQueryVariables>): Apollo.QueryResult<JoinSubQuery, Exact<{
    username: string;
}>>;
export declare function useJoinSubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JoinSubQuery, JoinSubQueryVariables>): Apollo.QueryTuple<JoinSubQuery, Exact<{
    username: string;
}>>;
export declare type JoinSubQueryHookResult = ReturnType<typeof useJoinSubQuery>;
export declare type JoinSubLazyQueryHookResult = ReturnType<typeof useJoinSubLazyQuery>;
export declare type JoinSubQueryResult = Apollo.QueryResult<JoinSubQuery, JoinSubQueryVariables>;
export declare const GetPostsByUserDocument: Apollo.DocumentNode;
export declare function useGetPostsByUserQuery(baseOptions: Apollo.QueryHookOptions<GetPostsByUserQuery, GetPostsByUserQueryVariables>): Apollo.QueryResult<GetPostsByUserQuery, Exact<{
    username: string;
}>>;
export declare function useGetPostsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsByUserQuery, GetPostsByUserQueryVariables>): Apollo.QueryTuple<GetPostsByUserQuery, Exact<{
    username: string;
}>>;
export declare type GetPostsByUserQueryHookResult = ReturnType<typeof useGetPostsByUserQuery>;
export declare type GetPostsByUserLazyQueryHookResult = ReturnType<typeof useGetPostsByUserLazyQuery>;
export declare type GetPostsByUserQueryResult = Apollo.QueryResult<GetPostsByUserQuery, GetPostsByUserQueryVariables>;
export declare const GetCommentsByUserDocument: Apollo.DocumentNode;
export declare function useGetCommentsByUserQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsByUserQuery, GetCommentsByUserQueryVariables>): Apollo.QueryResult<GetCommentsByUserQuery, Exact<{
    username: string;
}>>;
export declare function useGetCommentsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsByUserQuery, GetCommentsByUserQueryVariables>): Apollo.QueryTuple<GetCommentsByUserQuery, Exact<{
    username: string;
}>>;
export declare type GetCommentsByUserQueryHookResult = ReturnType<typeof useGetCommentsByUserQuery>;
export declare type GetCommentsByUserLazyQueryHookResult = ReturnType<typeof useGetCommentsByUserLazyQuery>;
export declare type GetCommentsByUserQueryResult = Apollo.QueryResult<GetCommentsByUserQuery, GetCommentsByUserQueryVariables>;
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
export declare const GetSearchSubsDocument: Apollo.DocumentNode;
export declare function useGetSearchSubsQuery(baseOptions: Apollo.QueryHookOptions<GetSearchSubsQuery, GetSearchSubsQueryVariables>): Apollo.QueryResult<GetSearchSubsQuery, Exact<{
    subInput: SubSearchInput;
}>>;
export declare function useGetSearchSubsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchSubsQuery, GetSearchSubsQueryVariables>): Apollo.QueryTuple<GetSearchSubsQuery, Exact<{
    subInput: SubSearchInput;
}>>;
export declare type GetSearchSubsQueryHookResult = ReturnType<typeof useGetSearchSubsQuery>;
export declare type GetSearchSubsLazyQueryHookResult = ReturnType<typeof useGetSearchSubsLazyQuery>;
export declare type GetSearchSubsQueryResult = Apollo.QueryResult<GetSearchSubsQuery, GetSearchSubsQueryVariables>;
export declare const GetJoinedSubDocument: Apollo.DocumentNode;
export declare function useGetJoinedSubQuery(baseOptions?: Apollo.QueryHookOptions<GetJoinedSubQuery, GetJoinedSubQueryVariables>): Apollo.QueryResult<GetJoinedSubQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetJoinedSubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJoinedSubQuery, GetJoinedSubQueryVariables>): Apollo.QueryTuple<GetJoinedSubQuery, Exact<{
    [key: string]: never;
}>>;
export declare type GetJoinedSubQueryHookResult = ReturnType<typeof useGetJoinedSubQuery>;
export declare type GetJoinedSubLazyQueryHookResult = ReturnType<typeof useGetJoinedSubLazyQuery>;
export declare type GetJoinedSubQueryResult = Apollo.QueryResult<GetJoinedSubQuery, GetJoinedSubQueryVariables>;
export declare const JoinSubBlueEditDocument: Apollo.DocumentNode;
export declare type JoinSubBlueEditMutationFn = Apollo.MutationFunction<JoinSubBlueEditMutation, JoinSubBlueEditMutationVariables>;
export declare function useJoinSubBlueEditMutation(baseOptions?: Apollo.MutationHookOptions<JoinSubBlueEditMutation, JoinSubBlueEditMutationVariables>): Apollo.MutationTuple<JoinSubBlueEditMutation, Exact<{
    subName: string;
}>>;
export declare type JoinSubBlueEditMutationHookResult = ReturnType<typeof useJoinSubBlueEditMutation>;
export declare type JoinSubBlueEditMutationResult = Apollo.MutationResult<JoinSubBlueEditMutation>;
export declare type JoinSubBlueEditMutationOptions = Apollo.BaseMutationOptions<JoinSubBlueEditMutation, JoinSubBlueEditMutationVariables>;
export declare const LeaveSubDocument: Apollo.DocumentNode;
export declare type LeaveSubMutationFn = Apollo.MutationFunction<LeaveSubMutation, LeaveSubMutationVariables>;
export declare function useLeaveSubMutation(baseOptions?: Apollo.MutationHookOptions<LeaveSubMutation, LeaveSubMutationVariables>): Apollo.MutationTuple<LeaveSubMutation, Exact<{
    subName: string;
}>>;
export declare type LeaveSubMutationHookResult = ReturnType<typeof useLeaveSubMutation>;
export declare type LeaveSubMutationResult = Apollo.MutationResult<LeaveSubMutation>;
export declare type LeaveSubMutationOptions = Apollo.BaseMutationOptions<LeaveSubMutation, LeaveSubMutationVariables>;
export declare const IsJoinDocument: Apollo.DocumentNode;
export declare function useIsJoinQuery(baseOptions: Apollo.QueryHookOptions<IsJoinQuery, IsJoinQueryVariables>): Apollo.QueryResult<IsJoinQuery, Exact<{
    subName: string;
}>>;
export declare function useIsJoinLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsJoinQuery, IsJoinQueryVariables>): Apollo.QueryTuple<IsJoinQuery, Exact<{
    subName: string;
}>>;
export declare type IsJoinQueryHookResult = ReturnType<typeof useIsJoinQuery>;
export declare type IsJoinLazyQueryHookResult = ReturnType<typeof useIsJoinLazyQuery>;
export declare type IsJoinQueryResult = Apollo.QueryResult<IsJoinQuery, IsJoinQueryVariables>;
export declare const CreatePostWithMarkDownDocument: Apollo.DocumentNode;
export declare type CreatePostWithMarkDownMutationFn = Apollo.MutationFunction<CreatePostWithMarkDownMutation, CreatePostWithMarkDownMutationVariables>;
export declare function useCreatePostWithMarkDownMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostWithMarkDownMutation, CreatePostWithMarkDownMutationVariables>): Apollo.MutationTuple<CreatePostWithMarkDownMutation, Exact<{
    postData: PostInputMarkDown;
}>>;
export declare type CreatePostWithMarkDownMutationHookResult = ReturnType<typeof useCreatePostWithMarkDownMutation>;
export declare type CreatePostWithMarkDownMutationResult = Apollo.MutationResult<CreatePostWithMarkDownMutation>;
export declare type CreatePostWithMarkDownMutationOptions = Apollo.BaseMutationOptions<CreatePostWithMarkDownMutation, CreatePostWithMarkDownMutationVariables>;
export declare const CreatePostWithLinkDocument: Apollo.DocumentNode;
export declare type CreatePostWithLinkMutationFn = Apollo.MutationFunction<CreatePostWithLinkMutation, CreatePostWithLinkMutationVariables>;
export declare function useCreatePostWithLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostWithLinkMutation, CreatePostWithLinkMutationVariables>): Apollo.MutationTuple<CreatePostWithLinkMutation, Exact<{
    postData: PostInputLink;
}>>;
export declare type CreatePostWithLinkMutationHookResult = ReturnType<typeof useCreatePostWithLinkMutation>;
export declare type CreatePostWithLinkMutationResult = Apollo.MutationResult<CreatePostWithLinkMutation>;
export declare type CreatePostWithLinkMutationOptions = Apollo.BaseMutationOptions<CreatePostWithLinkMutation, CreatePostWithLinkMutationVariables>;
export declare const CreatePostWithImageDocument: Apollo.DocumentNode;
export declare type CreatePostWithImageMutationFn = Apollo.MutationFunction<CreatePostWithImageMutation, CreatePostWithImageMutationVariables>;
export declare function useCreatePostWithImageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostWithImageMutation, CreatePostWithImageMutationVariables>): Apollo.MutationTuple<CreatePostWithImageMutation, Exact<{
    postData: PostInputImage;
}>>;
export declare type CreatePostWithImageMutationHookResult = ReturnType<typeof useCreatePostWithImageMutation>;
export declare type CreatePostWithImageMutationResult = Apollo.MutationResult<CreatePostWithImageMutation>;
export declare type CreatePostWithImageMutationOptions = Apollo.BaseMutationOptions<CreatePostWithImageMutation, CreatePostWithImageMutationVariables>;
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