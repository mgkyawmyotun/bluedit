import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { CreatePostWithMarkDownMutation, PostInputMarkDown } from '../generated/graphql';
interface TextFormControllerProps {
    children: ({ submitPost, }: {
        submitPost: (postData: PostInputMarkDown) => Promise<FetchResult<CreatePostWithMarkDownMutation, Record<string, any>, Record<string, any>>>;
    }) => JSX.Element;
}
export declare const TextFormController: FC<TextFormControllerProps>;
export {};
//# sourceMappingURL=TextFormController.d.ts.map