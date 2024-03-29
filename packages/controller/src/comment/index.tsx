import { FetchResult, gql, useSubscription } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  CommentInput,
  CreateCommentMutation,
  GetCommentsQuery,
  useCreateCommentMutation,
  useGetCommentsQuery,
} from '../generated/graphql';
interface CommentControllerProps {
  children: ({
    submitComment,
  }: {
    submitComment: (
      commentData: CommentInput
    ) => Promise<
      FetchResult<
        CreateCommentMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
  }) => JSX.Element;
}
export const CommentController: FC<CommentControllerProps> = ({ children }) => {
  const [createComment, {}] = useCreateCommentMutation({
    client: GraphQlClient.getClient(),
  });
  const submitComment = (commentData: CommentInput) => {
    return createComment({ variables: { commentInput: commentData } });
  };
  return children({ submitComment });
};
export const useComment = (post_id: string) => {
  const [comments, setComments] = useState<GetCommentsQuery>();
  const { data, loading } = useGetCommentsQuery({
    variables: { post_id },
    client: GraphQlClient.getClient(),
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    if (data && !loading) {
      setComments(data);
    }
  }, [data, loading]);
  return comments;
};
const COMMENT_ADDED_SUB = gql`
  subscription commentAdded($post_id: String!) {
    commentAdded(post_id: $post_id)
  }
`;

export const useCommentAddedSub = (post_id: string) => {
  const [comment_count, setComment_Count] = useState<number>();
  const { data, loading } = useSubscription(COMMENT_ADDED_SUB, {
    variables: { post_id },
    client: GraphQlClient.getClient(),
  });
  useEffect(() => {
    if (data && !loading) {
      setComment_Count(data.commentAdded);
    }
  }, [data]);
  return comment_count;
};
const NEW_COMMENT_ADDED = gql`
  subscription newCommentAdded($post_id: String!) {
    newCommentAdded(post_id: $post_id) {
      comment_text
      user {
        displayName
        username
        picture_url
      }
      comment_id
      created_at
    }
  }
`;
export const useNewCommentAddedSub = (post_id: string) => {
  const { data } = useSubscription(NEW_COMMENT_ADDED, {
    variables: { post_id },
    client: GraphQlClient.getClient(),
  });

  return data && data.newCommentAdded;
};
