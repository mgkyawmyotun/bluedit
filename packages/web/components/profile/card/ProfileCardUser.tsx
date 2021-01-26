import { Card } from 'antd';
import { FC, useContext } from 'react';
import { ProfileContext } from '../ProfileContext';
import { ProfileCardBody } from './ProfileCardBody';
import { ProfileCardTitle } from './ProfileCardTitle';

interface ProfileCardUserProps {
  comment_count: number;
}
export const ProfileCardUser: FC<ProfileCardUserProps> = ({
  comment_count,
}) => {
  const { user, vote_count } = useContext(ProfileContext);
  return (
    <>
      <Card
        title={
          <ProfileCardTitle
            displayName={user.displayName}
            url={user.picture_url}
          />
        }
        bordered={true}
        style={{ maxWidth: 300, minWidth: 250 }}
      >
        <ProfileCardBody
          vote_count={vote_count}
          comment_count={comment_count}
        />
      </Card>
    </>
  );
};
