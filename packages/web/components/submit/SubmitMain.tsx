import { Tabs } from 'antd';
import { FC } from 'react';
import { MainChoser } from './main/MainChoser';
const TabPane = Tabs.TabPane;

interface SubmitMainProps {}
export const SubmitMain: FC = () => {
  return (
    <>
      <MainChoser />
      <Tabs>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    </>
  );
};
