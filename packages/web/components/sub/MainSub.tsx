import { Sub } from '@bluedit/controller';
import { FC } from 'react';
import { SubHeader } from './header/SubHeader';
import { SubContext } from './SubContext';

interface MainSubProps {
  sub: Sub;
}
export const MainSub: FC<MainSubProps> = ({ sub }) => {
  return (
    <div>
      <SubContext.Provider value={sub}>
        <SubHeader />
      </SubContext.Provider>
    </div>
  );
};
