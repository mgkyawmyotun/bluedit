import { SearchOutlined } from '@ant-design/icons';
import { Col, Input } from 'antd';
import { FC } from 'react';
import styles from './../../styles/navbar.module.css';
export const SearchBox: FC = () => {
  return (
    <>
      <Col flex={7}>
        <Input
          placeholder="Search ..."
          prefix={<SearchOutlined />}
          className={styles.searchBox}
        />
      </Col>
    </>
  );
};
