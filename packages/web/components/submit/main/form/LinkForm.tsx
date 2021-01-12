import { postLinkValidation } from '@bluedit/common';
import { LinkFormController } from '@bluedit/controller';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { forgetToChoseNotification } from '../../../common/Notification';
import { SubBluedit } from '../../store';
import { MainSubmitButton } from '../SubmitButton';
import { LinkTab } from '../tab/LinkTab';

export const LinkForm: FC<{ subName: SubBluedit }> = observer(({ subName }) => {
  return (
    <LinkFormController>
      {({ submitPost }) => (
        <Formik
          enableReinitialize
          initialValues={{
            title: '',
            link: '',
          }}
          validationSchema={postLinkValidation}
          onSubmit={async (values, helpers) => {
            console.log(subName.subBlueditName);
            if (subName.subBlueditName === undefined) {
              console.log('Error');
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
            } catch (error) {}
            helpers.setSubmitting(false);
          }}
          validateOnBlur
        >
          {({ handleSubmit, errors, isSubmitting }) => (
            <>
              <LinkTab />
              <MainSubmitButton
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
