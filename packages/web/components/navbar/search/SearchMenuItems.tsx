import { SubSearchType } from '@bluedit/controller';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { SearchMenuItem } from './SearchMenuItem';

interface SearchMenuItems {
  subs: SubSearchType;
}
export const SearchMenusItems: FC<SearchMenuItems> = ({ subs }) => {
  const { push } = useRouter();
  return (
    <Menu>
      {subs &&
        subs.map((sub) => (
          <Menu.Item onClick={() => push('/r/' + sub.name)}>
            <SearchMenuItem sub={sub} />
          </Menu.Item>
        ))}
    </Menu>
  );
};
