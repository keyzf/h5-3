import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { HeaderVisualPC } from './header/headerPC';
import { HeaderVisualMobile } from './header/headerMobile';
import SiderVisualPC from './side/sidePC';
import ContentVisual from './content/content';

import EditorVisual from './editor/editorPC';
import { access_api } from '../../api/access.api';
import { redux_action } from '../../redux/action';
import style from './visual.module.scss';
import { Menu } from 'antd/lib/menu';

/**
 * 创建，编辑页面
 */
class VisualView extends PureComponent {
  /**
   * 1、修改网页标题
   * 2、发送ajax, 获取用户数据
   */
  componentWillMount() {
    // 发送ajax, 获取用户数据
    const { sid, state, upData } = this.props;
    access_api(sid, state, upData)
      .then()
      .catch(error => {
        window.location.href = error;
      });
  }

  render() {
    const editorConfig = {
      collapsedWidth: 0,
      width: 360,
      collapsible: true,
      trigger: null,
      breakpoint: 'md',
    };
    return (
      <Layout className={style.layout}>
        <Layout.Header className={style.header}>
          <HeaderVisualPC />
          <HeaderVisualMobile />
        </Layout.Header>
        <Layout className={style.content}>
          <Layout.Sider className={style.side} {...editorConfig}>
            <SiderVisualPC />
          </Layout.Sider>
          <Layout.Content id={'content'} className={style.content_view}>
            <div className={style.content_hidden}>
              提示：添加组件后，可在画布中进行拖拽，缩放
            </div>
            <div className={style.content_hidden}>
              <a
                href={'http://www.e7wei.com/help-article-id-436.html'}
                target={'view_window'}
              >
                使用帮助
              </a>
            </div>
            {/*bug 修复托动画版至底部时，画板抖动问题*/}
            <div className={style.content_mobile}>
              {/*画布*/}
              <ContentVisual />
            </div>
          </Layout.Content>
          <Layout.Sider className={style.side} {...editorConfig}>
            <EditorVisual />
          </Layout.Sider>
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
