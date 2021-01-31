import { useUserContext } from '@bluedit/controller';
import { Select } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './../../styles/navbar.module.css';
const { Option } = Select;
interface UserProfileProps {}
const userRoute: { value: string; path: string }[] = [
  { value: 'Profile', path: '/me' },
  { value: 'Logout', path: '/logout' },
];
export const UserProfile: FC = () => {
  const { data, loading } = useUserContext();
  const { push } = useRouter();
  return (
    <>
      {' '}
      <Select
        bordered={false}
        defaultValue={!loading && data && data.me.displayName}
        className={styles.selectBox}
        onChange={(e) => {
          push(e);
        }}
      >
        {userRoute.map(({ path, value }) => (
          <Option key={value} value={path}>
            <h3>{value}</h3>
          </Option>
        ))}
      </Select>
    </>
  );
};
