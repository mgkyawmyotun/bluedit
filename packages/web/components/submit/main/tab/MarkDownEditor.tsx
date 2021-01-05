import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import remarkGfm from 'remark-gfm';
export const MarkDownEditor: FC = () => {
  const [value, setValue] = React.useState('## Make Awesome Post ');
  const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>(
    'write'
  );
  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
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
