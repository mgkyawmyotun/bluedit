import { userLoginValidationSchema } from '@bluedit/common';
import { LoginChildrenProps } from '@bluedit/controller';
import { Button, Col, Divider, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { ContinueWithFaceBook } from '../common';
import { FormField } from '../common/FormField';

export const LoginForm: FC<LoginChildrenProps> = ({ submit }) => {
  const { push } = useRouter();
  return (
    <Layout color="white">
      <Sider width="156px">
        <img src="/registerEmail.jpg" className="registerImage"></img>
      </Sider>
      <Content>
        <Formik
          initialValues={{ password: '', email: '' }}
          onSubmit={async (values, helpers) => {
            const { data } = await submit({
              variables: { loginInput: values },
            });
            if (data.login) {
              const { message, path } = data.login;
              helpers.setErrors({ email: message, password: message });
              return;
            }
            push('/me');
          }}
          validationSchema={userLoginValidationSchema}
        >
          {({ isValid, isSubmitting, handleSubmit }) => (
            <Row>
              <Col style={{ marginTop: '100px', marginLeft: '20px' }}>
                <Row>
                  <span style={{ fontSize: 30, fontWeight: 'bold' }}>
                    Login
                  </span>
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
                <Row className="">
                  <FormField
                    name="password"
                    type="password"
                    label="Password"
                    className="emailRegisterFieldInput"
                  />
                </Row>
                <Row>
                  <Button
                    size="large"
                    type="primary"
                    className="emailRegisterFieldInput"
                    onClick={() => handleSubmit()}
                    htmlType="submit"
                    disabled={!isValid}
                    loading={isSubmitting}
                  >
                    Log In
                  </Button>
                </Row>
              </Col>
            </Row>
          )}
        </Formik>
      </Content>
    </Layout>
  );
};
