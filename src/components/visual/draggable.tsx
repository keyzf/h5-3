import * as React from 'react';
import { observer, inject } from 'mobx-react';
import keydown, { ALL_KEYS } from 'react-keydown';
import ResizableRect from '../../utils/rnd/ResizableRect';

interface Props {
  // position
  width: number;
  height: number;
  left: number;
  top: number;
  rotate: number;
  index: number;
  zIndex: number;
  actions?: any;
  computes?: any;
}

@inject('actions', 'computes')
@observer
class Draggable extends React.Component<Props, any> {
  /**
   * 绑定键盘
   */
  @keydown(ALL_KEYS)
  onKeyDown(event) {
    const { actions, index } = this.props;
    switch (event.which) {
      case 8:
        actions.editorUiItem('delete', '', index);
        break;
      case 86:
        actions.editorUiItem('copy', '', index);
        break;
      case 37:
        actions.editorUiItem('move_left', '', index);
        break;
      case 38:
        actions.editorUiItem('move_up', '', index);
        break;
      case 39:
        actions.editorUiItem('move_right', '', index);
        break;
      case 40:
        actions.editorUiItem('move_down', '', index);
        break;
    }
  }

  handleResize = style => {
    const { top, left, width, height } = style;
    const { actions, index } = this.props;
    actions.editorUiItem(
      'resize',
      {
        top: Math.round(top),
        left: Math.round(left),
        width: Math.round(width),
        height: Math.round(height),
      },
      index,
    );
  };

  handleRotate = rotateAngle => {
    const { actions, index } = this.props;
    actions.editorUiItem('rotate', rotateAngle, index);
  };

  handleDrag = (deltaX, deltaY) => {
    const { actions } = this.props;
    actions.editorUiItem('drag', { top: deltaY, left: deltaX });
  };

  render() {
    const { width, top, left, height, rotate, zIndex } = this.props;

    return (
      <ResizableRect
        left={left}
        top={top}
        width={width}
        height={height}
        rotateAngle={rotate}
        zoomable="n, w, s, e, nw, ne, se, sw"
        onRotate={this.handleRotate}
        onResize={this.handleResize}
        onDrag={this.handleDrag}
        zIndex={zIndex}
      >
        <div
          style={{
            boxSizing: 'border-box',
            overflow: 'hidden',
            pointerEvents: 'none',
            userSelect: 'none',
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {this.props.children}
        </div>
      </ResizableRect>
    );
  }
}

export default Draggable;
