import { postLinkValidation } from '@bluedit/common';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import { FC } from 'react';
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
        subName.setName('onetwothree');
        console.log(subName.subBlueditName);
        console.log('HEllo From Submit');
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
