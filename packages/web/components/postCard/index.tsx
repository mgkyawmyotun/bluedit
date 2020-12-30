import { Col, Row } from 'antd';
import { FC } from 'react';
import styles from './../../styles/postCard.module.css';
import { CardContent } from './Content/cardContent';
import { CardComment } from './Footer/cardComment';
import { CardHeader } from './Header/cardHeader';
import { PostVote } from './Vote/postVote';
interface PostCardProps {}
export const PostCard: FC = () => {
  return (
    <Row className={styles.card__body} wrap={false}>
      <PostVote />
      <Col>
        <CardHeader />
        <CardContent />
        <CardComment />
      </Col>
    </Row>
  );
};
