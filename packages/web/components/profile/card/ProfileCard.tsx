import { Affix, Card } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/profile.module.css';
import { ProfileCardBody } from './ProfileCardBody';
import { ProfileCardTitle } from './ProfileCardTitle';
import { ProfileSubCard } from './ProfileSubCard';

interface ProfileCardProps {}
export const ProfileCard: FC<ProfileCardProps> = () => {
  return (
    <>
      <Affix offsetTop={80} className={styles.profile__card}>
        <Card
          title={<ProfileCardTitle />}
          bordered={true}
          style={{ width: 300 }}
        >
          <ProfileCardBody />
        </Card>
        <ProfileSubCard />
      </Affix>
    </>
  );
};
