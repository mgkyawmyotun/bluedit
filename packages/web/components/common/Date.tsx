import { Tooltip } from 'antd';
import { FC } from 'react';
import styles from './../../styles/postCard.module.css';
import { timeAgo } from './../common/utils';

interface DateProps {
  created_at: string;
}
const parseDate = (date_data: string) => +date_data || date_data;
export const ReactDate: FC<DateProps> = ({ created_at }) => {
  return (
    <>
      <span className={styles.header__date}>
        <Tooltip
          placement={'top'}
          title={new Date(parseDate(created_at)).toLocaleDateString()}
        >
          {timeAgo(parseDate(created_at))}
        </Tooltip>
      </span>
    </>
  );
};
