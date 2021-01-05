import TextArea from 'antd/lib/input/TextArea';
import { FC } from 'react';

interface PostTabProps {}
export const PostTab: FC = () => {
  return (
    <div>
      <TextArea showCount maxLength={200}></TextArea>
    </div>
  );
};
