import { VoteController } from '@bluedit/controller';
import { Col } from 'antd';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
import { DownVoteButton } from './downVoteButton';
import { UpVoteButton } from './upVoteButton';
import { VoteCount } from './VoteCount';
interface PostVoteProps {}
export const PostVote: FC = () => {
  const { vote_count, post_id } = useContext(PostContext);
  return (
    <Col span={1} className={styles.card__vote}>
      <VoteController>
        {({ upVote, downVote }) => (
          <>
            <Col>
              <UpVoteButton onClick={() => upVote(post_id)} />
            </Col>
            <Col>
              <VoteCount vote_count={vote_count} />
            </Col>
            <Col>
              <DownVoteButton onClick={() => downVote(post_id)} />
            </Col>
          </>
        )}
      </VoteController>
    </Col>
  );
};
