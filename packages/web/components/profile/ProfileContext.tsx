import { User } from '@bluedit/controller';
import { createContext } from 'react';

interface ProfileContextInteface {
  user: User;
  vote_count: number;
}
export const ProfileContext = createContext<ProfileContextInteface>(null);
