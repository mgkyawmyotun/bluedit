import { SearchOutlined } from '@ant-design/icons';
import { Sub } from '@bluedit/controller';
import { Col, Dropdown, Input, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { FC } from 'react';
import { getFirstUpperName } from '../common/utils';
import styles from './../../styles/navbar.module.css';
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const MenuItem = ({ displayName, name, picture_url }: Sub) => {
  return (
    <div>
      <div>
        <Avatar src={picture_url}>{getFirstUpperName(displayName)}</Avatar>
      </div>
      <div>{name}</div>
    </div>
  );
};
export const SearchBox: FC = () => {
  return (
    <>
      <Col span={10}>
        <Dropdown overlay={menu} placement="bottomCenter" arrow visible={false}>
          <Input
            placeholder="Search ..."
            prefix={<SearchOutlined />}
            className={styles.search__box}
            onChange={(e) => {
              console.log(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') console.log('Click Submit');
            }}
          />
        </Dropdown>
      </Col>
    </>
  );
};
