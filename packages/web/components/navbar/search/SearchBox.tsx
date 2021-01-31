import { SearchOutlined } from '@ant-design/icons';
import { getSearchResut } from '@bluedit/controller';
import { Col, Dropdown, Input } from 'antd';
import { FC, useState } from 'react';
import styles from './../../../styles/navbar.module.css';
import { SearchMenusItems } from './SearchMenuItems';

export const SearchBox: FC = () => {
  const [subs, fetchSub] = getSearchResut();
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Col span={10}>
      <Dropdown
        overlay={<SearchMenusItems subs={subs} />}
        placement="bottomCenter"
        arrow
        visible={visible}
      >
        <Input
          placeholder="Search ..."
          prefix={<SearchOutlined />}
          className={styles.search__box}
          onChange={(e) => {
            if (!visible) {
              setVisible(true);
            }
            const value = e.target.value;
            fetchSub({
              variables: { subInput: { search_value: value, limit: 5 } },
            });
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') console.log('Click Submit');
          }}
        />
      </Dropdown>
    </Col>
  );
};
