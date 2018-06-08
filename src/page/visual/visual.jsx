import React, { PureComponent } from "react";
import { Layout, notification } from "antd";
import QueueAnim from "rc-queue-anim";
import HeaderVisualView from "./header";
import SiderVisualView from "./sider";
import ContentVisualView from "./content";
import EditorVisualView from "./editor";
import style from  "./_visual_page.css";

/**
 * 实现目标：
 * 1. 划分页面布局
 * 2. 组件加载完毕后查询屏幕分辨率，给出提示信息
 */
class VisualView extends PureComponent {
  /**
   * 查询用户屏幕显示比例
   * 如果屏幕分辨率宽度低于1300则显示提示信息
   */
  componentDidMount = () => {
    if (window.screen.width < 1119) {
      notification["warning"]({
        message: "提醒",
        description: `屏幕分辨率过低,请调整视窗缩放比例`,
        duration: 0
      });
    }
  };

  render() {
    const { Header, Sider, Content } = Layout;


    /**
     * 选择栏 ant design 样式
     * @type {{collapsedWidth: number, width: number, collapsible: boolean, breakpoint: string}}
     */
    const siderConfig = {
      collapsedWidth: 0,
      width: 380,
      collapsible: false,
      breakpoint: "lg"
    };

    /**
     * 编辑栏 ant design 样式
     * @type {{collapsedWidth: number, width: number, collapsible: boolean, trigger: null, breakpoint: string}}
     */
    const editorConfig = {
      collapsedWidth: 0,
      width: 380,
      collapsible: true,
      trigger: null,
      breakpoint: "md"
    };
    return (
      // 入场动画

      <QueueAnim className={style.visual_layout} type={"bottom"}>
        <Header className={"visual_header"} key={"animation_one"}>
          <HeaderVisualView />
        </Header>
        <Layout className={'visual_content'} key={"animation_two"} >
          <Sider className={"visual_sider"} {...siderConfig}>
            <SiderVisualView />
          </Sider>
          <Content>
            <ContentVisualView />
          </Content>
          <Sider className={"visual_sider"} {...editorConfig}>
            <EditorVisualView />
          </Sider>
        </Layout>
      </QueueAnim>
    );
  }
}

export default VisualView;
