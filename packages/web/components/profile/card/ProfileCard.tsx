import { Affix, Button } from 'antd';
import { FC } from 'react';

interface ProfileCardProps {}
export const ProfileCard: FC<ProfileCardProps> = () => {
  return (
    <>
      <Affix offsetTop={100}>
        <Button type="primary">Affix top</Button>
      </Affix>
    </>
  );
};
