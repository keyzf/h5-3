import React, { PureComponent } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import ComponentLocation from "./component-location";
import { NoChoose, UIChoose } from "./ui_choose_style";
import connect from "../../../redux/decorator";

@connect
export default class DynamicCommon extends PureComponent {
  state = {
    activeDrags: 0
  };

  onStart = () => {
    let add = this.state.activeDrags;
    this.setState({ activeDrags: ++add });
  };

  onStop = () => {
    let less = this.state.activeDrags;
    this.setState({ activeDrags: --less });
  };

  handleDrag(e, ui) {
    const $$translateX = this.props.data.getIn([
      "advance",
      "transform",
      "translateX",
      "value"
    ]);
    const $$translateY = this.props.data.getIn([
      "advance",
      "transform",
      "translateY",
      "value"
    ]);
    // 更新translateX 与 translateY 的值
    const $$change_translateX = this.props.data.setIn(
      ["advance", "transform", "translateX", "value"],
      $$translateX + ui.deltaX
    );
    const $$change_translateY = $$change_translateX.setIn(
      ["advance", "transform", "translateY", "value"],
      $$translateY + ui.deltaY
    );
    // new data
    this.sendAction($$change_translateY);
  }

  onResize = (event, { element, size }) => {
    event.stopPropagation();
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;
    // 获取当前长度与宽度
    const $$perimeter = $$select_data.get($$choose_data.get("number"));
    // 更新width 与 height 的值
    const $$change_width = $$perimeter.setIn(
      ["advance", "perimeter", "width", "value"],
      size.width
    );
    const $$change_height = $$change_width.setIn(
      ["advance", "perimeter", "height", "value"],
      size.height
    );
    // new data
    this.sendAction($$change_height);
  };

  choose = (number, data) => {
    this.props.upData(
      "CHOOSE_UI",
      { number: number, data: data },
      {
        content: true,
        choose: true
      }
    );
  };

  sendAction = up_data => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get("number"),
      up_data
    );
    const $$new_choose_data = $$choose_data.set("data", up_data);
    // send action
    this.props.upData("H5_DATA", $$new_select_data);
    this.props.upData("CHOOSE_UI", $$new_choose_data, {
      content: true,
      choose: true
    });
  };

  render() {
    const advance = this.props.data.get("advance");
    const $$width = advance.getIn(["perimeter", "width", "value"]);
    const $$height = advance.getIn(["perimeter", "height", "value"]);
    const $$translateX = advance.getIn(["transform", "translateX", "value"]);
    const $$translateY = advance.getIn(["transform", "translateY", "value"]);
    // 拆解出的位置数据
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    // 选中时的组件状态
    const choose = (
      <Draggable
        defaultPosition={{ x: $$translateX, y: $$translateY }}
        onDrag={this.handleDrag.bind(this)}
        cancel=".react-resizable-handle"
        bounds={`parent`}
        {...dragHandlers}
      >
        <div
          className={"box"}
          onClick={this.choose.bind(this, this.props.index, this.props.data)}
          style={{
            width: `${$$width}px`,
            height: `${$$height}px`
          }}
        >
          <ResizableBox
            width={$$width}
            height={$$height}
            onResize={this.onResize}
            maxConstraints={[320, Infinity]}
          >
            <ComponentLocation>
              <span>
                <UIChoose {...this.props.layout}>
                  {this.props.component}
                </UIChoose>
              </span>
            </ComponentLocation>
          </ResizableBox>
        </div>
      </Draggable>
    );
    // 未选中时的组件状态
    const noChoose = (
      <NoChoose
        {...this.props.layout}
        onClick={this.choose.bind(this, this.props.index, this.props.data)}
      >
        {this.props.component}
      </NoChoose>
    );
    return (
      <React.Fragment>{this.props.choose ? choose : noChoose}</React.Fragment>
    );
  }
}
