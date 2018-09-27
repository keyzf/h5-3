import * as React from 'react';
import { observer } from 'mobx-react';
import keydown, { ALL_KEYS } from 'react-keydown';
import ResizableRect from '../../utils/rnd/ResizableRect';
import MxStore from '../../mobx/store';

interface Props {
  // position
  width: number;
  height: number;
  left: number;
  top: number;
  rotate: number;
  index: number;
  zIndex: number;

  // 整个数据集
  uiData: {
    common: { name };
    position: {
      zIndex: number;
      width: number;
      height: number;
      left: number;
      top: number;
      rotate: number;
    };
    base: { html };
  },

}

@observer
class Draggable extends React.Component<Props, any> {

  /**
   * 绑定键盘
   */
  @keydown(ALL_KEYS)
  onKeyDown(event) {
    const { uiData, index } = this.props;
    switch (event.which) {
      case 8:
        MxStore.optUi('delete', index);
        break;
      case 37:
        uiData.position.left = --uiData.position.left;
        break;
      case 38:
        uiData.position.top = --uiData.position.top;
        break;
      case 39:
        uiData.position.left = ++uiData.position.left;
        break;
      case 40:
        uiData.position.top = ++uiData.position.top;
        break;
    }
    MxStore.editorUiItem({ ...uiData }, index);
  }

  handleResize = style => {
    const { top, left, width, height } = style;
    const { uiData, index } = this.props;
    uiData.position.top = Math.round(top);
    uiData.position.left = Math.round(left);
    uiData.position.width = Math.round(width);
    uiData.position.height = Math.round(height);
    MxStore.editorUiItem({ ...uiData }, index);
  };

  handleRotate = rotateAngle => {
    const { uiData, index } = this.props;
    uiData.position.rotate = rotateAngle;
    MxStore.editorUiItem({ ...uiData }, index);
  };

  handleDrag = (deltaX, deltaY) => {
    const { uiData, top, left, index } = this.props;
    uiData.position.top = top + deltaY;
    uiData.position.left = left + deltaX;
    MxStore.editorUiItem({ ...uiData }, index);
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
