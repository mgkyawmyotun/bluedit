import TextArea from 'antd/lib/input/TextArea';
import { useField } from 'formik';
import { FC } from 'react';
export const Title: FC = () => {
  const [field, meta, helpers] = useField({ name: 'title' });
  return (
    <>
      <h1>Title</h1>
      <TextArea
        showCount
        autoFocus
        placeholder={'Title'}
        maxLength={200}
        autoSize={{ minRows: 1, maxRows: 3 }}
        name={'title'}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value as string}
      ></TextArea>
    </>
  );
};
