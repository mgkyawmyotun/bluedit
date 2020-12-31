import { QueryTuple } from '@apollo/client';
import { FC } from 'react';
import { Exact, GetPostsQuery } from '../generated/graphql';
export declare type postQueryType = QueryTuple<GetPostsQuery, Exact<{
    [key: string]: never;
}>>;
interface PostControllerInterface {
    children: (postQuery: postQueryType) => JSX.Element;
}
export declare const usePost: () => void;
export declare const PostController: FC<PostControllerInterface>;
export {};
//# sourceMappingURL=index.d.ts.map