import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { save_ajax } from '../../api_server/pro/save.api';

class BtnSave extends PureComponent {
  onSave = () => {
    // 上传进度动画
    NProgress.start();
    const data = {
      sid: this.props.sid_value.data.get('sid'),
      bg: this.props.bg_ui_value.data.toJS(),
      ui: this.props.h5_data_value.data.toJS(),
      cover: this.props.shareMsg_value.data.get('cover'),
      desc: this.props.shareMsg_value.data.get('desc'),
      title: this.props.shareMsg_value.data.get('title'),
    };
    // ajax
    save_ajax(data)
      .then(() => {
        NProgress.done();
        if (!this.props.save) {
          message.success('发布成功');
          this.props.history.push('/release');
        } else {
          message.success('保存成功');
        }
      })
      .catch(() => {
        NProgress.done();
        if (!this.props.save) {
          message.error('发布失败,请重试');
        } else {
          message.error('保存失败，请重试');
        }
      });
  };

  render() {
    return (
      <div onClick={this.onSave} key={'1'}>
        {this.props.save ? (
          <React.Fragment>
            <i
              className={'icon iconfont icon-baocun'}
              style={{ marginRight: '10px' }}
            />
            保存
          </React.Fragment>
        ) : (
          <React.Fragment>
            <i
              className={'icon iconfont icon-fabu'}
              style={{ marginRight: '10px' }}
            />
            发布
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5_data_reducer,
    // 用户分享H5的传播信息
    shareMsg_value: state.shareMsg_reducer,
    // 背景组件样式
    bg_ui_value: state.bg_ui_reducer,
    // 解析url,获取用户id
    sid_value: state.sid_reducer,
  };
};

export default withRouter(connect(mapStateToProps)(BtnSave));
