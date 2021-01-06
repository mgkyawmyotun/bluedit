import { Formik } from 'formik';
import { FC } from 'react';
import { MainSubmitButton } from '../MainSubmitButton';
import { PostTab } from '../tab/PostTab';

export const TextForm: FC = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        post_text: '',
      }}
      onSubmit={() => {
        console.log('HEllo From Submit');
      }}
    >
      {({ handleSubmit }) => (
        <>
          <PostTab />
          <MainSubmitButton onSubmit={handleSubmit} />
        </>
      )}
    </Formik>
  );
};
