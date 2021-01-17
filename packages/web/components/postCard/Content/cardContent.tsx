import { Col } from 'antd';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
import { CardContentImage } from './cardContentImage';
import { CardContentLink } from './cardContentLink';
import { CardContentText } from './cardContentText';
import { CardContentTitle } from './cardContentTitle';

export const CardContent: FC = () => {
  const { push } = useRouter();
  const { link, post_text, title, images, post_id } = useContext(PostContext);

  const CardContentUtils = () => {
    if (link) return <CardContentLink link={link} />;
    if (post_text)
      return (
        <CardContentText
          text={post_text}
          onClick={() => push('/p/' + post_id)}
        />
      );
    if (images) return <CardContentImage images={images} />;
    return null;
  };
  return (
    <Col className={styles.card__content}>
      <Col onClick={() => push('/p/' + post_id)}>
        <CardContentTitle title={title} />
      </Col>
      <Col>
        <CardContentUtils />
      </Col>
    </Col>
  );
};
