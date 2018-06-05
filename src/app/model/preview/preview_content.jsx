import React from 'react';
import { connect } from 'react-redux';
import { select_action } from '../../../redux/action';
import BgComponent from '../../../components/visual/background/bg_component';
import { preview_render_component } from '../render/preview_components';

class ContentPreviewModel extends React.Component {
  render() {
    const select_data = this.props.select_value.data;
    const customize = this.props.bg_value.data.get('customize');
    // 背景属性
    const bg_config = {
      color: customize.get('color'),
      img: customize.get('img'),
      repeat: customize.get('img_config').get('tiling'),
      attachment: customize.get('img_config').get('locking'),
    };
    return (
      <div style={{ width: '100%', height: '600px' }}>
        <BgComponent {...bg_config}>
          <div style={{ overflow: 'auto', width: '100%', height: '100%' }}>
            {select_data.map((ui_data, index) => {
              return <div key={index}>{preview_render_component(ui_data)}</div>;
            })}
          </div>
        </BgComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer,
    bg_value: state.bg_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
  };
};

// hoc 包装组件
export default connect(mapStateToProps, mapDispatchToProps)(
  ContentPreviewModel
);
