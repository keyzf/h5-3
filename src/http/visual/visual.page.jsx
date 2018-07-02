import React, { PureComponent } from 'react';
import { Layout, notification } from 'antd';
import { Steps } from 'intro.js-react';
import { connect } from 'react-redux';
import SiderVisualView from './side.page';
import HeaderVisualView from './header.page';
import VisualUiShowView from './ui_show.page';
import EditorVisualView from './editor.page';
import ContentVisualView from './content.page';
import style from './visual.module.scss';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';

class VisualView extends PureComponent {
  state = {
    stepsEnabled: this.props.guide_value.data.get('guide'),
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
        element: `.${style.side}`,
        intro:
          '编辑栏，用来对选中的组件进行内容设置，高级设置中有更多功能，欢迎使用',
      },
    ],
  };

  /**
   * 退出引导
   */
  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

  /**
   * 查询用户屏幕显示比例
   * 如果屏幕分辨率宽度低于1119则显示提示信息
   */
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
          <SiderVisualView className={'side'} />
          <VisualUiShowView />
          <Content>
            <div className={'content'}>
              <ContentVisualView />
            </div>
          </Content>
          <Sider className={style.side} {...editorConfig}>
            <EditorVisualView />
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    guide_value: state.guide_reducer,
  };
};

export default connect(mapStateToProps, '')(VisualView);
