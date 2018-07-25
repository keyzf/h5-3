import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import style from './content.module.scss';
import BgComponent from '../../../ui/background/bg_component';
import { redux_action } from '../../../app_feature/redux/action';
import RenderUI from '../../../app_feature/draggable/render_ui';

class ContentVisualView extends PureComponent {
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
      height: $$bg_data.getIn(['advanced', 'height', 'value']),
    };
    console.log(this.props.editor_ui_value.data, $$choose_data.get('number'));
    return (
      <div className={style.template}>
        <BgComponent {...bg_config}>
          {choose_meta.get('content') ? (
            $$select_data.map((ui_data, index) => {
              return (
                <div
                  style={{
                    minWidth: '320px',
                    minHeight: `400px`,
                    overflow: 'auto',
                    position: 'relative',
                  }}
                >
                  <RenderUI
                    key={index}
                    data={ui_data}
                    choose={index === $$choose_data.get('number')}
                    show={
                      $$choose_data.get('com') ? $$choose_data.get('number') : 0
                    }
                    index={index}
                  />
                </div>
              );
            })
          ) : (
            <div className={style.default}>请从左侧选择组件~</div>
          )}
        </BgComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5_data_reducer,
    // 当前选择编辑的组件
    editor_ui_value: state.editor_ui_reducer,
    // 背景组件样式
    bg_ui_value: state.bg_ui_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentVisualView);
