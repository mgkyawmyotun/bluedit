import { userValidationSchema } from '@bluedit/common';
import Form from 'antd/lib/form/Form';
import { Formik, FormikProps } from 'formik';
import React, { FC, useState } from 'react';
import { RegisterFormValues } from '../../controller/dist';
import { EmailRegister, UserNameRegister } from '../components';
const Register: FC = () => {
  const [showNextForm, setShowNextForm] = useState<boolean>(false);
  return (
    <div>
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
        {({ errors, touched, values }: FormikProps<RegisterFormValues>) => (
          <Form>
            {!showNextForm && (
              <EmailRegister
                showNextForm={setShowNextForm}
                isValidEmail={
                  !errors['email'] && values['email'].length > 0 ? false : true
                }
              ></EmailRegister>
            )}
            {showNextForm && <UserNameRegister />}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
