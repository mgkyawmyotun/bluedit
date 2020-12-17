import { FetchResult, MutationFunctionOptions } from '@apollo/client';
import { FC } from 'react';
import { ContinueWithFaceBookMutation, Exact } from '../generated/graphql';
interface FaceBookControllerProps {
    children: (submit: (options?: MutationFunctionOptions<ContinueWithFaceBookMutation, Exact<{
        accessToken: string;
    }>> | undefined) => Promise<FetchResult<ContinueWithFaceBookMutation>>) => JSX.Element;
}
export declare const FaceBookController: FC<FaceBookControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map