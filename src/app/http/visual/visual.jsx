import React from "react";
import { Layout } from "antd";
import QueueAnim from "rc-queue-anim";
import HeaderVisualView from "./header";
import SiderVisualView from "./sider";
// import HeaderVisualView from "./header";
// import SiderVisualView from "./sider"; //动画
// import ContentVisualView from "../../model/visual_content";
import EditorVisualView from "../../model/visual_editor";

class VisualView extends React.Component {
  render() {
    const layout = {
      style: {
        height: "100vh",
        width: "100%",
        overflow: "hidden"
      }
    };
    const header = {
      style: {
        height: "6%",
        background:
          "linear-gradient(to bottom right, #5ea2ff, #00b9ff, #00caff)"
      }
    };
    const content = {
      style: {
        height: "95%"
      }
    };
    const siderConfig = {
      style: {
        background: "white",
        boxShadow: " 0 13px 24px -11px rgba(33, 33, 33, 0.6)",
        height: "100%"
      },
      collapsible: true,
      collapsedWidth: 0,
      width: 400,
      breakpoint: "xl"
    };
    const editorConfig = {
      style: { background: "white" },
      collapsible: true,
      trigger: null,
      width: 400,
      breakpoint: "md"
    };
    return (
      <QueueAnim type={"bottom"} {...layout}>
        <Layout.Header {...header} key={"animation_one"}>
          <HeaderVisualView/>
        </Layout.Header>
        <Layout {...content} key={"animation_two"}>
          <Layout.Sider {...siderConfig}>
            <SiderVisualView/>
          </Layout.Sider>
          <Layout.Content style={{ height: "100%" }}>
            {/*<ContentVisualView/>*/}
          </Layout.Content>
          <Layout.Sider {...editorConfig}>
            <EditorVisualView/>
          </Layout.Sider>
        </Layout>
      </QueueAnim>
    );
  }
}

export default VisualView;
