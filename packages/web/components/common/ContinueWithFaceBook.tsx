import { FacebookFilled } from '@ant-design/icons';
import { FaceBookController } from '@bluedit/controller';
import { useRouter } from 'next/router';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {
  faceBookErrorNotification,
  faecBookSuccessNotification,
} from './Notification';

export const ContinueWithFaceBook = () => {
  const { push } = useRouter();
  return (
    <FaceBookController>
      {(submit) => (
        <FacebookLogin
          appId="396718554904229"
          fields="id,name,email,picture,link"
          textButton="Continue With FaceBook"
          cssClass="facebookButton"
          icon={<FacebookFilled style={{ paddingRight: 10 }} />}
          callback={async (res: any) => {
            if (res.accessToken) {
              const { data } = await submit({
                variables: { accessToken: res.accessToken },
              });
              if (data.loginFaceBook) {
                faceBookErrorNotification();
              }
              faecBookSuccessNotification();
              push('/me');
              return;
            }
            faceBookErrorNotification();
          }}
        ></FacebookLogin>
      )}
    </FaceBookController>
  );
};
