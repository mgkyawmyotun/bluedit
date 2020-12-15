import { Button, Col, Divider, Row } from 'antd';
import React, { FC } from 'react';
import { FormField } from '../common/FormField';
interface UserNameRegisterProps {
  showNextForm: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UserNameRegister: FC<UserNameRegisterProps> = ({
  showNextForm,
}) => {
  return (
    <>
      <Row align="bottom">
        <Col className="userNameRegister" span={24} style={{ flex: 1 }}>
          <h2>Chose Your DisplayName</h2>
          <p className="userNameTerm">
            Your displayName is how other community members will see you. This
            name will be used to credit you for things you share on Reddit. What
            should we call you?
          </p>
        </Col>
        <Divider className="userNameDivider" />
        <Col className="userNameRegister" span={24} style={{ flex: 1 }}>
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
          <Button onClick={() => showNextForm(false)}>Back</Button>
          <Button type="primary" className="userNameButton">
            Sing Up
          </Button>
        </Col>
      </Row>
    </>
  );
};
