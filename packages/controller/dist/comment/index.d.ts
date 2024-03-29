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
export declare const useCommentAddedSub: (post_id: string) => number | undefined;
export declare const useNewCommentAddedSub: (post_id: string) => any;
export {};
//# sourceMappingURL=index.d.ts.map