import { SearchOutlined } from '@ant-design/icons';
import { Col, Input } from 'antd';
import { FC } from 'react';
import styles from './../../styles/navbar.module.css';
export const SearchBox: FC = () => {
  return (
    <>
      <Col span={10}>
        <Input
          placeholder="Search ..."
          prefix={<SearchOutlined />}
          className={styles.search__box}
        />
      </Col>
    </>
  );
};
