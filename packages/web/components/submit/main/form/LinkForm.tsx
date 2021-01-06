import { Formik } from 'formik';
import { FC } from 'react';
import { MainSubmitButton } from '../MainSubmitButton';
import { LinkTab } from '../tab/LinkTab';

export const LinkForm: FC = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        link: '',
      }}
      onSubmit={() => {
        console.log('HEllo From Submit');
      }}
    >
      {({ handleSubmit }) => (
        <>
          <LinkTab />
          <MainSubmitButton onSubmit={handleSubmit} />
        </>
      )}
    </Formik>
  );
};
