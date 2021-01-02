import { Col, Input, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './../../styles/submitview.module.css';
interface SubmitViewProps {}
export const SubmitView: FC = () => {
  const { push } = useRouter();
  const goToSubmit = () => push('/submit');
  return (
    <Row className={styles.submitview__main} wrap={false}>
      <Col span={2}>
        <Avatar size={40}></Avatar>
      </Col>
      <Col span={18}>
        <Input
          placeholder="Create Post"
          className={styles.submitview__input}
          onFocus={goToSubmit}
        />
      </Col>
      <Col className={styles.submitview__image} onClick={goToSubmit}>
        <Image src="/submit__image.svg" width={40} height={40}></Image>
      </Col>
      <Col className={styles.submitview__link} onClick={goToSubmit}>
        <Image src="/submit__link.png" width={30} height={30}></Image>
      </Col>
    </Row>
  );
};
