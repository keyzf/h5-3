/**
 * 用来清空content page 中的内容
 */
import React from 'react';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import { Icon, Modal, message } from 'antd';
import { choose_action, select_action } from '../../redux/action';

class CleanContent extends React.Component {
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
    this.props.select_upData(List(), '', false);
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
  };

  confirm = () => {
    Modal.confirm({
      title: '内容清空',
      okText: '确认',
      cancelText: '取消',
      content: '内容删除后无法恢复,确认清空?',
      onOk: this.clean,
      onCancel: this.hideModal,
    });
  };

  render() {
    const $$select_data = this.props.select_value.data;
    const info = () => {
      message.info('内容栏暂无内容');
    };
    return (
      <React.Fragment>
        {$$select_data.size ? (
          <div onClick={this.confirm} style={{ color: 'white' }}>
            <Icon type="delete" style={{ marginRight: '10px' }} />
            内容清空
          </div>
        ) : (
          <div style={{ color: 'white' }} onClick={info}>
            <Icon type="delete" style={{ marginRight: '10px' }} />
            内容清空
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CleanContent);
