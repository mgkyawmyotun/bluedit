import { Button } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './../../../styles/submit.module.css';
interface MainSubmitButton {
  onSubmit?: () => void;
}
export const MainSubmitButton: FC<MainSubmitButton> = ({ onSubmit }) => {
  const { push } = useRouter();
  return (
    <div className={styles.main__submit__button}>
      <div>
        <Button
          size={'large'}
          type="primary"
          style={{ marginRight: 10 }}
          onClick={() => push('/')}
        >
          Cancel
        </Button>
      </div>
      <div>
        <Button
          size={'large'}
          type="primary"
          htmlType="submit"
          onSubmit={onSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
