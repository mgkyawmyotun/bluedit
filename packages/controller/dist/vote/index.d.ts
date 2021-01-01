import { FC } from 'react';
interface VoteControllerProps {
    children: ({ upVote, downVote, }: {
        upVote: (post_id: string) => Promise<void>;
        downVote: (post_id: string) => Promise<void>;
    }) => JSX.Element;
}
export declare const VoteController: FC<VoteControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map