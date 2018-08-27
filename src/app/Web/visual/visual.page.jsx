import React, { PureComponent } from 'react';
import { Layout, notification } from 'antd';
import HeaderVisualView from './header/header.page';
import SiderVisualView from './side/side.page';
import ContentVisualView from './content/content.page';
import EditorVisualView from './editor/editor.page';
import style from './visual.module.scss';
import { access_api } from '../../../api/access.api';
import { redux_action } from '../../../database/redux/action';
import connect from 'react-redux/es/connect/connect';

class VisualView extends PureComponent {
  componentWillMount() {
    document.title = '易企微 | 一站式微信营销平台';
    access_api(this.props.sid, this.props.state, this.props.upData)
      .then()
      .catch(error => {
        window.location.href = error;
      });
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

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VisualView);
