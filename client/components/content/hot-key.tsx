import * as React from "react";
import keydown, { ALL_KEYS } from "react-keydown";

interface Props {
  fun: any;
  ui: any;
}

/**
 * @desc  设置画布，添加功能组件
 * @class BgUi - 背景组件
 * @class ContentChoose - 选择组件
 * @class ContentDrag - 拖拽组件
 * @class ContentLock - 锁定组件
 * @class ContentHeight - 拖动画板高度
 * @class BaselineV- 横基准线
 * @class BaselineH - 竖基准线
 */
class ContentHotKey extends React.Component<Props, ""> {
  @keydown(ALL_KEYS)
  submit(event: any) {
    switch (event.keyCode) {
      case 8:
        return this.props.fun({
          type: "UI_ACTION",
          payload: { type: "del", data: "" }
        });
      case 46:
        return this.props.fun({
          type: "UI_ACTION",
          payload: { type: "del", data: "" }
        });
      case 76:
        this.props.fun({
          type: "UI_ACTION",
          payload: { type: "lock", data: "" }
        });
        this.props.fun({ type: "UI_CHOOSE", payload: [] });
        break;
      case 37:
        return this.props.fun({
          type: "UI_ACTION",
          payload: { type: "left", data: "" }
        });
      case 38:
        return this.props.fun({
          type: "UI_ACTION",
          payload: { type: "up", data: "" }
        });
      case 39:
        return this.props.fun({
          type: "UI_ACTION",
          payload: { type: "right", data: "" }
        });
      case 40:
        return this.props.fun({
          type: "UI_ACTION",
          payload: { type: "down", data: "" }
        });
      case 67:
        return this.props.fun({
          type: "UI_ACTION",
          payload: { type: "copy", data: "" }
        });
      case 83:
        return this.props.fun({
          type: "SAVE",
          payload: {}
        });
    }
  }

  /**
   * @desc 判断用户是否在点选组件
   */
  choose = (event: any) => {
    const e = event || window.event;
    // 获得当前鼠标坐标
    const mouseLeft =
      e.clientX -
      document.getElementById("caves").offsetLeft -
      320 ;
    const mouseTop =
      e.clientY -
      document.getElementById("caves").offsetTop -
      48 +
      document.getElementById("content").scrollTop;

    // 判断用户是否点击空白
    let init = true;
    this.props.ui.map((data: any) => {
      if (
        data.position.top < mouseTop &&
        data.position.top + data.position.height > mouseTop &&
        data.position.left < mouseLeft &&
        data.position.left < mouseLeft + data.position.width
      ) {
        init = false;
      }
    });
    if (init) {
      this.props.fun({ type: "UI_CHOOSE", payload: [] });
      this.props.fun({ type: "EDIT_VALUE", payload: { type: "share" } });
    }
  };

  render() {
    /**
     *  @desc 组件样式
     */
    const style: { sketchpad: object } = {
      sketchpad: {
        width: "320px",
        height: "auto",
        overflow: "hidden",
        margin: "55px auto 50px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.15)",
        wordWrap: "break-word"
      }
    };

    return (
      <div style={style.sketchpad} id={"caves"} onClick={this.choose}>
        {this.props.children}
      </div>
    );
  }
}

export default ContentHotKey;
