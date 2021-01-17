import { Col, Row } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
interface CardCommentProps {}
export const CardComment: FC = () => {
  const { push } = useRouter();
  const { post_id, comment_count } = useContext(PostContext);
  return (
    <Col
      className={styles.card__comment__box}
      onClick={() => push('/p/' + post_id)}
    >
      <Row className={styles.card__comment} justify={'space-between'}>
        <Image src="/comment.svg" width={15} height={18}></Image>
        <span>{comment_count} comments</span>
      </Row>
    </Col>
  );
};
