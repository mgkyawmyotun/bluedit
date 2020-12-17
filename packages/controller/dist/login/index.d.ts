import { FetchResult, MutationFunctionOptions } from '@apollo/client';
import { FC } from 'react';
import { Exact, LoginUserMutation, UserLoginInput } from '../generated/graphql';
export interface LoginChildrenProps {
    submit: (options?: MutationFunctionOptions<LoginUserMutation, Exact<{
        loginInput: UserLoginInput;
    }>> | undefined) => Promise<FetchResult<LoginUserMutation>>;
}
interface LoginControllerProps {
    children: ({ submit }: LoginChildrenProps) => JSX.Element;
}
export declare const LoginController: FC<LoginControllerProps>;
export {};
//# sourceMappingURL=index.d.ts.map