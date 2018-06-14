/**
 * 为组件添加动态效果
 */
import React from "react";
import { connect } from "react-redux";
import { Map } from "immutable";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import ComponentLocation from "./component-location";
import { TextLayoutAtom, Translate } from "../../ui/text/layout_atom";
import { choose_action, select_action } from "../../redux/action";

/**
 * 为组件添加，拖动，鼠标控制大小的功能
 */
class DynamicCommon extends React.Component {
  // 内部属性 不需要设置
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

  // 设置位置，通过动画属性设置
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

  // 调整长宽时的 长度与宽度
  onResize = (event, { element, size }) => {
    event.stopPropagation();
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
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

  sendAction = up_data => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get("number"),
      up_data
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

  render() {
    const advance = this.props.data.get("advance");
    const $$width = advance.getIn(["perimeter", "width", "value"]);
    const $$height = advance.getIn(["perimeter", "height", "value"]);
    const $$translateX = advance.getIn(["transform", "translateX", "value"]);
    const $$translateY = advance.getIn(["transform", "translateY", "value"]);
    // 拆解出的位置数据
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <React.Fragment>
        {this.props.choose ?
          <Draggable
            defaultPosition={{ x: $$translateX, y: $$translateY }}
            onDrag={this.handleDrag.bind(this)}
            cancel=".react-resizable-handle"
            {...dragHandlers}
            onClick={this.choose.bind(
              this,
              this.props.index,
              this.props.data
            )}
          >
            <div>
              <ResizableBox
                width={$$width}
                height={$$height}
                onResize={this.onResize}
                maxConstraints={[320, Infinity]}
              >
                <Translate {...this.props.layout}>
                  <span>
                    <div
                      style={{
                        border: "1px dashed black",
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                      }}
                    >
                      <ComponentLocation>
                        <span>{this.props.component}</span>
                      </ComponentLocation>
                    </div>
                  </span>
                </Translate>
              </ResizableBox>
            </div>
          </Draggable>
          :
          <TextLayoutAtom {...this.props.layout}>
            <div
               style={{width:'100%',height:'100%'}}
              onClick={this.choose.bind(
                this,
                this.props.index,
                this.props.data
              )}
            >
              {this.props.component}
            </div>
          </TextLayoutAtom>
        }
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(DynamicCommon);
