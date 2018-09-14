import React, { PureComponent } from 'react';
import connect from 'react-redux/es/connect/connect';
import { RotateAtom } from './rotat_animation';

/**
 * 音乐组件
 */
class MusicUi extends PureComponent {
  state = {
    onClickStop: false,
  };

  componentDidMount() {
    this.props.music_ui_value.data.get('music_url')
      ? this.onClickStop('stop')
      : '';
  }

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
        <audio
          id={'h5_audio'}
          loop={'loop'}
          src={this.props.music_ui_value.data.get('music_url')}
        />
        {this.state.onClickStop ? (
          <div
            onClick={this.onClickStop.bind(this, 'stop')}
            className={'flex_center'}
            style={{
              borderRadius: '50px',
              width: '25px',
              height: '25px',
              background: 'rgba(0,0,0,0.4)',
              padding: '6px',
            }}
          >
            <i
              style={{
                padding: 0,
                margin: '0',
                color: 'white',
                fontSize: '18px',
              }}
              className={'iconfont icon-yinfu'}
            />
          </div>
        ) : (
          <div
            onClick={this.onClickStop.bind(this, 'open')}
            className={'flex_center'}
            style={{
              borderRadius: '50px',
              width: '25px',
              height: '25px',
              background: 'rgba(0,0,0,0.4)',
              padding: '6px',
            }}
          >
            <RotateAtom>
              <i
                style={{
                  padding: 0,
                  margin: 0,
                  color: 'white',
                  fontSize: '18px',
                }}
                className={'iconfont icon-yinfu'}
              />
            </RotateAtom>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 音乐
    music_ui_value: state.musicUi_rdc,
  };
};

export default connect(mapStateToProps)(MusicUi);
