import { useComment } from '@bluedit/controller';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface CommentListProps {}
export const CommentList: FC<CommentListProps> = () => {
  const { query } = useRouter();
  const comments = useComment(query.post as string);

  return (
    <div id="comment">
      {comments &&
        comments.getComments.map((comment) => (
          <div>{comment.comment_text}</div>
        ))}
    </div>
  );
};
