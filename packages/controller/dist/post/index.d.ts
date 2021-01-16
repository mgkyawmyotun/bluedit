import { QueryTuple } from '@apollo/client';
import { FC } from 'react';
import { Exact, GetPostQuery, GetPostsQuery } from '../generated/graphql';
export declare type postQueryType = QueryTuple<GetPostsQuery, Exact<{
    [key: string]: never;
}>>;
interface PostControllerInterface {
    children: (postQuery: postQueryType) => JSX.Element;
}
export declare const PostController: FC<PostControllerInterface>;
export declare const usePost: (post_id: string) => GetPostQuery | undefined;
export {};
//# sourceMappingURL=index.d.ts.map