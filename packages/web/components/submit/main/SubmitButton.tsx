import { Button } from 'antd';
import { FormikErrors } from 'formik';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './../../../styles/submit.module.css';
interface MainSubmitButton {
  onSubmit?: (e: any) => void;
  errors: FormikErrors<{
    title: string;
    link: string;
  }>;
  isSubmitting: boolean;
}
export const MainSubmitButton: FC<MainSubmitButton> = ({
  onSubmit,
  errors,
  isSubmitting,
}) => {
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
          onClick={onSubmit}
          loading={isSubmitting}
          disabled={!!(errors.link || errors.title)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
