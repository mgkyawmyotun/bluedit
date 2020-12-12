import { Formik } from 'formik';
import React, { FC } from 'react';
import { EmailRegister } from '../components';

const Register: FC = () => {
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
      >
        {() => <EmailRegister></EmailRegister>}
      </Formik>
    </div>
  );
};
export default Register;
