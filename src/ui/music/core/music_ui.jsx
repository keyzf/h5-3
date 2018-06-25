import React from 'react';
import { RotateAtom } from './rotat_animation';

/**
 * 音乐组件
 */
class MusicUi extends React.Component {
  render() {
    return (
      <RotateAtom>
        <span>
          <i
            className={'iconfont icon-yinlemusic214'}
            style={{ color: 'red' }}
          />
        </span>
      </RotateAtom>
    );
  }
}

class ProMusicUi extends React.Component {
  render() {
    return (
      <RotateAtom>
        <span>
          <i
            className={'iconfont icon-yinlemusic214'}
            style={{ color: 'red' }}
          />
        </span>
        <audio autoplay="autoplay">
          <source
            src={this.props.data.getIn(['customize', 'music'])}
            type="audio/ogg"
          />
          <source
            src={this.props.data.getIn(['customize', 'music'])}
            type="audio/mpeg"
          />
        </audio>
      </RotateAtom>
    );
  }
}

export { MusicUi, ProMusicUi };
