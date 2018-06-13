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

export { MusicUi };
