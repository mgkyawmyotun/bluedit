import { useField } from 'formik';
import React from 'react';
import RichTextEditor, { EditorValue } from 'react-rte';
import { getTextAlignClassName } from 'react-rte/lib/lib/blockStyleFunctions';
import 'react-rte/lib/RichTextEditor.css';
interface EditorProps {}

export const TextEditor: React.FC<EditorProps> = ({}) => {
  const [value, setValue] = React.useState<EditorValue>(
    RichTextEditor.createEmptyValue()
  );
  const [field, meta, helpers] = useField({ name: 'post_text' });
  return (
    <RichTextEditor
      onChange={(newValue) => {
        setValue(newValue);
        helpers.setValue(newValue.toString('markdown'));
      }}
      value={value}
      placeholder="Start Typing Here"
      blockStyleFn={getTextAlignClassName}
    />
  );
};

export default TextEditor;
