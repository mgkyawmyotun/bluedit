import Layout, { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import Image from 'next/image';
import { FC } from 'react';
export const EmailRegister: FC = () => {
  return (
    <Layout>
      <Sider>
        <Image
          src="/registerEmail.jpg"
          alt="Picture of the author"
          width={200}
          height={850}
          layout={'fixed'}
        ></Image>
      </Sider>
      <Content></Content>
    </Layout>
  );
};
