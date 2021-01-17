import 'draft-js/dist/Draft.css';
import { WithNavBar } from '../components/common/withNavBar';
import { SubmitForm } from '../components/submit';
function Submit() {
  return (
    <>
      <SubmitForm />
    </>
  );
}
export default WithNavBar(Submit, 'Submit To Bluedit');
