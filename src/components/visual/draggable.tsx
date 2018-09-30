import * as React from "react";
import { observer } from "mobx-react";
import keydown, { ALL_KEYS } from "react-keydown";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import ResizableRect from "../../utils/rnd/ResizableRect";
import store from "../../mobx/store";

interface Props {
  width: number;
  height: number;
  left: number;
  top: number;
  rotate: number;
  zIndex: number;
}

@observer
class Draggable extends React.Component<Props, any> {
  /**
   * 绑定键盘
   */
  @keydown(ALL_KEYS)
  onKeyDown(event) {
    switch (event.which) {
      case 46:
        return store.editorUiItem("delete", "");
      case 8:
        return store.editorUiItem("delete", "");
      case 37:
        return store.editorUiItem("move_left", "");
      case 38:
        return store.editorUiItem("move_up", "");
      case 39:
        return store.editorUiItem("move_right", "");
      case 40:
        return store.editorUiItem("move_down", "");
      case 67:
        return store.editorUiItem("copy", "");
    }
  }

  contextMenu = (name: string) => {
    switch (name) {
      case "layerUp":
        return store.editorUiItem("layerUp", "");
      case "layerDown":
        return store.editorUiItem("LayerDown", "");
      case "delete":
        return store.editorUiItem("delete", "");
      case "copy":
        return store.editorUiItem("copy", "");
    }
  };

  handleResize = style => {
    const { top, left, width, height } = style;
    return store.editorUiItem("resize", {
      top: Math.round(top),
      left: Math.round(left),
      width: Math.round(width),
      height: Math.round(height)
    });
  };

  handleRotate = rotateAngle => {
    return store.editorUiItem("rotate", rotateAngle);
  };

  handleDrag = (deltaX, deltaY) => {
    store.editorUiItem("drag", { top: deltaY, left: deltaX });
  };

  render() {
    const { width, top, left, height, rotate, zIndex } = this.props;

    return (
      <React.Fragment>
        <ContextMenuTrigger id="some_unique_identifier">
          <ResizableRect
            left={left}
            top={top}
            width={width}
            height={height}
            zIndex={zIndex}
            rotateAngle={rotate}
            zoomable="n, w, s, e, nw, ne, se, sw"
            onRotate={this.handleRotate}
            onResize={this.handleResize}
            onDrag={this.handleDrag}
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
        </ContextMenuTrigger>
        <ContextMenu id="some_unique_identifier">
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "copy")}
          >
            复制 Ctrl+C
          </MenuItem>
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "delete")}
          >
            删除 Delete
          </MenuItem>
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "layerDown")}
          >
            锁定 Ctrl+L
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "layerUp")}
          >
            图层上移
          </MenuItem>
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "layerDown")}
          >
            图层下移
          </MenuItem>

          <MenuItem divider />
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "layerDown")}
          >
            回退
          </MenuItem>
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "layerDown")}
          >
            撤销
          </MenuItem>

          <MenuItem divider />
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "layerDown")}
          >
            横向参考线
          </MenuItem>
          <MenuItem
            data={{ foo: "bar" }}
            onClick={this.contextMenu.bind(this, "layerDown")}
          >
            竖向参考线
          </MenuItem>
        </ContextMenu>
      </React.Fragment>
    );
  }
}

export default Draggable;
