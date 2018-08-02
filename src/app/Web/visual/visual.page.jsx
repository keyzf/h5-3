import React, { PureComponent } from 'react';
import { Layout, notification } from 'antd';
import { Steps } from 'intro.js-react';
import HeaderVisualView from './header/header.page';
import SiderVisualView from './side/side.page';
import ContentVisualView from './content/content.page';
import EditorVisualView from './editor/editor.page';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';
import style from './visual.module.scss';

/**
 * 实现功能
 * 1、调用子组件，拼装页面
 * 2. 通过父组件传递的guide 控制引导界面的显示
 *
 */
export default class VisualView extends PureComponent {
  state = {
    stepsEnabled: this.props.guide,
    initialStep: 0,
    steps: [
      {
        element: `.side`,
        intro: '在这里选择你想要使用的组件，内有大量设计师推荐组件',
      },
      {
        element: `.content`,
        intro: '此处用来制作h5页面，选中组件后，可对组件进行拖拽缩放，等操作',
      },
      {
        element: `.editor`,
        intro:
          '编辑栏，用来对选中的组件进行内容设置，高级设置中有更多功能，欢迎使用',
      },
    ],
  };

  componentDidMount = () => {
    if (window.screen.width < 1119) {
      notification['warning']({
        message: '提醒',
        description: `屏幕分辨率过低,请调整视窗缩放比例`,
        duration: 0,
      });
    }
  };

  onExit = () => {
    this.setState({ stepsEnabled: false });
  };

  render() {
    const { stepsEnabled, steps, initialStep } = this.state;
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
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
          options={{
            nextLabel: '下一步',
            prevLabel: '上一步',
            skipLabel: '退出引导',
            doneLabel: '完成',
            showProgress: false,
            showBullets: false,
          }}
        />
        <Header className={style.header}>
          <HeaderVisualView />
        </Header>
        <Layout className={style.content}>
          <Sider style={{ background: 'white' }} width={380}>
            <SiderVisualView />
          </Sider>
          <Content>
            <div className={'content'}>
              <ContentVisualView />
            </div>
          </Content>
          <Sider className={style.side} {...editorConfig}>
            <div className={'editor'}>
              <EditorVisualView />
            </div>
          </Sider>
        </Layout>
      </Layout>
    );
  }
}