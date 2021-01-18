import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { CommentInput, CreateCommentMutation } from '../generated/graphql';
interface CommentControllerProps {
    children: ({ submitComment, }: {
        submitComment: (commentData: CommentInput) => Promise<FetchResult<CreateCommentMutation, Record<string, any>, Record<string, any>>>;
    }) => JSX.Element;
}
export declare const CommentController: FC<CommentControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map