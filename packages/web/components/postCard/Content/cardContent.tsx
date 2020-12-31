import { Col } from 'antd';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
import { CardContentLink } from './cardContentLink';
import { CardContentText } from './cardContentText';
import { CardContentTitle } from './cardContentTitle';

interface CardContentProps {}
export const CardContent: FC = () => {
  const { link, post_text, title } = useContext(PostContext);
  return (
    <Col className={styles.card__content}>
      <Col>
        <CardContentTitle title={title} />
      </Col>
      <Col>
        {link ? (
          <CardContentLink link={link} />
        ) : (
          <CardContentText text={post_text} />
        )}
      </Col>
    </Col>
  );
};
