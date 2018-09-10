import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal, Divider } from 'antd';
import { random } from '../../utils/random/random';
import { redux_action } from '../../redux/action';
import BgEditor from '../../ui/bg/bg_editor';
import EditorMusic from '../../ui/music/music_editor';
import InterActiveSelect from '../../app/visual/side/interactive';
import style from '../../app/visual/side/side.module.scss';
import { textData } from '../../ui/text/textData';
import { imgData } from '../../ui/img/imgData';

class VisualSideModel extends PureComponent {
  state = {
    visible: false,
    data: '',
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });

    this.props.upData('H5_DATA', this.state.data);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  /**
   * 向h5数据源中添加组件数据
   * @param name 组件名称
   * @param ui_data 组件数据
   */
  addH5Ui = (name, ui_data) => {
    const { data } = this.props.h5_data_value;
    const push_data = name === 'text' ? ui_data(random()) : ui_data;
    const select_up_data = data.push(push_data);
    this.setState({
      data: select_up_data,
    });
    // this.props.upData('H5_DATA', select_up_data);
    this.props.upData('EDITOR_UI', {
      number: select_up_data.size - 1,
      data: push_data,
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
          onCancel={this.handleCancel}
          cancelText={'取消'}
          okText={'确认'}
        >
          <div style={{ height: '320px', overflow: 'auto' }}>
            {this.props.name === 'text' ? (
              <div className={style.sideContent}>
                {textData.map((ui_data, index) => {
                  return (
                    <div key={index}>
                      {ui_data.data === 'dividing-line' ? (
                        <Divider orientation="left" key={index}>
                          设计师推荐
                        </Divider>
                      ) : (
                        <div
                          className={style.components_hover}
                          key={index}
                          onClick={this.addH5Ui.bind(
                            this,
                            'text',
                            ui_data.data
                          )}
                        >
                          <div style={{ pointerEvents: 'none' }}>
                            {ui_data.template}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              ''
            )}
            {this.props.name === 'img' ? (
              <div className={style.sideContent}>
                {imgData.map((ui_data, index) => {
                  return (
                    <div key={index}>
                      {ui_data.data === 'dividing-line' ? (
                        <Divider orientation="left" key={index}>
                          设计师推荐
                        </Divider>
                      ) : (
                        <div
                          className={style.components_hover}
                          key={index}
                          onClick={this.addH5Ui.bind(this, 'img', ui_data.data)}
                        >
                          <div style={{ pointerEvents: 'none' }}>
                            {ui_data.template}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              ''
            )}
            {this.props.name === 'music' ? <EditorMusic /> : ''}
            {this.props.name === 'bg' ? <BgEditor /> : ''}
            {this.props.name === 'more' ? <InterActiveSelect /> : ''}
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
)(VisualSideModel);
