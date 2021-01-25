import { useGetJoinSub } from '@bluedit/controller';
import { Card, List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { FC } from 'react';
import { getFirstUpperName } from '../../common/utils';

interface ProfileSubCardProps {}
export const ProfileSubCard: FC<ProfileSubCardProps> = () => {
  const { data, loading } = useGetJoinSub();
  return (
    <div style={{ marginTop: '10px' }}>
      <Card title={'Joined SubBluedit'} bordered={true} style={{ width: 300 }}>
        {!loading && data && data.getJoinSub && (
          <List
            dataSource={data.getJoinSub}
            size={'small'}
            style={{ height: 150, overflow: 'hidden', overflowY: 'scroll' }}
            renderItem={({ sub: { name, displayName, picture_url } }) => (
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
