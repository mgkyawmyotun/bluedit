import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Image } from 'antd';
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
        <Image src={imagePath(image)} className={styles.content__image__main} />
      ))}
      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />

      <RightOutlined className={styles.content__image__right} />
    </div>
  );
};
