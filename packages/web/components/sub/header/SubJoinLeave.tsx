import { JoinLeaveController } from '@bluedit/controller';
import { Button } from 'antd';
import { FC } from 'react';

interface SubJoinLeaveProps {
  subName: string;
}
export const SubJoinLeave: FC<SubJoinLeaveProps> = ({ subName }) => {
  return (
    <>
      <JoinLeaveController subName={subName}>
        {({ joinSub, leaveSub, isJoin }) => {
          return (
            <>
              {!isJoin ? (
                <Button
                  size={'large'}
                  type={'primary'}
                  onClick={() => joinSub()}
                >
                  Join
                </Button>
              ) : (
                <Button size={'large'} onClick={() => leaveSub()}>
                  Leave
                </Button>
              )}
            </>
          );
        }}
      </JoinLeaveController>
    </>
  );
};
