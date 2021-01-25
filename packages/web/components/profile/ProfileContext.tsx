import { User } from '@bluedit/controller';
import { createContext } from 'react';

interface ProfileContextInteface {
  user: User;
}
export const ProfileContext = createContext<ProfileContextInteface>(null);
