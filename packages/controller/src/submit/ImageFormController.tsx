import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { GraphQlClient } from '../ApolloClient';
import {
  CreatePostWithImageMutation,
  PostInputImage,
  useCreatePostWithImageMutation,
} from '../generated/graphql';
interface ImageFormControllerProps {
  children: ({
    submitPost,
  }: {
    submitPost: (
      postData: PostInputImage
    ) => Promise<
      FetchResult<
        CreatePostWithImageMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
  }) => JSX.Element;
}
export const ImageFormController: FC<ImageFormControllerProps> = ({
  children,
}) => {
  const [createPost, {}] = useCreatePostWithImageMutation({
    client: GraphQlClient.getClient(),
  });

  const submitPost = (postData: PostInputImage) => {
    return createPost({ variables: { postData } });
  };

  return children({ submitPost });
};
