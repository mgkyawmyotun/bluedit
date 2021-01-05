import React from 'react';
import RichTextEditor, { EditorValue } from 'react-rte';

interface EditorProps {}

export const TextEditor: React.FC<EditorProps> = ({}) => {
  const [value, setValue] = React.useState<EditorValue>(
    RichTextEditor.createEmptyValue()
  );
  return (
    <RichTextEditor
      onChange={(newValue) => {
        setValue(newValue);
      }}
      value={value}
    />
  );
};

export default TextEditor;
