import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { CommentInput, CreateCommentMutation, GetCommentsQuery } from '../generated/graphql';
interface CommentControllerProps {
    children: ({ submitComment, }: {
        submitComment: (commentData: CommentInput) => Promise<FetchResult<CreateCommentMutation, Record<string, any>, Record<string, any>>>;
    }) => JSX.Element;
}
export declare const CommentController: FC<CommentControllerProps>;
export declare const useComment: (post_id: string) => GetCommentsQuery | undefined;
export {};
//# sourceMappingURL=index.d.ts.map