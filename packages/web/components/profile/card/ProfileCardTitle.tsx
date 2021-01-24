import Avatar from 'antd/lib/avatar/avatar';
import { FC } from 'react';
import styles from './../../../styles/profile.module.css';
interface ProfileCardTitleProps {}
export const ProfileCardTitle: FC<ProfileCardTitleProps> = () => {
  return (
    <div className={styles.profile__card__header}>
      <div>
        <Avatar size={80}>
          <span style={{ fontSize: 40, userSelect: 'none' }}>K</span>
        </Avatar>
        <div>
          <span style={{ fontSize: 30 }}>Kyaw Myo Tun</span>
        </div>
      </div>
    </div>
  );
};
