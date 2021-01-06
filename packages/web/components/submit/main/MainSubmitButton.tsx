import { Button } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/submit.module.css';
interface MainSubmitButton {}
export const MainSubmitButton: FC = () => {
  return (
    <div className={styles.main__submit__button}>
      <div>
        <Button size={'large'} type="primary" style={{ marginRight: 10 }}>
          Cancel
        </Button>
      </div>
      <div>
        <Button size={'large'} type="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};
