import { Col } from 'antd';
import { FC, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PostCommentContext } from '../../common/PostCommentContext';
import styles from './../../../styles/postCard.module.css';

interface CardContentTextProps {
  text: string;
  onClick?: () => void;
}
export const CardContentText: FC<CardContentTextProps> = ({
  text,
  onClick,
}) => {
  const { withComment } = useContext(PostCommentContext);
  return (
    <Col onClick={onClick}>
      <ReactMarkdown
        plugins={[remarkGfm]}
        className={withComment ? '' : styles.card__content__markdown}
      >
        {text}
      </ReactMarkdown>
    </Col>
  );
};
