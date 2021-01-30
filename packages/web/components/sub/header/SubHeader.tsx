import Avatar from 'antd/lib/avatar/avatar';
import { FC, useContext } from 'react';
import { getFirstUpperName } from '../../common/utils';
import { SubContext } from '../SubContext';
import styles from './../../../styles/sub.module.css';
import { SubJoinLeave } from './SubJoinLeave';

interface SubHeaderProps {}
export const SubHeader: FC<SubHeaderProps> = () => {
  const { displayName, name, picture_url } = useContext(SubContext);
  return (
    <div className={styles.sub__header}>
      <div className={styles.sub__header__avatar}>
        <Avatar src={picture_url} size={80}>
          {getFirstUpperName(name)}
        </Avatar>
      </div>
      <div className={styles.sub__header__top}>
        <div className={styles.sub__header__name}>{displayName}</div>
        <div>{'r/' + name}</div>
      </div>
      <div className={styles.sub__header__btn}>
        <SubJoinLeave subName={name} />
      </div>
    </div>
  );
};
