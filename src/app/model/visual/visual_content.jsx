import React from "react";
import { connect } from "react-redux";
import { choose_action, select_action } from "../../../redux/action";
import BgComponent from "../../../components/visual/background/bg_component";
import { render_component } from "../render/components";

class ContentVisualView extends React.Component {
  render() {
    const choose_meta = this.props.choose_value.meta;
    const select_data = this.props.select_value.data;
    const customize = this.props.bg_value.data.get("customize");
    const choose_data = this.props.choose_value.data;

    // 默认模板
    const content_default = {
      style: {
        width: "100%",
        height: "600px",
        color: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
      }
    };
    // 背景属性
    const bg_config = {
      color: customize.get("color"),
      img: customize.get("img"),
      repeat: customize.get("img_config").get("repeat"),
      fixed: customize.get("img_config").get("fixed")
    };
    return (
      //visual content 内容栏
      <div
        id={"content_root"}
        style={{
          width: "320px",
          height: "auto",
          margin: "auto",
          marginTop: "50px",
          boxShadow: " 0 0 15px rgba(0, 0, 0, 0.15)",
          wordWrap: "break-word"
        }}
      >
        <BgComponent {...bg_config}>
          {choose_meta.get("content") ? (
            select_data.map((ui_data, index) => {
              return (
                <div key={index}>
                  {/*通过循环select_data数组，ui_data:组件样式数据，第二个属性：为用户挑选的组件添加样式，index: 组件号*/}
                  {render_component(
                    ui_data,
                    index === choose_data.get("number"),
                    index
                  )}
                </div>
              );
            })
          ) : (
            <div {...content_default}>请从左侧选择组件~</div>
          )}
        </BgComponent>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer,
    bg_value: state.bg_reducer
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

// hoc 包装组件
export default connect(mapStateToProps, mapDispatchToProps)(ContentVisualView);
