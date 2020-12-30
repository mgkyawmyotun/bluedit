import { Col, Row } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
interface CardCommentProps {}
export const CardComment: FC = () => {
  return (
    <Col className={styles.card__comment__box}>
      <Row className={styles.card__comment} justify={'space-between'}>
        <Image src="/comment.svg" width={15} height={18}></Image>
        <span>15 comments</span>
      </Row>
    </Col>
  );
};
