import { FC } from 'react';
export declare const useGetJoinSub: () => {
    loading: boolean;
    data: import("../generated/graphql").GetJoinedSubQuery | undefined;
};
interface JLInterface {
    children: ({ joinSub, leaveSub, isJoin, }: {
        joinSub: (subName: string) => void;
        leaveSub: (subName: string) => void;
        isJoin: boolean;
    }) => JSX.Element;
}
export declare const JoinLeaveController: FC<JLInterface>;
export {};
//# sourceMappingURL=index.d.ts.map