import { useLogout } from '@bluedit/controller';
import { useEffect } from 'react';
export default function Logout() {
  const [logout] = useLogout();
  useEffect(() => {
    logout();
  }, []);
  return <></>;
}
