import { FC } from 'react';
export declare const useGetJoinSub: () => {
    loading: boolean;
    data: import("../generated/graphql").GetJoinedSubQuery | undefined;
};
interface JLInterface {
    children: ({ joinSub, leaveSub, }: {
        joinSub: (subName: string) => void;
        leaveSub: (subName: string) => void;
    }) => JSX.Element;
}
export declare const JoinLeaveController: FC<JLInterface>;
export {};
//# sourceMappingURL=index.d.ts.map