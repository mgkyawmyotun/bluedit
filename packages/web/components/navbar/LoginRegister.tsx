import { Button, Col } from 'antd';
import { FC } from 'react';
import styles from './../../styles/navbar.module.css';

interface LoginRegisterProps {}
export const LoginRegister: FC = () => {
  return (
    <>
      <Col className={styles.button}>
        <Button size="large" type="primary" htmlType="submit">
          Log In
        </Button>
      </Col>
      <Col className={styles.button}>
        <Button size="large" type="default" htmlType="submit">
          Register
        </Button>
      </Col>
    </>
  );
};
