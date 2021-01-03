import { ApolloError, FetchResult, QueryResult } from '@apollo/client';
import { FC } from 'react';
import { AddVoteMutation, Exact, IsVotedQuery, RemoveVoteMutation } from '../generated/graphql';
interface VoteControllerProps {
    post_id: string;
    children: ({ upVote, downVote, isVotedQuery, removeDownVote, removeUpVote, voteAddedSub, }: {
        upVote: () => Promise<FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>>;
        downVote: () => Promise<FetchResult<AddVoteMutation, Record<string, any>, Record<string, any>>>;
        isVotedQuery: QueryResult<IsVotedQuery, Exact<{
            post_id: string;
        }>>;
        removeUpVote: () => Promise<FetchResult<RemoveVoteMutation, Record<string, any>, Record<string, any>>>;
        removeDownVote: () => Promise<FetchResult<RemoveVoteMutation, Record<string, any>, Record<string, any>>>;
        voteAddedSub: {
            variables: {
                postID: string;
            } | undefined;
            loading: boolean;
            data?: any;
            error?: ApolloError | undefined;
        };
    }) => JSX.Element;
}
export declare const VoteController: FC<VoteControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map