import { FormikProps } from 'formik';
import { FC } from 'react';
import { RegisterFormValues } from '..';
interface RegisterControllerProps {
    children: (props: FormikProps<RegisterFormValues>) => JSX.Element;
}
export declare const RegisterController: FC<RegisterControllerProps>;
export {};
//# sourceMappingURL=registerController.d.ts.map