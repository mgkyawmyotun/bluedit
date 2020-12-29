import { Col, Row } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
import { PostDate } from './PostDate';
import { PostedUser } from './PostedUser';
import { SubAvatar } from './SubAvatar';
import { SubLink } from './SubLink';

interface CardHeaderProps {}
export const CardHeader: FC = () => {
  return (
    <Col className={styles.card__header}>
      <Row justify={'start'} align="middle" gutter={10}>
        <Col>
          <SubAvatar />
        </Col>
        <Col>
          <SubLink />
        </Col>
        <Col className={styles.header__dot}>.</Col>
        <Col>
          <PostedUser />
        </Col>
        <Col>
          <PostDate />
        </Col>
      </Row>
    </Col>
  );
};
