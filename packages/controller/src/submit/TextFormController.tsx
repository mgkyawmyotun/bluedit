import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  CreatePostWithMarkDownMutation,
  PostInputMarkDown,
  useCreatePostWithMarkDownMutation,
} from '../generated/graphql';

interface TextFormControllerProps {
  children: ({
    submitPost,
  }: {
    submitPost: (
      postData: PostInputMarkDown
    ) => Promise<
      FetchResult<
        CreatePostWithMarkDownMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
  }) => JSX.Element;
}
export const TextFormController: FC<TextFormControllerProps> = ({
  children,
}) => {
  const [createPost, {}] = useCreatePostWithMarkDownMutation({
    client: GraphQlClient.getClient(),
  });
  const submitPost = (postData: PostInputMarkDown) => {
    return createPost({ variables: { postData } });
  };
  return children({ submitPost });
};
