import { FacebookFilled } from '@ant-design/icons';
import React from 'react';
import FacebookLogin from 'react-facebook-login';

export const ContinueWithFaceBook = () => {
  return (
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
  );
};
