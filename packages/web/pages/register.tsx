import { RegisterController } from '@bluedit/controller';
import React, { FC } from 'react';
import { RegisterForm } from '../components/register/RegisterForm';
const Register: FC = () => {
  return (
    <RegisterController>
      {({ submit, results }) => <RegisterForm />}
    </RegisterController>
  );
};
export default Register;
