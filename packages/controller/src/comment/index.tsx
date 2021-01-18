import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  CommentInput,
  CreateCommentMutation,
  useCreateCommentMutation,
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
