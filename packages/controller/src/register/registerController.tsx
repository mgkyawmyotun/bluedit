import { Formik, FormikProps } from 'formik';
import React, { FC } from 'react';
import { RegisterFormValues } from '..';

interface RegisterControllerProps {
  children: (props: FormikProps<RegisterFormValues>) => JSX.Element;
}
export const RegisterController: FC<RegisterControllerProps> = ({
  children,
}) => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        displayName: '',
        password: '',
      }}
      onSubmit={() => {
        console.log('Submited');
      }}
    >
      {(props: FormikProps<RegisterFormValues>) => children(props)}
    </Formik>
  );
};
