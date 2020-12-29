import { Col, Row } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import styles from './../../styles/navbar.module.css';

interface BrandProps {}
export const Brand: FC = () => {
  return (
    <>
      <Col span={2}>
        <Row justify={'space-between'} align={'middle'} wrap={false}>
          <Col className={styles.brand__image}>
            <Image
              src={'/bluedit.svg'}
              width={40}
              height={40}
              className={styles.brand__image}
            />
          </Col>
          <Col>
            <span className={styles.brand__title}>Bluedit</span>
          </Col>
        </Row>
      </Col>
    </>
  );
};
