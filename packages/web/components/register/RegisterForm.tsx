import { userValidationSchema } from '@bluedit/common';
import { RegisterProps } from '@bluedit/controller';
import Form from 'antd/lib/form/Form';
import { Formik, FormikProps } from 'formik';
import React, { FC, useState } from 'react';
import { RegisterFormValues } from '../../../controller/dist';
import { EmailRegister } from './EmailRegister';
import { UserNameRegister } from './UsernNameRegister';

export const RegisterForm: FC<RegisterProps> = ({ checkEmail, submit }) => {
  const [showNextForm, setShowNextForm] = useState<boolean>(false);
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        displayName: '',
        password: '',
      }}
      onSubmit={async (values, helpers) => {
        const { data } = await submit({
          variables: { userInput: { ...values } },
        });
        if (data.register) {
          helpers.setFieldError(data.register.path, data.register.message);
          if (data.register.path === 'email') {
            setShowNextForm(false);
          }
        }
      }}
      validationSchema={userValidationSchema}
    >
      {({
        errors,
        values,
        setErrors,
        handleSubmit,
        isSubmitting,
        isValid,
      }: FormikProps<RegisterFormValues>) => (
        <Form layout={'vertical'}>
          {!showNextForm && (
            <EmailRegister
              checkEmail={async () => {
                const { data } = await checkEmail({ email: values['email'] });
                return data.isEmailExists;
              }}
              showNextForm={setShowNextForm}
              isValidEmail={
                !errors['email'] && values['email'].length > 0 ? false : true
              }
              setError={(value: string) => setErrors({ email: value })}
            ></EmailRegister>
          )}
          {showNextForm && (
            <UserNameRegister
              showNextForm={setShowNextForm}
              submit={handleSubmit}
              isSubmitting={isSubmitting}
              isValid={isValid}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};
