//visual 页面进行保存操作的按钮
import React, { PureComponent } from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import { redux_action } from '../../../redux/action';
import axios from 'axios/index';
import { $$api } from '../../../api/api.database';

class ToSaveAjax extends PureComponent {
  /**
   * 将信息传递给后台
   * 1. 页面组件
   * 2. 背景组件
   * 3. 用户设置的信息
   */
  onSave = () => {
    const { upDate } = this.props;
    if ($$api.get('surroundings') === 'development') {
      axios
        .get(`${$$api.getIn(['development', 'release_url'])}`)
        .then(function(response) {
          upDate('RELEASE', { url: response.data.url });
          message.success('保存成功');
        });
    }
    if ($$api.get('surroundings') === 'produce') {
      const data = this.props.id_value.data;
      const bg_date = this.props.bg_value.data.toJS();
      const component_date = this.props.h5_data_data.data.toJS();
      const shareMsg_date = this.props.shareMsg_value.data.toJS();

      const ajax_date = {
        id: data.get('id'),
        number: data.get('number'),
        bg_data: bg_date,
        ui_date: component_date,
        shareMsg_data: shareMsg_date,
      };
      let params = new URLSearchParams();
      params.append('id', `${ajax_date}`);
      axios
        .post(`${$$api.getIn(['produce', 'release_url'])}`)
        .then(function(response) {
          upDate('RELEASE', { url: response.data.url });
          message.success('保存成功');
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div onClick={this.onSave}>
        <QueueAnim type={'bottom'} delay={220}>
          <div key={'1'}>
            <i
              className={'icon iconfont icon-baocun'}
              style={{ marginRight: '10px' }}
            />
            保存
          </div>
        </QueueAnim>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bg_value: state.bg_reducer,
    h5_data_data: state.h5_data_reducer,
    shareMsg_value: state.shareMsg_reducer,
    id_value: state.user_id_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upDate: (name, data) => dispatch(redux_action(name, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToSaveAjax);
