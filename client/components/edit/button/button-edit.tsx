import * as React from "react";
import { Tabs } from "antd";
import ButtonForm from "./form";
import ButtonAdv from "./button-adv";




const ButtonEdit = React.memo(() => {
  const TabPane = Tabs.TabPane;
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="设置" key="1">
        <ButtonForm/>
      </TabPane>
      <TabPane tab="背景" key="2">
        <ButtonAdv/>
      </TabPane>
    </Tabs>
  );
});


export default ButtonEdit;
