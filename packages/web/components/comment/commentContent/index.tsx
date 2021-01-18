import { commentValidation } from '@bluedit/common';
import { CommentController } from '@bluedit/controller';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import {
  commentErrorNotfication,
  commentSuccessNotfication,
} from '../../common/Notification';
import { CommentButton } from './CommentButton';
import { CommentTab } from './CommentTab';

interface CommentContentProps {}
export const CommentContent: FC<CommentContentProps> = () => {
  const { query } = useRouter();
  return (
    <CommentController>
      {({ submitComment }) => (
        <Formik
          initialValues={{
            comment_text: '', //comment_text
            post_id: query.post as string,
          }}
          onSubmit={async ({ comment_text, post_id }, { setSubmitting }) => {
            try {
              const result = await submitComment({ comment_text, post_id });
              if (result.data.createComment) {
                commentErrorNotfication(result.data.createComment.message);
              }
            } catch (error) {
              commentErrorNotfication(
                'Comment cannot create might be server error,Try again Later'
              );
            }
            commentSuccessNotfication();
            setSubmitting(false);
          }}
          validationSchema={commentValidation}
          validateOnBlur
        >
          {({ handleSubmit, errors, isSubmitting }) => (
            <>
              <CommentTab />
              <CommentButton
                value="comment_text"
                onSubmit={handleSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
              />
            </>
          )}
        </Formik>
      )}
    </CommentController>
  );
};
