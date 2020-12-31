import { Post } from '@bluedit/controller';
import { Col, Row } from 'antd';
import { FC } from 'react';
import styles from './../../styles/postCard.module.css';
import { CardContent } from './Content/cardContent';
import { PostContext } from './Context/CardContext';
import { CardComment } from './Footer/cardComment';
import { CardHeader } from './Header/cardHeader';
import { PostVote } from './Vote/postVote';
interface PostCardProps {
  post: Post;
}
export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Row className={styles.card__body} wrap={false}>
      <PostContext.Provider value={post}>
        <PostVote />
        <Col>
          <CardHeader />
          <CardContent />
          <CardComment />
        </Col>
      </PostContext.Provider>
    </Row>
  );
};
