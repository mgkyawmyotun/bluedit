import { JoinLeaveController } from '@bluedit/controller';
import { Button } from 'antd';
import { FC } from 'react';

interface SubJoinLeaveProps {}
export const SubJoinLeave: FC<SubJoinLeaveProps> = () => {
  return (
    <>
      <JoinLeaveController>
        {({ joinSub, leaveSub }) => <Button size={'large'}>Join</Button>}
      </JoinLeaveController>
    </>
  );
};
