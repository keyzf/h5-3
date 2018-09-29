import * as React from "react";
import ResizableRect from "../../utils/rnd/ResizableRect";
import connect from "../../redux/connect";

interface Props {
  // position
  width: number;
  height: number;
  left: number;
  top: number;
  rotate: number;
  index: number;
  zIndex: number;
  RxAction?: any;
  RxEditor?: any;
  RxUi?: any;
  ui?: any;
}

@connect
class Draggable extends React.Component<Props, any> {
  handleResize = style => {
    const { top, left, width, height } = style;
    const { RxAction, index } = this.props;
    RxAction("RxUi_Resize", {
      index: index,
      data: {
        top: Math.round(top),
        left: Math.round(left),
        width: Math.round(width),
        height: Math.round(height)
      }
    });
  };

  handleRotate = rotateAngle => {
    const { RxAction, index } = this.props;
    RxAction("RxUi_Rotate", {
      index: index,
      data: rotateAngle
    });
  };

  handleDrag = (deltaX, deltaY) => {
    const { RxAction, index } = this.props;
    RxAction("RxUi_Drag", {
      index: index,
      data: { top: deltaY, left: deltaX }
    });
  };

  componentDidMount = () => {

    window.addEventListener(
      "keydown",
      event => {
        event.preventDefault();
        const { RxAction, RxUi,  index } = this.props;
        switch (event.key) {
          case "ArrowDown":
            RxAction("RxUi_Down", index);
            break;
          case "ArrowUp":
            RxAction("RxUi_Up", index);
            break;
          case "ArrowLeft":
            RxAction("RxUi_Left", index);
            break;
          case "ArrowRight":
            RxAction("RxUi_Right", index);
            break;
          case "Backspace":
            RxAction("RxUi_Delete", index);
            break;
          case "v":
            // let new_ui = {common:{},base:{},position:{}};
            // new_ui.common = RxEditor.data.common;
            // new_ui.base = RxEditor.data.base;
            // new_ui.position = RxEditor.data.position;
            // const id: any = document.getElementById("content");
            //
            // if (new_ui.common.type === "text") {
            //   new_ui.base.index = random();
            // }
            // // 添加组件时附加定位
            // try {
            //   const t = id.scrollTop || id.body.scrollTop;
            //   const h = id.clientHeight;
            //   new_ui.position.top = h / 2 + t - new_ui.position.height / 2;
            //   new_ui.position.left = (320 - new_ui.position.width) / 2;
            // } catch (error) {
            //   new_ui.position.top = new_ui.position.height / 2;
            //   new_ui.position.left = (320 - new_ui.position.width) / 2;
            // }

            RxAction("RxUi_Copy", RxUi.ui);

            break;

          default:
            return;
        }
        event.preventDefault();
      },
      true
    );
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
