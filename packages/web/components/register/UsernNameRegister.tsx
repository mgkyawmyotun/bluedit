import { Button, Col, Divider, Row } from 'antd';
import React, { FC } from 'react';
import { FormField } from '../common/FormField';

export const UserNameRegister: FC = () => {
  return (
    <>
      <Row align="bottom">
        <Col className="userNameRegister" span={24} flex={'1'}>
          <h2>Chose Your DisplayName</h2>
          <p className="userNameTerm">
            Your displayName is how other community members will see you. This
            name will be used to credit you for things you share on Reddit. What
            should we call you?
          </p>
        </Col>
        <Divider className="userNameDivider" />
        <Col className="userNameRegister" span={24}>
          <FormField
            label="DisplayName"
            name="displayName"
            type="displayName"
            className="userNameField"
          />
          <FormField
            label="Username"
            name="username"
            type="username"
            addonBefore="http://bluedit.com/"
            className="userNameField"
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            className="userNameField"
          />
        </Col>
        <Col className="userNameButtonField" span={24}>
          <Button>Back</Button>
          <Button type="primary" className="userNameButton">
            Sing Up
          </Button>
        </Col>
      </Row>
    </>
  );
};
