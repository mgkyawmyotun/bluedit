import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { CreatePostWithLinkMutation, PostInputLink } from '../generated/graphql';
interface LinkFormControllerProps {
    children: ({ submitPost, }: {
        submitPost: (postData: PostInputLink) => Promise<FetchResult<CreatePostWithLinkMutation, Record<string, any>, Record<string, any>>>;
    }) => JSX.Element;
}
export declare const LinkFormController: FC<LinkFormControllerProps>;
export {};
//# sourceMappingURL=LinkFormController.d.ts.map