import { Avatar } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/submit.module.css';
interface SelectOptionProps {
  value: string;
}
export const SelectOption: FC<SelectOptionProps> = ({ value }) => {
  return (
    <div className={styles.select__option}>
      <div>
        <Avatar size={20}>K</Avatar>
      </div>
      <div style={{ paddingLeft: 10 }}>{value}</div>
    </div>
  );
};
