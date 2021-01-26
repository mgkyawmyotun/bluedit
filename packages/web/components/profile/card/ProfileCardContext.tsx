import { Sub } from '@bluedit/controller';
import { createContext } from 'react';

interface ProfileCardContextInterface {
  joinsub: ({
    __typename?: 'Sub';
  } & Pick<Sub, 'displayName' | 'name' | 'picture_url'>)[];
  comment_count: number;
}
export const ProfileCardContext = createContext<ProfileCardContextInterface>(
  null
);
