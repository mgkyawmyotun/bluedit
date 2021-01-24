import { useUserContext } from '@bluedit/controller';
import { Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { FC, useEffect, useState } from 'react';
import styles from '../../styles/navbar.module.css';
import { Brand } from './Brand';
import { LoginRegister } from './LoginRegister';
import { SearchBox } from './SearchBox';
import { UserProfile } from './UserProfile';
export const NavBar: FC = () => {
  const data = useUserContext();
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (data && data.data && data.data.me) {
      setShow(true);
    }
  }, [data]);
  return (
    <>
      <Header className={styles.navbar}>
        <Row align={'middle'} justify={'space-between'} wrap={false}>
          <Brand />
          <SearchBox />
          {show ? <UserProfile /> : <LoginRegister />}
        </Row>
      </Header>
    </>
  );
};
