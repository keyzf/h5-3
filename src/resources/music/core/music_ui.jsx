import React from 'react';
import wx from 'weixin-js-sdk';
import axios from 'axios';
import { redux_action } from '../../../database/redux/action';
import connect from 'react-redux/es/connect/connect';
import { RotateAtom } from './rotat_animation';

/**
 * 音乐组件
 */
class MusicUi extends React.Component {
  render() {
    return <div />;
  }
}

class ProMusicUi extends React.Component {
  state = {
    onClickStop: false,
  };

  onClickStop = name => {
    if (name === 'open') {
      document.getElementById('h5_audio').pause();
      this.setState({
        onClickStop: true,
      });
    }
    if (name === 'stop') {
      document.getElementById('h5_audio').play();
      this.setState({
        onClickStop: false,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <audio id={'h5_audio'}>
          <source src={this.props.data.getIn(['customize', 'music'])} />
        </audio>
        {this.state.onClickStop ? (
          <div
            onClick={this.onClickStop.bind(this, 'stop')}
            style={{
              borderRadius: '50px',
              width: '30px',
              height: '30px',
              background: 'rgba(0,0,0,0.4)',
              padding: '6px',
            }}
          >
            <div
              className={'flex_center'}
              style={{ transform: 'translate(0,-3px)' }}
            >
              <i
                style={{ padding: 0, margin: '0', color: 'white' }}
                className={'iconfont icon-yinfu'}
              />
            </div>
          </div>
        ) : (
          <div
            onClick={this.onClickStop.bind(this, 'open')}
            style={{
              borderRadius: '50px',
              width: '30px',
              height: '30px',
              background: 'rgba(0,0,0,0.4)',
              padding: '6px',
            }}
          >
            <div
              className={'flex_center'}
              style={{ transform: 'translate(0,-3px)' }}
            >
              <RotateAtom>
                <i
                  style={{ padding: 0, margin: '0', color: 'white' }}
                  className={'iconfont icon-yinfu'}
                />
              </RotateAtom>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
    //
    shareMsg_value: state.shareMsg_rdc,
    //
    release_value: state.release_rdc,
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
)(ProMusicUi);

export { MusicUi };
