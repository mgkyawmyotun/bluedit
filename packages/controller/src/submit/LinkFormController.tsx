import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  CreatePostWithLinkMutation,
  PostInputLink,
  useCreatePostWithLinkMutation,
} from '../generated/graphql';

interface LinkFormControllerProps {
  children: ({
    submitPost,
  }: {
    submitPost: (
      postData: PostInputLink
    ) => Promise<
      FetchResult<
        CreatePostWithLinkMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
  }) => JSX.Element;
}
export const LinkFormController: FC<LinkFormControllerProps> = ({
  children,
}) => {
  const [createPost, {}] = useCreatePostWithLinkMutation({
    client: GraphQlClient.getClient(),
  });
  const submitPost = (postData: PostInputLink) => {
    return createPost({ variables: { postData } });
  };
  return children({ submitPost });
};
