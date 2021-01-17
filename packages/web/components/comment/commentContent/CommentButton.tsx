import { Button } from 'antd';
import { FormikErrors } from 'formik';
import { FC } from 'react';
import styles from './../../../styles/comment.module.css';

interface CommentButtonProps {
  onSubmit?: (e: any) => void;
  errors: FormikErrors<{
    [key: string]: string;
    title: string;
  }>;
  isSubmitting: boolean;
  value: string;
}
export const CommentButton: FC<CommentButtonProps> = ({
  errors,
  isSubmitting,
  value,
  onSubmit,
}) => {
  return (
    <div className={styles.comment__button__main}>
      <Button
        size={'large'}
        type="primary"
        htmlType="submit"
        onSubmit={onSubmit}
        onClick={onSubmit}
        loading={isSubmitting}
        disabled={!!(errors[value] || errors.title)}
        className={styles.comment__button}
      >
        Comment
      </Button>
    </div>
  );
};
