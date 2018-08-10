import React, { PureComponent } from 'react';
import { Layout, notification } from 'antd';
import HeaderVisualView from './header/header.page';
import SiderVisualView from './side/side.page';
import ContentVisualView from './content/content.page';
import EditorVisualView from './editor/editor.page';
import style from './visual.module.scss';

/**
 * 实现功能
 * 1、调用子组件，拼装页面
 * 2. 通过父组件传递的guide 控制引导界面的显示
 *
 */
export default class VisualView extends PureComponent {
  componentWillMount() {
    document.title = '易企微 | 一站式微信营销平台';
  }

  componentDidMount = () => {
    if (window.screen.width < 1119) {
      notification['warning']({
        message: '提醒',
        description: `屏幕分辨率过低,请调整视窗缩放比例`,
        duration: 0,
      });
    }
  };

  render() {
    const { Header, Sider, Content } = Layout;
    const editorConfig = {
      collapsedWidth: 0,
      width: 380,
      collapsible: true,
      trigger: null,
      breakpoint: 'md',
    };
    return (
      <Layout className={style.layout}>
        <Header className={style.header}>
          <HeaderVisualView />
        </Header>
        <Layout className={style.content}>
          <Sider style={{ background: 'white' }} width={380}>
            <SiderVisualView />
          </Sider>
          <Content id={'content'} className={style.s}>
            <div style={{ height: '10000px' }}>
              <ContentVisualView />
            </div>
          </Content>
          <Sider className={style.side} {...editorConfig}>
            <div className={style.s}>
              <EditorVisualView />
            </div>
          </Sider>
        </Layout>
      </Layout>
    );
  }
}
