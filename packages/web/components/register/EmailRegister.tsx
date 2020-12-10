import { FacebookFilled } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React, { FC } from 'react';
import FacebookLogin from 'react-facebook-login';

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

            <Row style={{ marginTop: '30px' }}>
              <FacebookLogin
                appId="396718554904229"
                fields="id,name,email,picture,link"
                textButton="Continue With FaceBook"
                cssClass="facebookButton"
                icon={<FacebookFilled style={{ paddingRight: 10 }} />}
                callback={(res) => {
                  console.log(res);
                }}
              ></FacebookLogin>
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
