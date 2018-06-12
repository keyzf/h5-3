import React from "react";
import { connect } from "react-redux";
import { fromJS, Map } from "immutable";
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
    activeDrags: 0
  };


  /**
   * send action
   * Receive: Single component style
   * @param up_data
   */
  sendAction = up_data => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get("number"), up_data
    );
    const $$new_choose_data = $$choose_data.set("data", up_data);
    // send action
    this.props.select_upData($$new_select_data, "", false);
    this.props.choose_upData(
      $$new_choose_data,
      Map({ content: true, choose: true }),
      false
    );
  };

  // 设置位置，通过动画属性设置
  handleDrag(e, ui) {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // 获取当前长度与宽度
    const $$transform = $$select_data.get($$choose_data.get("number"));
    // width
    const $$translateX = $$transform.getIn(["advance", "transform", "translateX", "value"]);
    // height
    const $$translateY = $$transform.getIn(["advance", "transform", "translateY", "value"]);
    // 更新translateX 与 translateY 的值
    const $$change_translateX = $$transform.setIn(["advance", "perimeter", "translateX", "value"], $$translateX + ui.deltaX);
    const $$change_translateY = $$change_translateX.setIn(["advance", "perimeter", "translateY", "value"], $$translateY + ui.deltaX);
    // new data
    this.sendAction($$change_translateY);

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
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // 获取当前长度与宽度
    const $$perimeter = $$select_data.get($$choose_data.get("number"));
    // 更新width 与 height 的值
    const $$change_width = $$perimeter.setIn(["advance", "perimeter", "width", "value"], size.width);
    const $$change_height = $$change_width.setIn(["advance", "perimeter", "height", "value"], size.height);
    // new data
    this.sendAction($$change_height);
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
    // width
    const $$width = advance.getIn(["perimeter", "width", "value"]);
    // height
    const $$height = advance.getIn(["perimeter", "height", "value"]);
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
        <div onClick={this.choose.bind(
          this,
          this.props.index,
          this.props.data
        )}>
          <ResizableBox
            width={$$width}
            height={$$height}
            onResize={this.onResize}
          >
            <span>
              <TextLayoutAtom {...advanced_settings}    >
                {this.props.choose ? (
                  <div
                    style={{
                      border: "1px dashed black",
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <ComponentLocation>
                      <span>
                        <div

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

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VTextComponent);
