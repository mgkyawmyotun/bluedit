import { FetchResult } from '@apollo/client';
import { FC } from 'react';
import { AddVoteMutation } from '../generated/graphql';
interface VoteControllerProps {
    children: ({ upVote, downVote, }: {
        upVote: (post_id: string) => Promise<FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>>;
        downVote: (post_id: string) => Promise<FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>>;
    }) => JSX.Element;
}
export declare const VoteController: FC<VoteControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map