import { Formik } from 'formik';
import { FC } from 'react';
import { MainSubmitButton } from '../SubmitButton';
import { ImageVideoTab } from '../tab/ImageTab';

export const ImageForm: FC = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        imagePaths: [''],
      }}
      onSubmit={(values) => {
        console.log('HEllo From Submit');
      }}
    >
      {({ handleSubmit, errors, isSubmitting }) => (
        <>
          <ImageVideoTab />
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
