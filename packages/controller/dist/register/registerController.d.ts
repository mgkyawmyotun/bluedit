import { ApolloQueryResult, FetchResult, MutationFunctionOptions } from '@apollo/client';
import { FC } from 'react';
import { CheckEmailQuery, CreateUserMutation, Exact, UserInputType } from '../generated/graphql';
interface Children {
    submit: (options?: MutationFunctionOptions<CreateUserMutation, Exact<{
        userInput: UserInputType;
    }>> | undefined) => Promise<FetchResult<CreateUserMutation>>;
    checkEmail: (variables?: Partial<Exact<{
        email: string;
    }>> | undefined) => Promise<ApolloQueryResult<CheckEmailQuery>>;
}
export declare type RegisterProps = Children;
interface RegisterControllerProps {
    children: ({ submit, checkEmail }: Children) => JSX.Element;
}
export declare const RegisterController: FC<RegisterControllerProps>;
export {};
//# sourceMappingURL=registerController.d.ts.map