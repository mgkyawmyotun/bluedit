import { Col } from 'antd';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './../../../styles/postCard.module.css';
interface CardContentTextProps {}
export const CardContentText: FC = () => {
  return (
    <Col>
      <ReactMarkdown
        plugins={[remarkGfm]}
        className={styles.card__content__markdown}
      >
        {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |tore fuga doloremque voluptas, error dolorem sunt
        nulla obcaecatiA paragraph with *emphasis* and **strong importance**.`}
      </ReactMarkdown>
    </Col>
  );
};
