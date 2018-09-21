import * as React from "react";
import ResizableRect from "../../utils/rnd/ResizableRect";
import keydown, { ALL_KEYS } from "react-keydown";

interface Props {
  width: number;
  height: number;
  left: number;
  top: number;
  rotate: number;
  draggable: any;
  data: any;
  index: number;
  zIndex: number;
  optionUi: any;
}

class Draggable extends React.PureComponent<Props, any> {
  /**
   * 绑定键盘
   */
  @keydown(ALL_KEYS)
  onKeyDown(event) {
    const { draggable, data } = this.props;
    switch (event.which) {
      case 8:
        this.props.optionUi.bind(this, "delete");
        break;
      case 37:
        data.position.left = --data.position.left;
        break;
      case 38:
        data.position.top = --data.position.top;
        break;
      case 39:
        data.position.left = ++data.position.left;
        break;
      case 40:
        data.position.top = ++data.position.top;
        break;
    }
    draggable({ ...data }, this.props.index);
  }

  handleResize = style => {
    const { top, left, width, height } = style;
    const { draggable, data } = this.props;
    data.position.top = Math.round(top);
    data.position.left = Math.round(left);
    data.position.width = Math.round(width);
    data.position.height = Math.round(height);
    draggable({ ...data }, this.props.index);
  };

  handleRotate = rotateAngle => {
    const { draggable, data, index } = this.props;
    data.position.rotate = rotateAngle;
    draggable({ ...data }, index);
  };

  handleDrag = (deltaX, deltaY) => {
    const { draggable, data, top, left, index } = this.props;
    data.position.top = top + deltaY;
    data.position.left = left + deltaX;
    draggable({ ...data }, index);
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
            boxSizing: "border-box",
            overflow: "hidden",
            pointerEvents: "none",
            userSelect: "none",
            width: `${width}px`,
            height: `${height}px`
          }}
        >
          {this.props.children}
        </div>
      </ResizableRect>
    );
  }
}

export default Draggable;
