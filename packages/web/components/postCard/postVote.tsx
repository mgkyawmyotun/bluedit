import { Col, Row } from 'antd';
import { FC } from 'react';
import styles from './../../styles/postCard.module.css';
import { DownVoteButton } from './downVoteButton';
import { UpVoteButton } from './upVoteButton';
interface PostVoteProps {}
export const PostVote: FC = () => {
  return (
    <Col span={1} className={styles.card__vote}>
      <Row align={'middle'} justify={'center'}>
        <Col>
          <UpVoteButton />
        </Col>
        <Col>
          <DownVoteButton />
        </Col>
        <Col></Col>
      </Row>
    </Col>
  );
};
