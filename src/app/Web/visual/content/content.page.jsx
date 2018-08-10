import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RenderUI from '../../../Middleware/draggable/render_ui';
import BgComponent from '../../../../resources/background/bg_component';
import { redux_action } from '../../../../database/redux/action';
import Resizable from 're-resizable';
import style from './content.module.scss';

class ContentVisualView extends PureComponent {
  changeHeight = (e, direction, ref, d) => {
    const $$bg_data = this.props.bg_ui_value.data;
    const $$height = $$bg_data.getIn(['customize', 'height']);
    this.props.upData(
      'BG_UI',
      $$bg_data.setIn(['customize', 'height'], $$height + d.height)
    );
  };

  render() {
    const choose_meta = this.props.editor_ui_value.meta;
    const $$choose_data = this.props.editor_ui_value.data;
    const $$bg_data = this.props.bg_ui_value.data;
    const $$select_data = this.props.h5_data_value.data;
    const bg_config = {
      color: $$bg_data.getIn(['customize', 'color']),
      img: $$bg_data.getIn(['customize', 'crop_img']),
      repeat: $$bg_data.getIn(['customize', 'img_config', 'repeat']),
      fixed: $$bg_data.getIn(['customize', 'img_config', 'fixed']),
      height: $$bg_data.getIn(['customize', 'height']),
    };
    return (
      <React.Fragment>
        <div className={style.template}>
          <Resizable
            maxWidth={320}
            minHeight={600}
            size={{ height: bg_config.height }}
            onResizeStop={this.changeHeight}
          >
            <BgComponent {...bg_config}>
              {choose_meta.get('content') ? (
                $$select_data.map((ui_data, index) => {
                  return (
                    <RenderUI
                      par_height={bg_config.height}
                      key={index}
                      data={ui_data}
                      choose={index === $$choose_data.get('number')}
                      index={index}
                    />
                  );
                })
              ) : (
                <div className={style.default}>请从左侧选择组件~</div>
              )}
            </BgComponent>
          </Resizable>
        </div>
        <div className={'flex_center'}>
          <p>拖动调整高度</p>
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
)(ContentVisualView);
