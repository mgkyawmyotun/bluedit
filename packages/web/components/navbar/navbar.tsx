import { useUserContext } from '@bluedit/controller';
import { Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { FC } from 'react';
import styles from '../../styles/navbar.module.css';
import { Brand } from './Brand';
import { NavIcon } from './icon';
import { LoginRegister } from './LoginRegister';
import { SearchBox } from './SearchBox';
import { UserProfile } from './UserProfile';
export const NavBar: FC = () => {
  const data = useUserContext();
  return (
    <>
      <Header className={styles.navbar}>
        <Row align={'middle'} justify={'space-between'} wrap={false}>
          <NavIcon />
          <Brand />
          <SearchBox />
          {data && data.me ? <UserProfile /> : <LoginRegister />}
        </Row>
      </Header>
    </>
  );
};
