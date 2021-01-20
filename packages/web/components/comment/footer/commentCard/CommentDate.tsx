import { FC } from 'react';
import { ReactDate } from '../../../common/Date';

interface CommentDateProps {
  create_at: string;
}
export const CommentDate: FC<CommentDateProps> = ({ create_at }) => {
  return <ReactDate created_at={create_at} />;
};
