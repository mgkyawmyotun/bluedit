import { SubSearchType } from '@bluedit/controller';
import Avatar from 'antd/lib/avatar/avatar';
import { FC } from 'react';
import { getFirstUpperName } from '../../common/utils';

interface SearchMenuItemProps {
  sub: SubSearchType[0];
}
export const SearchMenuItem: FC<SearchMenuItemProps> = ({
  sub: { displayName, picture_url, name },
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Avatar src={picture_url}>{getFirstUpperName(displayName)}</Avatar>
      </div>
      <div style={{ marginLeft: '10px', fontSize: '20px' }}>{'r/' + name}</div>
    </div>
  );
};
