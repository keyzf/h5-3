import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BgComponent from '../../ui/bg/bg_component';
import { render_ui } from '../renderUi';
import { ItemAtom } from './item_atom';
import { redux_action } from '../../redux/action';
import MusicUi from '../../ui/music/core/music_ui';

class H5Render extends PureComponent {
  render() {
    const select_data = this.props.h5_data_value.data;
    const customize = this.props.bg_ui_value.data.get('customize');
    // 背景属性
    const bg_config = {
      color: customize.get('color'),
      img: customize.get('crop_img'),
      height: this.props.bg_ui_value.data.getIn(['customize', 'height']),
    };
    return (
      <BgComponent {...bg_config}>
        {this.props.music_ui_value.data.get('music_url') ? (
          <div
            style={{
              position: 'absolute',
              zIndex: '999',
              top: '28px',
              left: '8px',
            }}
          >
            <MusicUi />
          </div>
        ) : (
          ''
        )}
        <div
          style={{
            position: 'absolute',
            zIndex: '999',
            lineHeight: '25px',
            top: '28px',
            right: '0',
          }}
        >
          <div
            style={{
              borderRadius: '10px',
              background: 'rgba(0,0,0,0.4)',
              color: 'white',
              marginRight: '5px',
            }}
          >
            &nbsp;
            <a
              href={`${
                window.location.origin
              }/View/reports/sid/${this.props.sid_value.data.get('sid')}.html`}
              target="view_window"
              style={{ color: 'white', fontSize: '12px' }}
            >
              投诉
            </a>
            &nbsp;
          </div>
        </div>
        {select_data.map((ui_data, index) => {
          const advanced_settings = {
            // 动画移动
            top: ui_data.getIn(['advance', 'top']),
            left: ui_data.getIn(['advance', 'left']),
            // 周长
            width: ui_data.getIn(['advance', 'width']),
            height: ui_data.getIn(['advance', 'height']),
            // 颜色
            rotate: ui_data.getIn(['advance', 'rotate']),
            zIndex: ui_data.getIn(['advance', 'zIndex']),
          };
          return (
            <ItemAtom {...advanced_settings} key={index}>
              {render_ui(ui_data)}
            </ItemAtom>
          );
        })}
        <div
          className={'flex_center'}
          style={{
            position: 'absolute',
            zIndex: '9999',
            bottom: 0,
            lineHeight: '20px',
          }}
        >
          <div
            style={{
              borderRadius: '50px',
              background: 'rgba(0,0,0,0.4)',
              marginBottom: '5px',
            }}
          >
            <a
              href={'http://m.e7wei.com'}
              style={{ color: 'white', fontSize: '12px' }}
            >
              &nbsp;&nbsp;&nbsp; 技术支持 >> 易企微&nbsp;&nbsp;&nbsp;
            </a>
          </div>
        </div>
      </BgComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
    music_ui_value: state.musicUi_rdc,
    sid_value: state.sid_rdc,
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
)(H5Render);
