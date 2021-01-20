import { useComment, useNewCommentAddedSub } from '@bluedit/controller';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { CommentCard } from './commentCard';

interface CommentListProps {}
export const CommentList: FC<CommentListProps> = () => {
  const { query } = useRouter();
  const post_id = query.post as string;
  const com_res = useComment(post_id);
  const [comments, setComments] = useState<typeof com_res.getComments>();
  const new_comment = useNewCommentAddedSub(post_id);
  useEffect(() => {
    if (com_res) {
      setComments(com_res.getComments);
    }
    if (new_comment) {
      setComments([new_comment, ...comments]);
    }
  }, [new_comment, com_res]);

  return (
    <div id="comment">
      {comments &&
        comments.map((comment) => (
          <CommentCard comment={comment} key={comment.comment_id}></CommentCard>
        ))}
    </div>
  );
};
