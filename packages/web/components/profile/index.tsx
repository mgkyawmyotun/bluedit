import { FC } from 'react';
import styles from './../../styles/profile.module.css';
import { ProfileBar } from './tabBar/ProfileBar';

interface ProfileProps {}
export const Profile: FC<ProfileProps> = () => {
  return (
    <div className={styles.main__layout}>
      <ProfileBar></ProfileBar>
    </div>
  );
};
