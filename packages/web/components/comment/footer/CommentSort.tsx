import { Select } from 'antd';
import { FC } from 'react';
import styles from './../../../styles/comment.module.css';
interface CommentSortProps {}
export const CommentSort: FC<CommentSortProps> = () => {
  return (
    <div className={styles.comment__sort}>
      <div className={styles.comment__sort__text}>Sort By</div>
      <div className={styles.comment__sort__option}>
        <Select value="lucy" style={{ width: 100 }}>
          <Select.Option value="lucy">Lucy</Select.Option>
        </Select>
      </div>
    </div>
  );
};
