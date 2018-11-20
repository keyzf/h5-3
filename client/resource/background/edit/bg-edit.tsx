import * as React from "react";
import { Tabs, Button, Icon } from "antd";
import BgEditColor from "./color";
import BgEditImg from "./img";

const BgEdit = React.memo(() => {
  const TabPane = Tabs.TabPane;
  const operations = (
    <Button htmlType={"button"} style={{ marginRight: "5px" }} type="dashed">
      <Icon type="upload" theme="outlined"/>
      上传背景
    </Button>
  );

  return (
    <Tabs tabBarExtraContent={operations}>
      <TabPane tab="背景设置" key="1" style={{ padding: "0 5px" }}>
        <p>背景色</p>
        <BgEditColor/>
        <br/>

        <p>背景图</p>
        <BgEditImg/>
      </TabPane>
    </Tabs>
  );
});

export default BgEdit;
