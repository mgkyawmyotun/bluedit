import { FetchResult, QueryResult } from '@apollo/client';
import { FC } from 'react';
import { AddVoteMutation, Exact, IsVotedQuery } from '../generated/graphql';
interface VoteControllerProps {
    post_id: string;
    children: ({ upVote, downVote, isVotedQuery, }: {
        upVote: () => Promise<FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>>;
        downVote: () => Promise<FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>>;
        isVotedQuery: QueryResult<IsVotedQuery, Exact<{
            post_id: string;
        }>>;
    }) => JSX.Element;
}
export declare const VoteController: FC<VoteControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map