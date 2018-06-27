/**
 * 实现目标：
 * 1. 划分页面布局
 * 2. 组件加载完毕后查询屏幕分辨率，给出提示信息
 */
import React, { PureComponent } from 'react';
import { Layout, notification } from 'antd';
import { Steps } from 'intro.js-react';
import style from './visual.module.scss';
import {
  VisualContentLoadable,
  VisualEditorLoadable,
  VisualHeaderLoadable,
  VisualSideLoadable,
  VisualUiShowLoadable,
} from '../../routers/visual.router';
import 'intro.js/introjs.css';
import { connect } from 'react-redux';

/**
 * visual 页面父级组件
 */
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
  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };
  /**
   * 查询用户屏幕显示比例
   * 如果屏幕分辨率宽度低于1119则显示提示信息
   */
  componentDidMount = () => {
    if (window.screen.width < 1148) {
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
      <React.Fragment>
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
        />
        <div className={style.layout}>
          <Header className={style.header}>
            <VisualHeaderLoadable />
          </Header>
          <Layout className={style.content}>
            {/*侧边栏*/}
            <div className={'side'} style={{ backgroundColor: 'white' }}>
              <VisualSideLoadable />
            </div>
            <VisualUiShowLoadable />
            <Content>
              <div className={'content'}>
                <VisualContentLoadable />
              </div>
            </Content>
            <Sider className={style.side} {...editorConfig}>
              <VisualEditorLoadable />
            </Sider>
          </Layout>
        </div>
      </React.Fragment>
    );
  }
}

// Map Redux state to component props
const mapStateToProps = state => {
  return {
    guide_value: state.guide_reducer,
  };
};

export default connect(mapStateToProps, '')(VisualView);
