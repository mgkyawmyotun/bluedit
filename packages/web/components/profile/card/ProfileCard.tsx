import { Sub } from '@bluedit/controller';
import { Affix, Card } from 'antd';
import { FC, useContext } from 'react';
import { ProfileContext } from '../ProfileContext';
import styles from './../../../styles/profile.module.css';
import { ProfileCardBody } from './ProfileCardBody';
import { ProfileCardTitle } from './ProfileCardTitle';
import { ProfileSubCard } from './ProfileSubCard';

interface ProfileCardProps {
  joinsub: ({
    __typename?: 'Sub';
  } & Pick<Sub, 'displayName' | 'name' | 'picture_url'>)[];
  comment_count: number;
}
export const ProfileCard: FC<ProfileCardProps> = ({
  joinsub,
  comment_count,
}) => {
  const { user, vote_count } = useContext(ProfileContext);
  return (
    <>
      <Affix offsetTop={80} className={styles.profile__card}>
        <Card
          title={
            <ProfileCardTitle
              displayName={user.displayName}
              url={user.picture_url}
            />
          }
          bordered={true}
          style={{ maxWidth: 300 }}
        >
          <ProfileCardBody
            vote_count={vote_count}
            comment_count={comment_count}
          />
        </Card>
        <ProfileSubCard joinsub={joinsub} />
      </Affix>
    </>
  );
};
