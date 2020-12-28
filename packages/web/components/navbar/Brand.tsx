import { Col } from 'antd';
import { FC } from 'react';

interface BrandProps {}
export const Brand: FC = () => {
  return (
    <>
      <Col flex={1}>
        <h1>Bluedit</h1>
      </Col>
    </>
  );
};
