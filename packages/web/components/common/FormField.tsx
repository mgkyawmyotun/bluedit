import { Form, Input } from 'antd';
import { useField } from 'formik';
import { FC } from 'react';
interface FormFieldProps {
  name: string;
  type: string;
  label: string;
  className: string;
}
export const FormField: FC = ({}) => {
  const {} = useField('usernaem');
  return (
    <Form.Item label="Email" name="email" className="emailRegisterFieldInput">
      <Input />
    </Form.Item>
  );
};
