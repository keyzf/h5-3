import React from "react";
import { connect } from "react-redux";
import { Map } from "immutable";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { TextLayoutAtom } from "./layout_atom";
import { choose_action, select_action } from "../../../../redux/action";
import ComponentLocation from "../../../../containers/visual/component-location";

/**
 * 功能：
 * 1. 选择相应组件。提供样式
 */
class VTextComponent extends React.Component {
  state = {
    width: 319,
    height: 147,
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    }
  };

  // 设置位置，通过动画属性设置
  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    console.log(this.state.deltaPosition);
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  }

  onStart = () => {
    let add = this.state.activeDrags;
    this.setState({ activeDrags: ++add });
  };
  onStop = () => {
    let less = this.state.activeDrags;
    this.setState({ activeDrags: --less });
  };

  // 调整长宽时的 长度与宽度
  onResize = (event, { element, size }) => {
    event.stopPropagation();
    this.setState({ width: size.width, height: size.height });
  };
  // 控制当前选择的组件
  choose = (number, data) => {
    this.props.choose_upData(
      Map({ number: number, data: data }),
      Map({
        content: true,
        choose: true
      }),
      false
    );
  };

  render() {
    // 接收的数据
    const advance = this.props.data.get("advance");
    const customize = this.props.data.get("customize");
    // 拆解出的位置数据
    const advanced_settings = {
      // 绝对定位
      top: advance.getIn(["position", "top", "value"]),
      left: advance.getIn(["position", "left", "value"]),
      right: advance.getIn(["position", "right", "value"]),
      bottom: advance.getIn(["position", "bottom", "value"]),
      depth: advance.getIn(["position", "depth", "value"]),
      // 内边距
      pb: advance.getIn(["padding", "bottom", "value"]),
      pl: advance.getIn(["padding", "left", "value"]),
      pr: advance.getIn(["padding", "right", "value"]),
      pt: advance.getIn(["padding", "top", "value"]),
      // 颜色
      bgColor: advance.get("color"),
      //背景
      img: advance.get("img"),
      stretching: advance.getIn(["img_config", "stretching", "value"]),
      tiling: advance.getIn(["img_config", "tiling", "value"])
    };
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <Draggable
        onDrag={this.handleDrag.bind(this)}
        {...dragHandlers}
        cancel=".react-resizable-handle"
      >
        <div>
          <ResizableBox
            width={this.state.width}
            height={this.state.height}
            onResize={this.onResize}
          >
            <span>
              <TextLayoutAtom {...advanced_settings}>
                {this.props.choose ? (
                  <div
                    style={{
                      border: "1px dashed black",
                      boxSizing: "border-box",
                      pointerEvents: "none",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <ComponentLocation>
                      <span>
                        <div
                          onClick={this.choose.bind(
                            this,
                            this.props.index,
                            this.props.data
                          )}
                          style={{
                            writingMode: "vertical-rl",
                            textAlign: "center",
                            margin: "0 auto"
                          }}
                          dangerouslySetInnerHTML={{
                            __html: customize.get("html_content")
                          }}
                        />
                      </span>
                    </ComponentLocation>
                  </div>
                ) : (
                  <span>
                    <ComponentLocation>
                      <div
                        onClick={this.choose.bind(
                          this,
                          this.props.index,
                          this.props.data
                        )}
                        style={{
                          writingMode: "vertical-rl",
                          textAlign: "center",
                          margin: "0 auto"
                        }}
                        dangerouslySetInnerHTML={{
                          __html: this.props.data.getIn([
                            "customize",
                            "html_content"
                          ])
                        }}
                      />
                    </ComponentLocation>
                  </span>
                )}
              </TextLayoutAtom>
            </span>
          </ResizableBox>
        </div>
      </Draggable>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error))
  };
};

export default connect("", mapDispatchToProps)(VTextComponent);
