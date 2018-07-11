import React, { PureComponent } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Icon, Modal, message } from 'antd';
import connect from '../../../redux/decorator';
import { $$background_database } from "../../../../_new_ui/background/background.database";


@connect
export  class BtnCleanContent extends PureComponent {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };
  clean = () => {
    this.props.upData('H5_DATA', []);
    this.props.upData('BG_UI', $$background_database);
    this.props.upData('CHOOSE_UI', {}, {
        content: false,
        choose: false,
      });
    this.setState({
      visible: false,
    });
    message.success('内容已清空');
  };
  confirm = () => {
    //判断用户是否设置内容(背景组件)
    const $$color = this.props.bg_ui_value.data.getIn(['customize', 'color']);
    const $$img = this.props.bg_ui_value.data.getIn(['customize', 'img']);
    const $$select_size = this.props.h5_data_value.data.size;
    if ($$color === '' && $$img === '' && $$select_size === 0) {
      Modal.confirm({
        title: '内容清空',
        okText: '确认',
        cancelText: '取消',
        content: '请先在画布中填充内容',
        onOk: this.closeModal,
        onCancel: this.closeModal,
      });
    } else {
      Modal.confirm({
        title: '内容清空',
        okText: '确认',
        cancelText: '取消',
        content: '内容删除后无法恢复,请慎重操作',
        onOk: this.clean,
        onCancel: this.closeModal,
      });
    }
  };

  render() {
    return (
      <div onClick={this.confirm}>
        <QueueAnim type={'bottom'} delay={260}>
          <div key={'animation_one'}>
            <Icon type="delete" style={{ marginRight: '10px' }} />
            内容清空
          </div>
        </QueueAnim>
      </div>
    );
  }
}
