import { FC } from 'react';

interface LinkFormControllerProps {
  children: () => JSX.Element;
}
export const LinkFormController: FC<LinkFormControllerProps> = ({
  children,
}) => {
  return children();
};
