import { useField } from 'formik';
import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import remarkGfm from 'remark-gfm';
export const MarkDownEditor: FC = () => {
  const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>(
    'write'
  );
  const [field, meta, helpers] = useField({ name: 'post_text' });
  return (
    <div className="container">
      <ReactMde
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(
            <ReactMarkdown source={markdown} plugins={[remarkGfm]} />
          )
        }
      />
    </div>
  );
};
