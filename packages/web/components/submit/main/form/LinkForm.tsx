import { postLinkValidation } from '@bluedit/common';
import { LinkFormController } from '@bluedit/controller';
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
import { LinkTab } from '../tab/LinkTab';

export const LinkForm: FC<{ subName: SubBluedit }> = observer(({ subName }) => {
  const { push } = useRouter();
  return (
    <LinkFormController>
      {({ submitPost }) => (
        <Formik
          initialValues={{
            title: '',
            link: '',
          }}
          validationSchema={postLinkValidation}
          onSubmit={async (values, helpers) => {
            if (subName.subBlueditName === undefined) {
              forgetToChoseNotification();
              helpers.setSubmitting(false);
              return;
            }
            try {
              await submitPost({
                link: values.link,
                title: values.title,
                subbluedit: subName.subBlueditName,
              });
            } catch (error) {
              serverErrorNotification();
              helpers.setSubmitting(false);
              return;
            }

            postSuccessNotification();
            helpers.setSubmitting(false);
            push('/');
          }}
          validateOnBlur
        >
          {({ handleSubmit, errors, isSubmitting }) => (
            <>
              <LinkTab />
              <MainSubmitButton
                value="link"
                onSubmit={handleSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
              />
            </>
          )}
        </Formik>
      )}
    </LinkFormController>
  );
});
