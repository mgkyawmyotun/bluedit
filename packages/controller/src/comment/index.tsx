import { FetchResult } from '@apollo/client';
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
    // refetch();

    if (data && !loading) {
      setComments(data);
    }
  }, [data, loading]);
  return comments;
};
