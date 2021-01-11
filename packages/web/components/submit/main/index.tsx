import { Tabs } from 'antd';
import { FC } from 'react';
import { MainChoser } from '../header/CommuntiyChoser';
import { SubBlueditState } from '../store';
import { MainTap } from './MainTab';
const TabPane = Tabs.TabPane;

interface SubmitMainProps {}
export const SubmitMain: FC = () => {
  return (
    <>
      <MainChoser subName={SubBlueditState.getSubBleditState()} />
      <MainTap />
    </>
  );
};
