import { Avatar } from 'antd';
import { FC } from 'react';
import { getFirstUpperName } from '../../common/utils';
import styles from './../../../styles/submit.module.css';
interface SelectOptionProps {
  value: string;
  src?: string;
}
export const SelectOption: FC<SelectOptionProps> = ({ value, src }) => {
  return (
    <div className={styles.select__option}>
      <div>
        {src ? (
          <Avatar size={20} src={src}></Avatar>
        ) : (
          <Avatar size={20}>{getFirstUpperName(value)}</Avatar>
        )}
      </div>
      <div style={{ paddingLeft: 10 }}>{value}</div>
    </div>
  );
};
