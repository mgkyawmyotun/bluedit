import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Title } from './Title';

const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
});
interface PostTabProps {}
export const PostTab: FC = () => {
  return (
    <div>
      <Title />
      <div
        style={{ border: '1px solid black', minHeight: '6em', cursor: 'text' }}
      >
        <TextEditor />
      </div>
    </div>
  );
};
