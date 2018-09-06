import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Resizable from 're-resizable';
import { Button, Icon, message } from 'antd';
import CanvasRenderUI from '../../../containers/visual/canvasUiEditor';
import BgComponent from '../../../ui/bg/bg_component';
import { redux_action } from '../../../redux/action';
import style from './content.module.scss';

class ContentVisual extends PureComponent {
  // 使用第三方库，更改高度
  changeHeight = (e, direction, ref, d) => {
    const $$bg_data = this.props.bg_ui_value.data;
    const $$height = $$bg_data.getIn(['customize', 'height']);
    this.props.upData(
      'BG_UI',
      $$bg_data.setIn(['customize', 'height'], $$height + d.height)
    );
  };
  // 按钮更改高度，适用于 移动端
  buttonHeight = name => {
    const $$bg_data = this.props.bg_ui_value.data;
    const $$height = $$bg_data.getIn(['customize', 'height']);
    if (name === 'add') {
      this.props.upData(
        'BG_UI',
        $$bg_data.setIn(['customize', 'height'], $$height + 50)
      );
    } else {
      if ($$height === 600) {
        message.warning('画布以至最小值，无法缩减');
      } else {
        this.props.upData(
          'BG_UI',
          $$bg_data.setIn(['customize', 'height'], $$height - 50)
        );
      }
    }
  };

  render() {
    // 提取，背景，h5数据集，当前编辑组件，在reducer中的数据
    const $$editor_ui_data = this.props.editor_ui_value.data;
    const $$bg_data = this.props.bg_ui_value.data;
    const $$h5_data = this.props.h5_data_value.data;
    // 提取背景数据
    const bg_config = {
      color: $$bg_data.getIn(['customize', 'color']),
      img: $$bg_data.getIn(['customize', 'crop_img']),
      height: $$bg_data.getIn(['customize', 'height']),
    };
    // 第三方画板配置
    const resizable = {
      maxWidth: 320,
      minWidth: 320,
      minHeight: 600,
      enable: {
        top: false,
        right: false,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: true,
        bottomLeft: true,
        topLeft: false,
      },
      size: { height: bg_config.height },
      onResizeStop: this.changeHeight,
    };
    return (
      <React.Fragment>
        <div className={style.canvas}>
          <Resizable {...resizable}>
            <BgComponent {...bg_config}>
              {$$h5_data.map((ui_data, index) => {
                return (
                  <CanvasRenderUI
                    key={index}
                    index={index}
                    data={ui_data}
                    choose={index === $$editor_ui_data.get('number')}
                  />
                );
              })}
            </BgComponent>
          </Resizable>
        </div>
        <div className={style.flex_center}>
          <Button.Group className={style.mobile_editor_height}>
            <Button
              type="primary"
              onClick={this.buttonHeight.bind(this, 'add')}
            >
              <Icon type="down" /> 画布加长
            </Button>
            <Button type="primary" onClick={this.buttonHeight}>
              <Icon type="up" /> 画布收缩
            </Button>
          </Button.Group>
          <p className={style.pc_editor_height}>拖动调整高度</p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 当前选择编辑的组件
    editor_ui_value: state.editorUi_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
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
)(ContentVisual);
