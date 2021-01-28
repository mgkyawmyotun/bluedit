import { FC, memo } from 'react';

interface TestProps {}
const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const DivCom: FC<{ data: any }> = memo(
  ({ data }) => {
    console.log('I am render divcom', data);
    return <>{data}</>;
  },
  () => true
);
const DivDiff: FC<{ data: any }> = ({ data }) => {
  console.log('I am render divff');
  return <>{data}</>;
};
const Test: FC<TestProps> = () => {
  return (
    <div>
      {data.map((x, i) => (
        <>
          <DivCom data={x}></DivCom>
          {'-'}
          <DivDiff data={i}></DivDiff>
        </>
      ))}
    </div>
  );
};
export default Test;
