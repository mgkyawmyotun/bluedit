import { VoteController, VoteType } from '@bluedit/controller';
import { Col } from 'antd';
import { FC, useContext, useState } from 'react';
import { voteErrorNotification } from '../../common/Notification';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
import { DownVoteButton } from './downVoteButton';
import { UpVoteButton } from './upVoteButton';
import { VoteCount } from './VoteCount';
interface PostVoteProps {}
export const PostVote: FC = () => {
  const { vote_count, post_id } = useContext(PostContext);
  const [rerender, setRerender] = useState<boolean>();
  return (
    <Col span={1} className={styles.card__vote}>
      <VoteController post_id={post_id}>
        {({ upVote, downVote, isVotedQuery }) => (
          <>
            <Col>
              <UpVoteButton
                onClick={async () => {
                  try {
                    const { data } = await upVote();
                    isVotedQuery.refetch();
                    if (data.addVote) {
                      voteErrorNotification();
                    }
                  } catch (error) {
                    voteErrorNotification();
                  }
                }}
                isVoted={() => {
                  if (isVotedQuery.data) {
                    if (isVotedQuery.data.isVoted == VoteType.Up) {
                      return true;
                    }
                    return false;
                  }
                }}
              />
            </Col>
            <Col>
              <VoteCount vote_count={vote_count < 0 ? 0 : vote_count} />
            </Col>
            <Col>
              <DownVoteButton
                onClick={async () => {
                  try {
                    const { data } = await downVote();
                    isVotedQuery.refetch();
                    if (data.addVote) {
                      voteErrorNotification();
                    }
                  } catch (error) {
                    voteErrorNotification();
                  }
                }}
              />
            </Col>
          </>
        )}
      </VoteController>
    </Col>
  );
};
