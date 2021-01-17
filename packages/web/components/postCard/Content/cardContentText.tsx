import { Col } from 'antd';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './../../../styles/postCard.module.css';
interface CardContentTextProps {
  text: string;
  onClick?: () => void;
}
export const CardContentText: FC<CardContentTextProps> = ({
  text,
  onClick,
}) => {
  return (
    <Col onClick={onClick}>
      <ReactMarkdown
        plugins={[remarkGfm]}
        className={styles.card__content__markdown}
      >
        {text}
      </ReactMarkdown>
    </Col>
  );
};
