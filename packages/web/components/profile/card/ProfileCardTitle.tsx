import Avatar from 'antd/lib/avatar/avatar';
import { FC } from 'react';
import { getFirstUpperName } from '../../common/utils';
import styles from './../../../styles/profile.module.css';
interface ProfileCardTitleProps {
  displayName: string;
  url: string;
}
export const ProfileCardTitle: FC<ProfileCardTitleProps> = ({
  displayName,
  url,
}) => {
  return (
    <div className={styles.profile__card__header}>
      <div>
        <Avatar size={80} src={url}>
          <span style={{ fontSize: 40, userSelect: 'none' }}>
            {getFirstUpperName(displayName)}
          </span>
        </Avatar>
        <div>
          <span style={{ fontSize: 30 }}>{displayName}</span>
        </div>
      </div>
    </div>
  );
};
