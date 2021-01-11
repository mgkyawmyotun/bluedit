import { Form, Input } from 'antd';
import { useField } from 'formik';
import React, { FC } from 'react';
import { Title } from './Title';
export const LinkTab: FC = () => {
  const [field, meta, helpers] = useField<string>({ name: 'link' });
  return (
    <div>
      <Title />
      <h3>Link</h3>
      <Form.Item
        help={meta.touched && meta.error}
        validateStatus={meta.error && meta.touched ? 'error' : undefined}
      >
        <Input
          placeholder={'Link'}
          name={field.name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          allowClear
        />
      </Form.Item>
    </div>
  );
};
