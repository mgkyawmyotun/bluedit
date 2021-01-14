import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { FC, memo, useMemo, useState } from 'react';
import styles from './../../../styles/postCard.module.css';
interface CardContentImageProps {
  images: string[];
}
const imagePath = (image: string) =>
  process.env.NEXT_PUBLIC_SERVER + 'images/' + image;
const imageBlurPath = (image: string) =>
  process.env.NEXT_PUBLIC_SERVER + 'images/blur/' + image;

const ImageComponent: FC<{ image: string }> = memo(({ image }) => {
  return (
    <Image
      src={imagePath(image)}
      className={styles.content__image__main}
      key={image}
      placeholder={
        <Image
          preview={false}
          src={imageBlurPath(image)}
          key={image}
          className={styles.content__image__main}
        />
      }
    />
  );
});
const ImageComponents = (images: string[]) =>
  images.map((image) => <ImageComponent image={image} />);
export const CardContentImage: FC<CardContentImageProps> = ({ images }) => {
  const [pointer, setPointer] = useState<number>(0);
  const imagesCompo = useMemo(() => ImageComponents(images), images);
  const onPrevious = () => {
    if (pointer == 0) {
      return;
    }
    setPointer((value) => value - 1);
  };
  const onNext = () => {
    if (pointer + 1 == images.length) {
      return;
    }
    setPointer((value) => value + 1);
  };
  const image = () => images[pointer];
  return (
    <div className={styles.content__image}>
      <LeftOutlined
        className={styles.content__image__left}
        onClick={onPrevious}
        hidden={images.length == 1}
      />
      {imagesCompo[pointer]}
      <RightOutlined
        className={styles.content__image__right}
        onClick={onNext}
        hidden={images.length == 1}
      />
    </div>
  );
};
