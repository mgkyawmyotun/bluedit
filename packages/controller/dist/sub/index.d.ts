import { FC } from 'react';
export declare const useGetJoinSub: () => {
    loading: boolean;
    data: import("../generated/graphql").GetJoinedSubQuery | undefined;
};
interface JLInterface {
    children: ({ joinSub, leaveSub, isJoin, }: {
        joinSub: () => void;
        leaveSub: () => void;
        isJoin: boolean;
    }) => JSX.Element;
    subName: string;
}
export declare const JoinLeaveController: FC<JLInterface>;
export {};
//# sourceMappingURL=index.d.ts.map