import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { FC } from 'react';
import styles from './../../../styles/postCard.module.css';
interface CardContentImageProps {
  images: string[];
}
const imagePath = (image: string) =>
  process.env.NEXT_PUBLIC_SERVER + 'images/' + image;
export const CardContentImage: FC<CardContentImageProps> = ({ images }) => {
  return (
    <div className={styles.content__image}>
      <LeftOutlined className={styles.content__image__left} />
      {images.map((image) => (
        <Image src={imagePath(image)} alt={image} width={400} height={400} />
      ))}
      <RightOutlined className={styles.content__image__right} />
    </div>
  );
};
