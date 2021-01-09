import { postLinkValidation } from '@bluedit/common';
import { Formik } from 'formik';
import { FC } from 'react';
import { MainSubmitButton } from '../SubmitButton';
import { LinkTab } from '../tab/LinkTab';

export const LinkForm: FC = () => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: '',
        link: '',
      }}
      validationSchema={postLinkValidation}
      onSubmit={() => {
        console.log('HEllo From Submit');
      }}
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
};
