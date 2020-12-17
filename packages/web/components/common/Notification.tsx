import { notification } from 'antd';
interface NotificationType {
  message: string;
  description: string;
  type: 'error' | 'warning' | 'success';
}

const openNotification = ({ message, description, type }: NotificationType) => {
  notification[type]({
    message,
    description,
    duration: 2,
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
