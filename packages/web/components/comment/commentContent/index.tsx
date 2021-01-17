import { Formik } from 'formik';
import { FC } from 'react';
import { CommentButton } from './CommentButton';
import { CommentTab } from './CommentTab';

interface CommentContentProps {}
export const CommentContent: FC<CommentContentProps> = () => {
  return (
    <>
      <Formik
        initialValues={{
          post_text: '',
        }}
        onSubmit={async (values, helpers) => {}}
        validateOnBlur
      >
        {({ handleSubmit, errors, isSubmitting }) => (
          <>
            <CommentTab />
            <CommentButton
              value="post_text"
              onSubmit={handleSubmit}
              errors={errors}
              isSubmitting={isSubmitting}
            />
          </>
        )}
      </Formik>
    </>
  );
};
