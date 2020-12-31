import { Col, Row } from 'antd';
import Image from 'next/image';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
interface CardCommentProps {}
export const CardComment: FC = () => {
  const { comment_count } = useContext(PostContext);
  return (
    <Col className={styles.card__comment__box}>
      <Row className={styles.card__comment} justify={'space-between'}>
        <Image src="/comment.svg" width={15} height={18}></Image>
        <span>{comment_count} comments</span>
      </Row>
    </Col>
  );
};
