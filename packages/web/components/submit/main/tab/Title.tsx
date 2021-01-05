import TextArea from 'antd/lib/input/TextArea';
import { FC } from 'react';
export const Title: FC = () => {
  return (
    <>
      <h1>Title</h1>
      <TextArea
        showCount
        placeholder={'Title'}
        maxLength={200}
        autoSize={{ minRows: 1, maxRows: 3 }}
      ></TextArea>
    </>
  );
};
