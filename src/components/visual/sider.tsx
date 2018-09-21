import * as React from "react";
import Tabs from "antd/lib/tabs";
import ChooseSideUi from "../../containers/choosSideUi";

class VisualSider extends React.Component<any, any> {
  render() {
    return (
      <Tabs
        defaultActiveKey={"1"}
        tabPosition={"left"}
        style={{ height: "100%" }}
      >
        <Tabs.TabPane
          style={{
            marginLeft: " -24px"
          }}
          key={"1"}
          tab={
            <span>
              <i
                className={"iconfont icon-wenzixiaoguo"}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br/>
              文字
            </span>
          }
        >
          <ChooseSideUi name={"text"}/>
        </Tabs.TabPane>
        <Tabs.TabPane
          style={{
            marginLeft: " -24px"
          }}
          key={"2"}
          tab={
            <span>
              <i
                className={"iconfont icon-tupian"}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br/>
              图片
            </span>
          }
        >
          2
        </Tabs.TabPane>
        <Tabs.TabPane
          style={{
            marginLeft: " -24px"
          }}
          key={"3"}
          tab={
            <span>
              <i
                className={"icon iconfont icon-beijing"}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br/>
              背景
            </span>
          }
        >
          3
        </Tabs.TabPane>
        <Tabs.TabPane
          style={{
            marginLeft: " -24px"
          }}
          key={"4"}
          tab={
            <span>
              <i
                className={"iconfont icon-yinlemusic214"}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br/>
              音乐
            </span>
          }
        >
          4
        </Tabs.TabPane>
        <Tabs.TabPane
          style={{
            marginLeft: " -24px"
          }}
          key={"5"}
          tab={
            <span>
              <i
                className={"icon iconfont icon-yingyong"}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br/>
              更多
            </span>
          }
        >
          5
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default VisualSider;
