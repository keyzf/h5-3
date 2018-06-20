/**
 * 实现目标：
 * 1. 划分页面布局
 * 2. 组件加载完毕后查询屏幕分辨率，给出提示信息
 */
import React, { PureComponent } from "react";
import { Layout, notification } from "antd";
import QueueAnim from "rc-queue-anim";
import style from "./visual.module.scss";
import {
  VisualContentLoadable,
  VisualEditorLoadable,
  VisualHeaderLoadable,
  VisualSideLoadable,
  VisualUiShowLoadable
} from "../../routers/visual.router";

class VisualView extends PureComponent {
  /**
   * 查询用户屏幕显示比例
   * 如果屏幕分辨率宽度低于1119则显示提示信息
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
      <QueueAnim className={style.layout} type={"right"}>
        <Header className={style.header} key={"animation_one"}>
          <VisualHeaderLoadable/>
        </Header>
        <Layout className={style.content} key={"animation_two"}>
          {/*侧边栏*/}
          <VisualSideLoadable/>
          {/*/!*组件展示选择*!/*/}
          <VisualUiShowLoadable/>
          <Content>
            <VisualContentLoadable/>
          </Content>
          {/*/!*组件展示选择*!/*/}
          <Sider className={style.side} {...editorConfig}>
            <VisualEditorLoadable/>
          </Sider>
        </Layout>
      </QueueAnim>
    );
  }
}

export default VisualView;
