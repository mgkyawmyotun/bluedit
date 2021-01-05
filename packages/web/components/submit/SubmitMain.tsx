import { Tabs } from 'antd';
import { FC } from 'react';
import { MainChoser } from './main/MainChoser';
import { MainTap } from './main/MainTab';
const TabPane = Tabs.TabPane;

interface SubmitMainProps {}
export const SubmitMain: FC = () => {
  return (
    <>
      <MainChoser />
      <MainTap />
    </>
  );
};
