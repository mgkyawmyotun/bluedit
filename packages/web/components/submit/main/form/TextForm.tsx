import { Formik } from 'formik';
import { FC } from 'react';
import { MainSubmitButton } from '../SubmitButton';
import { PostTab } from '../tab/PostTab';

export const TextForm: FC = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        post_text: '',
      }}
      onSubmit={(values, helpers) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, errors, isSubmitting }) => (
        <>
          <PostTab />
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
