import { postMarkDownValidation } from '@bluedit/common';
import { TextFormController } from '@bluedit/controller';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import {
  forgetToChoseNotification,
  postSuccessNotification,
  serverErrorNotification,
} from '../../../common/Notification';
import { SubBluedit } from '../../store';
import { MainSubmitButton } from '../SubmitButton';
import { PostTab } from '../tab/PostTab';

export const TextForm: FC<{ subName: SubBluedit }> = observer(({ subName }) => {
  const { push } = useRouter();
  return (
    <TextFormController>
      {({ submitPost }) => (
        <Formik
          initialValues={{
            title: '',
            post_text: '',
          }}
          onSubmit={async ({ post_text, title }, { setSubmitting }) => {
            if (subName.subBlueditName === undefined) {
              forgetToChoseNotification();
              setSubmitting(false);
              return;
            }
            try {
              await submitPost({
                post_text,
                title,
                subbluedit: subName.subBlueditName,
              });
            } catch (error) {
              serverErrorNotification();
              setSubmitting(false);
              return;
            }

            postSuccessNotification();
            setSubmitting(false);
            push('/');

            setSubmitting(false);
          }}
          validationSchema={postMarkDownValidation}
          validateOnBlur
        >
          {({ handleSubmit, errors, isSubmitting }) => (
            <>
              <PostTab />
              <MainSubmitButton
                value="post_text"
                onSubmit={handleSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
              />
            </>
          )}
        </Formik>
      )}
    </TextFormController>
  );
});
