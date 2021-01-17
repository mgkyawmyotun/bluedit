import { Tooltip } from 'antd';
import { FC, useContext } from 'react';
import { PostContext } from '../Context/CardContext';
import styles from './../../../styles/postCard.module.css';
import { timeAgo } from './../../common/utils';

interface PostDateProps {}
const parseDate = (date_data: string) => +date_data || date_data;
export const PostDate: FC = () => {
  const { created_at } = useContext(PostContext);

  return (
    <span className={styles.header__date}>
      <Tooltip
        placement={'top'}
        title={new Date(parseDate(created_at)).toLocaleDateString()}
      >
        {timeAgo(parseDate(created_at))}
      </Tooltip>
    </span>
  );
};
