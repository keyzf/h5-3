import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { redux_action } from '../../../redux/action';
import EditorVisualView from './editorPC';

class EditorModel extends PureComponent {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <div onClick={this.showModal}>{this.props.child}</div>
        <Modal
          title="组件选择"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          okText={'确认'}
          cancelText={'关闭'}
        >
          <div style={{ height: '300px' }}>
            <EditorVisualView />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 当前选择编辑的组件
    editor_ui_value: state.editorUi_rdc,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorModel);
