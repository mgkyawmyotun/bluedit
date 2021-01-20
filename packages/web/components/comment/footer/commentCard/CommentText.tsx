import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface CommentTextProps {
  comment_text: string;
}
export const CommentText: FC<CommentTextProps> = ({ comment_text }) => {
  return (
    <>
      <ReactMarkdown plugins={[remarkGfm]}>{comment_text}</ReactMarkdown>
    </>
  );
};
