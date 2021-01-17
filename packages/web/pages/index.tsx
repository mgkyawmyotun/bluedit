import { WithNavBar } from '../components/common/withNavBar';
import { Main } from '../components/main';

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default WithNavBar(Home, 'Bluedit:Front page of internet');
