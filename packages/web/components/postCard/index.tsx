import { Row } from 'antd';
import { FC } from 'react';
import styles from './../../styles/postCard.module.css';
import { CardHeader } from './Header/cardHeader';
import { PostVote } from './Vote/postVote';
interface PostCardProps {}
export const PostCard: FC = () => {
  return (
    <Row className={styles.card__body}>
      <PostVote />
      <CardHeader />
    </Row>
  );
};
