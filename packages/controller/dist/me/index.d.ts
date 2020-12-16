import { QueryResult } from '@apollo/client';
import { FC } from 'react';
import { Exact, UserQuery } from '../generated/graphql';
interface MeControllerProps {
    children: (result: QueryResult<UserQuery, Exact<{
        [key: string]: never;
    }>>) => JSX.Element;
}
export declare const MeController: FC<MeControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map