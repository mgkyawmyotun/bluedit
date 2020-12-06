import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { FC } from 'react';

const Item = Form.Item;
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
            <Row style={{ marginTop: '100px' }}>
              <Button
                type="primary"
                className="emailRegisterField"
                icon={<GoogleOutlined />}
                size={'large'}
              >
                Continue With Google
              </Button>
            </Row>
            <Row style={{ marginTop: '30px' }}>
              <Button
                className="emailRegisterField"
                icon={<FacebookOutlined />}
                size={'large'}
              >
                Continue With FaceBook
              </Button>
            </Row>
            <Divider dashed> OR </Divider>
            <Row style={{ marginTop: '30px' }}>
              <Form>
                <Item
                  label="Email"
                  name="email"
                  className="emailRegisterFieldInput"
                >
                  <Input />
                </Item>
              </Form>
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
