import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  CreatePostMutation,
  PostInputMarkDown,
  useCreatePostMutation,
} from '../generated/graphql';

interface TextFormControllerProps {
  children: ({
    submitPost,
  }: {
    submitPost: (
      postData: PostInputMarkDown
    ) => Promise<
      FetchResult<CreatePostMutation, Record<string, any>, Record<string, any>>
    >;
  }) => JSX.Element;
}
export const TextFormController: FC<TextFormControllerProps> = ({
  children,
}) => {
  const [createPost, {}] = useCreatePostMutation({
    client: GraphQlClient.getClient(),
  });
  const submitPost = (postData: PostInputMarkDown) => {
    return createPost({ variables: { postData } });
  };
  return children({ submitPost });
};
