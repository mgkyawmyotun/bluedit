import { Button, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';
interface LoginRegisterProps {}
export const LoginRegister: FC = () => {
  const { push } = useRouter();
  return (
    <>
      <Col flex={2}>
        <Row justify={'space-around'} wrap={false}>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            onClick={() => {
              push('/login');
            }}
          >
            Log In
          </Button>
          <Button
            size="large"
            type="default"
            htmlType="submit"
            onClick={() => {
              push('/register');
            }}
          >
            Register
          </Button>
        </Row>
      </Col>
    </>
  );
};
