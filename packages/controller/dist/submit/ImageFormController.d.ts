import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { CreatePostWithImageMutation, PostInputImage } from '../generated/graphql';
interface ImageFormControllerProps {
    children: ({ submitPost, }: {
        submitPost: (postData: PostInputImage) => Promise<FetchResult<CreatePostWithImageMutation, Record<string, any>, Record<string, any>>>;
    }) => JSX.Element;
}
export declare const ImageFormController: FC<ImageFormControllerProps>;
export {};
//# sourceMappingURL=ImageFormController.d.ts.map