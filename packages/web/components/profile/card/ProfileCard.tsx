import { Affix } from 'antd';
import { FC, useContext } from 'react';
import { ProfileContext } from '../ProfileContext';
import profileStyles from './../../../styles/profile.module.css';
import { ProfileCardContext } from './ProfileCardContext';
import { ProfileCardUser } from './ProfileCardUser';
import { ProfileSubCard } from './ProfileSubCard';

interface ProfileCardProps {}
export const ProfileCard: FC<ProfileCardProps> = ({}) => {
  const { comment_count, joinsub } = useContext(ProfileCardContext);
  const { user, vote_count } = useContext(ProfileContext);
  return (
    <Affix offsetTop={80} className={profileStyles.profile__card}>
      <ProfileCardUser
        comment_count={comment_count}
        user={user}
        vote_count={vote_count}
      />
      <ProfileSubCard joinsub={joinsub} />
    </Affix>
  );
};
