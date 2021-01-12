import { postLinkValidation } from '@bluedit/common';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { forgetToChoseNotification } from '../../../common/Notification';
import { SubBluedit } from '../../store';
import { MainSubmitButton } from '../SubmitButton';
import { LinkTab } from '../tab/LinkTab';

export const LinkForm: FC<{ subName: SubBluedit }> = observer(({ subName }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: '',
        link: '',
      }}
      validationSchema={postLinkValidation}
      onSubmit={(values, helpers) => {
        if (subName.subBlueditName === undefined) {
          forgetToChoseNotification();
          helpers.setSubmitting(false);
          return;
        }
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
  );
});
