import { postImagesValidation } from '@bluedit/common';
import { ImageFormController } from '@bluedit/controller';
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
import { ImageVideoTab } from '../tab/ImageTab';

export const ImageForm: FC<{ subName: SubBluedit }> = observer(
  ({ subName }) => {
    const { push } = useRouter();
    return (
      <ImageFormController>
        {({ submitPost }) => (
          <Formik
            initialValues={{
              title: '',
              images: undefined,
            }}
            onSubmit={async ({ images, title }, { setSubmitting }) => {
              if (subName.subBlueditName === undefined) {
                forgetToChoseNotification();
                setSubmitting(false);
                return;
              }
              try {
                await submitPost({
                  images,
                  title,
                  subbluedit: subName.subBlueditName,
                });
              } catch (error) {
                serverErrorNotification();
                setSubmitting(false);
                return;
              }

              postSuccessNotification();
              setSubmitting(false);
              push('/');

              setSubmitting(false);
            }}
            validationSchema={postImagesValidation}
            validateOnBlur
          >
            {({ handleSubmit, errors, isSubmitting }) => (
              <>
                <ImageVideoTab />
                <MainSubmitButton
                  value="images"
                  onSubmit={handleSubmit}
                  errors={errors}
                  isSubmitting={isSubmitting}
                />
              </>
            )}
          </Formik>
        )}
      </ImageFormController>
    );
  }
);
