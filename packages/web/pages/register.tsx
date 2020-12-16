import { RegisterController } from '@bluedit/controller';
import React, { FC } from 'react';
import { RegisterForm } from '../components/register/RegisterForm';
const Register: FC = () => {
  return (
    <RegisterController>
      {(props) => <RegisterForm {...props} />}
    </RegisterController>
  );
};
export default Register;
