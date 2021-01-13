import { Col } from 'antd';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
import { CardContentImage } from './cardContentImage';
import { CardContentLink } from './cardContentLink';
import { CardContentText } from './cardContentText';
import { CardContentTitle } from './cardContentTitle';

export const CardContent: FC = () => {
  const { link, post_text, title, images } = useContext(PostContext);

  const CardContentUtils = () => {
    if (link) return <CardContentLink link={link} />;
    if (post_text) return <CardContentText text={post_text} />;
    if (images) return <CardContentImage images={images} />;
    return null;
  };
  console.log(images);
  return (
    <Col className={styles.card__content}>
      <Col>
        <CardContentTitle title={title} />
      </Col>
      <Col>
        <CardContentUtils />
      </Col>
    </Col>
  );
};
