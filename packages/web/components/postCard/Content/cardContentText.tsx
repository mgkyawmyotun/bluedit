import { Col } from 'antd';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './../../../styles/postCard.module.css';
interface CardContentTextProps {
  text: string;
}
export const CardContentText: FC<CardContentTextProps> = ({ text }) => {
  return (
    <Col>
      <ReactMarkdown
        plugins={[remarkGfm]}
        className={styles.card__content__markdown}
      >
        {text}
      </ReactMarkdown>
    </Col>
  );
};
