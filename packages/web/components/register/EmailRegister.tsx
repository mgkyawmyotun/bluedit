import { Button, Col, Divider, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { FC } from 'react';
import { ContinueWithFaceBook } from '../common';
import { FormField } from '../common/FormField';

interface EmailRegisterProps {
  showNextForm: React.Dispatch<React.SetStateAction<boolean>>;
  isValidEmail: boolean;
  setError: (value: string) => void;
}
export const EmailRegister: FC<EmailRegisterProps> = ({
  showNextForm,
  isValidEmail,
  setError,
}) => {
  return (
    <Layout color="white">
      <Sider width="156px">
        <img src="/registerEmail.jpg"></img>
      </Sider>
      <Content>
        <Row>
          <Col style={{ marginTop: '100px', marginLeft: '20px' }}>
            <Row>
              <span style={{ fontSize: 30, fontWeight: 'bold' }}>SingUp</span>
            </Row>
            <Row>
              <p>
                By continuing, you agree to our UserAgreement and
                <br></br>
                Privacy Policy. CONTINUE
              </p>
            </Row>

            <Row className="emailRegisterHeight">
              <ContinueWithFaceBook />
            </Row>
            <Divider dashed> OR </Divider>
            <Row className="emailRegisterHeight">
              <FormField
                name="email"
                type="text"
                label="Email"
                className="emailRegisterFieldInput"
              />
            </Row>
            <Row>
              <Button
                size="large"
                type="primary"
                className="emailRegisterFieldInput"
                disabled={isValidEmail}
                onClick={() => {
                  setError('email Already Exists');
                }}
                htmlType="submit"
              >
                Continue
              </Button>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
