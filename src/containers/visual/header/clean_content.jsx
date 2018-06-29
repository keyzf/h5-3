/**
 * 用来清空visual页面中 http中的内容
 */
import React, { PureComponent } from 'react';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import { Icon, Modal, message } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { bg_action, choose_action, select_action } from '../../../redux/action';
import { $$background_database } from '../../../ui/background/background_database';

/**
 * 逻辑：
 * 1. 判断content中的内容是否存在
 * 2. 判断背景组件是否设置内容
 * 3. 如果都设置内容，则将内容全部清空，并给出提示
 * 4. 如果只有背景组件设置内容则全部清空
 * 5. 如果都没有设置内容，则给出提示（还未设置内容）
 */
class CleanContent extends PureComponent {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  clean = () => {
    // 清空核心组件
    this.props.select_upData(List(), '', false);
    // 清空背景组件
    this.props.bg_upData($$background_database, '', false);
    // 更新选择组件
    this.props.choose_upData(
      Map(),
      Map({
        content: false,
        choose: false,
      }),
      false
    );
    this.setState({
      visible: false,
    });
    message.success('内容已清空');
  };

  confirm = () => {
    //判断用户是否设置内容(背景组件)
    const $$color = this.props.bg_value.data.getIn(['customize', 'color']);
    const $$img = this.props.bg_value.data.getIn(['customize', 'img']);
    const $$select_size = this.props.select_value.data.size;
    if ($$color === '' && $$img === '' && $$select_size === 0) {
      Modal.confirm({
        title: '内容清空',
        okText: '确认',
        cancelText: '取消',
        content: '请先在画布中填充内容',
        onOk: this.hideModal,
        onCancel: this.hideModal,
      });
    } else {
      Modal.confirm({
        title: '内容清空',
        okText: '确认',
        cancelText: '取消',
        content: '内容删除后无法恢复,请慎重操作',
        onOk: this.clean,
        onCancel: this.hideModal,
      });
    }
  };

  render() {
    return (
      <div onClick={this.confirm}>
        <QueueAnim type={'bottom'} delay={260}>
          <div key={'1'}>
            <Icon type="delete" style={{ marginRight: '10px' }} />
            内容清空
          </div>
        </QueueAnim>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    bg_upData: (data, meta, error) => dispatch(bg_action(data, meta, error)),
  };
};

const mapStateToProps = state => {
  return {
    bg_value: state.bg_reducer,
    select_value: state.h5_data_reducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CleanContent);
