import { Formik } from 'formik';
import { FC } from 'react';
import { MainSubmitButton } from '../SubmitButton';
import { ImageVideoTab } from '../tab/ImageVideoTab';

export const ImageForm: FC = () => {
  return (
    <Formik
      initialValues={{
        title: '',
      }}
      onSubmit={() => {
        console.log('HEllo From Submit');
      }}
    >
      {({ handleSubmit }) => (
        <>
          <ImageVideoTab />
          <MainSubmitButton onSubmit={handleSubmit} />
        </>
      )}
    </Formik>
  );
};
