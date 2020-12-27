import { Col, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { FC } from 'react';
import styles from '../../styles/navbar.module.css';
import { NavIcon } from './icon';
import { LoginRegister } from './LoginRegister';
import { SearchBox } from './SearchBox';
export const NavBar: FC = () => {
  return (
    <>
      <Header className={styles.navbar}>
        <Row gutter={16}>
          <NavIcon />
          <Col span={4}>
            <h1>Bluedit</h1>
          </Col>
          <SearchBox />
          <LoginRegister />
        </Row>
      </Header>
    </>
  );
};
