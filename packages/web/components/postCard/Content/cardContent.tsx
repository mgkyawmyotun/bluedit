import { Col } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
import { CardContentLink } from './cardContentLink';
import { CardContentTitle } from './cardContentTitle';

interface CardContentProps {}
export const CardContent: FC = () => {
  return (
    <Col className={styles.card__content}>
      <Col>
        <CardContentTitle />
      </Col>
      <Col>
        <CardContentLink />
      </Col>
    </Col>
  );
};
