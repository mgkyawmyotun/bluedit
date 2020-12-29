import { Button, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './../../styles/navbar.module.css';
interface LoginRegisterProps {}
export const LoginRegister: FC = () => {
  const { push } = useRouter();
  return (
    <>
      <Col>
        <Row wrap={false}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              push('/login');
            }}
            className={styles.navbar__button}
          >
            Log In
          </Button>
          <Button
            type="default"
            htmlType="submit"
            onClick={() => {
              push('/register');
            }}
            className={styles.navbar__button}
          >
            Register
          </Button>
        </Row>
      </Col>
    </>
  );
};
