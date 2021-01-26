import { QueryResult } from '@apollo/client';
import { FC } from 'react';
import { Exact, GetCommentsByUserQuery, GetPostsByUserQuery, JoinSubQuery } from '../generated/graphql';
interface ChildrenProps {
    joinsub: QueryResult<JoinSubQuery, Exact<{
        username: string;
    }>>;
    posts: QueryResult<GetPostsByUserQuery, Exact<{
        username: string;
    }>>;
    comments: QueryResult<GetCommentsByUserQuery, Exact<{
        username: string;
    }>>;
}
interface ProfileControllerProps {
    children: (props: ChildrenProps) => JSX.Element;
    username: string;
}
export declare const ProfileController: FC<ProfileControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map