import { Post, Sub } from '@bluedit/controller';
import { FC } from 'react';
import { PostCard } from '../postCard';
import { SubHeader } from './header/SubHeader';
import { SubContext } from './SubContext';

interface MainSubProps {
  sub: Sub;
  posts: Post[];
}
export const MainSub: FC<MainSubProps> = ({ sub, posts }) => {
  return (
    <div>
      <SubContext.Provider value={sub}>
        <SubHeader />
      </SubContext.Provider>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};
