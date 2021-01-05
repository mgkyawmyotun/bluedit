import { Divider } from 'antd';
import { FC } from 'react';
import styles from './../../styles/submit.module.css';

interface SubmitHeaderProps {}
export const SubmitHeader: FC = () => {
  return (
    <>
      <span className={styles.submit__header}>Create a Post</span>
      <Divider className={styles.submit__divider} />
    </>
  );
};
