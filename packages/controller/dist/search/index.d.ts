import { QueryLazyOptions } from '@apollo/client';
import { Exact, Sub, SubSearchInput } from '../generated/graphql';
export declare type SubSearchType = ({
    __typename?: 'Sub' | undefined;
} & Pick<Sub, 'displayName' | 'name' | 'picture_url'>)[] | null | undefined;
declare type SubSearchReturn = [
    SubSearchType,
    (options?: QueryLazyOptions<Exact<{
        subInput: SubSearchInput;
    }>> | undefined) => void
];
export declare const getSearchResut: () => SubSearchReturn;
export {};
//# sourceMappingURL=index.d.ts.map