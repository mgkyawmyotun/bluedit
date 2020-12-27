import { SearchOutlined } from '@ant-design/icons';
import { Col, Input } from 'antd';
import { FC } from 'react';
import styles from './../../styles/navbar.module.css';
export const SearchBox: FC = () => {
  return (
    <>
      <Col span={14} style={{ marginTop: 5 }}>
        <Input
          placeholder="Search ..."
          prefix={<SearchOutlined />}
          className={styles.searchBox}
        />
      </Col>
    </>
  );
};
