import { LoginController } from '@bluedit/controller';
import { FC } from 'react';
import { LoginForm } from '../components/login/LoginForm';

const Login: FC = () => {
  return (
    <LoginController>
      {({ submit }) => <LoginForm submit={submit} />}
    </LoginController>
  );
};

export default Login;
