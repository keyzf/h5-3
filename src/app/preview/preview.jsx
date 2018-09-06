import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import HeaderPreviewView from './header/header';
import PhoneCommonView from './content/phone';
import EditorPreviewView from './editor/editor';
import { access_api } from '../../api/access.api';
import { redux_action } from '../../redux/action';
import style from './preview.module.scss';

class PreviewView extends PureComponent {
  /**
   * 修改网页title标签
   * 获取用户相关数据
   */
  componentWillMount() {
    access_api(this.props.sid, this.props.state, this.props.upData)
      .then(() => {
        return '';
      })
      .catch(error => {
        window.location.href = error;
      });
  }

  /**
   * 尝试开启音频
   * @returns {string}
   */
  componentDidMount() {
    try {
      document.getElementById('h5_audio').play();
    } catch (error) {
      return '';
    }
  }

  render() {
    return (
      <div className={style.layout}>
        <Layout.Header className={style.header}>
          <HeaderPreviewView />
        </Layout.Header>
        <Layout style={{ height: 'calc(100% - 48px)' }}>
          <Layout.Content className={style.side}>
            <PhoneCommonView />
          </Layout.Content>
          <Layout.Sider className={style.side} width={450}>
            <div className={style.scrollbar}>
              <EditorPreviewView />
            </div>
          </Layout.Sider>
          <Layout.Content className={style.content_mobile}>
            <div className={style.scrollbar}>
              <EditorPreviewView />
            </div>
          </Layout.Content>
        </Layout>
      </div>
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
)(PreviewView);
