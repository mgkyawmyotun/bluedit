import { FC } from 'react';

interface TextFormControllerProps {
  children: () => JSX.Element;
}
export const TextFormController: FC<TextFormControllerProps> = ({
  children,
}) => {
  return children();
};
