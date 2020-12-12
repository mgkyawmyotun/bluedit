import { Button, Col, Divider, Form, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { FC } from 'react';
import { ContinueWithFaceBook } from '../common';
import { FormField } from '../common/FormField';

const Item = Form.Item;
const styles: React.CSSProperties = { marginTop: '30px' };
export const EmailRegister: FC = () => {
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
              <FormField />
            </Row>
            <Row>
              <Button
                size="large"
                type="primary"
                className="emailRegisterFieldInput"
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
