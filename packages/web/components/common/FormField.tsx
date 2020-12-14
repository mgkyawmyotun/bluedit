import { Form, Input } from 'antd';
import { useField } from 'formik';
import { FC, ReactNode } from 'react';
import { RegisterFormValues } from '../../../controller/dist';
interface FormFieldProps {
  name: string;
  type: string;
  label: string;
  addonBefore?: ReactNode;
  className?: string;
}
export const FormField: FC<FormFieldProps> = ({
  name,
  addonBefore,
  ...props
}) => {
  const [field, meta, helpers] = useField<RegisterFormValues>({
    name,
    type: props.type,
  });
  return (
    <Form.Item
      label={props.label}
      labelAlign="left"
      labelCol={{ span: 6 }}
      help={meta.touched && meta.error}
      validateStatus={meta.error && meta.touched ? 'error' : undefined}
    >
      <Input
        placeholder={props.label}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        addonBefore={addonBefore}
        className={props.className}
      />
    </Form.Item>
  );
};
