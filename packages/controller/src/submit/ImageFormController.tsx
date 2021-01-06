import { FC } from 'react';

interface ImageFormControllerProps {
  children: () => JSX.Element;
}
export const ImageFormController: FC<ImageFormControllerProps> = ({
  children,
}) => {
  return children();
};
