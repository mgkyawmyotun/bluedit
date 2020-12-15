import { userValidationSchema } from '@bluedit/common';
import Form from 'antd/lib/form/Form';
import { Formik, FormikProps } from 'formik';
import React, { FC, useState } from 'react';
import { RegisterFormValues } from '../../../controller/dist';
import { EmailRegister } from './EmailRegister';
import { UserNameRegister } from './UsernNameRegister';

export const RegisterForm: FC = () => {
  const [showNextForm, setShowNextForm] = useState<boolean>(true);
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
      validationSchema={userValidationSchema}
    >
      {({
        errors,
        touched,
        values,
        setErrors,
      }: FormikProps<RegisterFormValues>) => (
        <Form layout={'vertical'}>
          {!showNextForm && (
            <EmailRegister
              showNextForm={setShowNextForm}
              isValidEmail={
                !errors['email'] && values['email'].length > 0 ? false : true
              }
              setError={(value: string) => setErrors({ email: value })}
            ></EmailRegister>
          )}
          {showNextForm && <UserNameRegister showNextForm={setShowNextForm} />}
        </Form>
      )}
    </Formik>
  );
};
