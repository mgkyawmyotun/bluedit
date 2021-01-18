import { notification } from 'antd';
interface NotificationType {
  message: string;
  description: string;
  type: 'error' | 'warning' | 'success';
}

export const openNotification = ({
  message,
  description,
  type,
}: NotificationType) => {
  notification[type]({
    message,
    description,
    duration: 2,
  });
};
export const voteErrorNotification = () => {
  openNotification({
    message: 'Error At Voteing',
    description: 'Error Occur At When You Vote Post Try Again Later',
    type: 'error',
  });
};
export const faceBookErrorNotification = () =>
  openNotification({
    message: 'Error At Continue With FaceBook',
    description: 'Error Occur When Continue With FaceBook Try Again Later',
    type: 'error',
  });

export const faecBookSuccessNotification = () =>
  openNotification({
    message: 'SuccessFully Login With FaceBook',
    description: 'SuccessFully Login With FaceBook ',
    type: 'success',
  });

export const serverErrorNotification = () => {
  openNotification({
    message: 'Server Error ',
    description: 'Might Be Server Problem Try Again Later',
    type: 'error',
  });
};
export const forgetToChoseNotification = () => {
  openNotification({
    message: 'Chose Community',
    description: 'Please Chose Community You Went To Post',
    type: 'error',
  });
};

export const postSuccessNotification = () =>
  openNotification({
    description: 'Post Created Successfully',
    message: 'Post Create',
    type: 'success',
  });
export const commentSuccessNotfication = () =>
  openNotification({
    description: 'Comment Created Successfully',
    message: 'Comment Create',
    type: 'success',
  });
export const commentErrorNotfication = (des: string) =>
  openNotification({
    description: des,
    message: 'Comment Cannot Create',
    type: 'error',
  });
