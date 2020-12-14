import { Form, Input } from 'antd';
import { useField } from 'formik';
import { FC } from 'react';
import { RegisterFormValues } from '../../../controller/dist';
interface FormFieldProps {
  name: string;
  type: string;
  label: string;
  className?: string;
}
export const FormField: FC<FormFieldProps> = ({ name, ...props }) => {
  const [field, meta, helpers] = useField<RegisterFormValues>({
    name,
    type: props.type,
  });
  return (
    <Form.Item
      {...props}
      help={meta.touched && meta.error}
      validateStatus={meta.error && meta.touched ? 'error' : undefined}
    >
      <Input
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
    </Form.Item>
  );
};
