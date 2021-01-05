import { Input } from 'antd';
import { FC } from 'react';
import { Title } from './Title';

interface LinkTabProps {}
export const LinkTab: FC = () => {
  return (
    <div>
      <Title />
      <h3>Link</h3>
      <Input placeholder="Link" />
    </div>
  );
};
