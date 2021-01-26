import { Sub } from '@bluedit/controller';
import { Card, List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { FC } from 'react';
import { getFirstUpperName } from '../../common/utils';

interface ProfileSubCardProps {
  joinsub: ({
    __typename?: 'Sub';
  } & Pick<Sub, 'displayName' | 'name' | 'picture_url'>)[];
}
export const ProfileSubCard: FC<ProfileSubCardProps> = ({ joinsub }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <Card
        title={'Joined SubBluedit'}
        bordered={true}
        style={{ maxWidth: 300 }}
      >
        {joinsub && (
          <List
            dataSource={joinsub}
            size={'small'}
            style={{ height: 150, overflow: 'hidden', overflowY: 'scroll' }}
            renderItem={({ displayName, name, picture_url }) => (
              <List.Item key={name}>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={picture_url}
                      size={40}
                      children={getFirstUpperName(displayName)}
                    />
                  }
                  title={<a href={'/r/' + name}>{displayName}</a>}
                  description={'r/' + name}
                />
              </List.Item>
            )}
          ></List>
        )}
      </Card>
    </div>
  );
};
