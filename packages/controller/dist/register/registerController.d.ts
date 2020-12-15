import { MutationResult } from '@apollo/client';
import { FC } from 'react';
import { CreateUserMutation, UserInputType } from '../generated/graphql';
interface Children {
    submit: (user: UserInputType) => void;
    results: MutationResult<CreateUserMutation>;
}
interface RegisterControllerProps {
    children: ({ submit }: Children) => JSX.Element;
}
export declare const RegisterController: FC<RegisterControllerProps>;
export {};
//# sourceMappingURL=registerController.d.ts.map