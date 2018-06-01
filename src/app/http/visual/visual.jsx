import React from "react";
import { Layout, notification } from "antd";
import QueueAnim from "rc-queue-anim";
import HeaderVisualView from "./header";
import SiderVisualView from "./sider";
import ContentVisualView from "../../model/visual/visual_content";
import EditorVisualView from "../../model/visual/visual_editor";

/**
 * 实现目标：
 * 1. 划分页面布局
 * 2. 组件加载完毕后查询屏幕分辨率，给出提示信息
 */
class VisualView extends React.Component {
  /**
   * 查询用户屏幕显示比例
   * 如果屏幕分辨率宽度低于1300则显示提示信息
   */
  componentDidMount = () => {
    if (window.screen.width < 1300) {
      notification.open({
        message: "通知",
        description: "屏幕分辨率过低,请调整视窗缩放比例。",
        duration: 0
      });
    }
  };

  render() {
    const { Header, Sider, Content } = Layout;

    //style
    const layout = {
      style: {
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box"
      }
    };
    const header = {
      style: {
        boxSizing: "border-box",
        height: "6%",
        background:
          "linear-gradient(to bottom right, #5ea2ff, #00b9ff, #00caff)"
      }
    };
    const content = {
      style: {
        boxSizing: "border-box",
        height: "95%"
      }
    };

    // 侧边栏样式及属性
    const siderConfig = {
      style: {
        background: "white",
        boxShadow: " 0 13px 24px -11px rgba(33, 33, 33, 0.6)",
        height: "100%"
      },
      collapsible: true,
      collapsedWidth: 0,
      width: 400,
      breakpoint: "md"
    };
    const editorConfig = {
      style: { background: "white" },
      collapsible: true,
      collapsedWidth: 0,
      trigger: null,
      width: 400,
      breakpoint: "md"
    };

    return (
      // 入场动画
      <QueueAnim type={"bottom"} {...layout}>
        <Header {...header} key={"animation_one"}>
          <HeaderVisualView/>
        </Header>
        <Layout {...content} key={"animation_two"}>
          <Sider {...siderConfig}>
            <SiderVisualView/>
          </Sider>
          <Content>
            <ContentVisualView/>
          </Content>
          <Sider {...editorConfig}>
            <EditorVisualView/>
          </Sider>
        </Layout>
      </QueueAnim>
    );
  }
}

export default VisualView;
