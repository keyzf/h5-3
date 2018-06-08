import React from "react";
import ComponentLocation from "../../../app/model/visual/component-location";
import { Map } from "immutable";
import { choose_action, select_action } from "../../../redux/action";
import { connect } from "react-redux";
import { TextLayoutAtom } from "./layout_atom";
import { Row, Col } from "antd";

class TwoTextComponent extends React.Component {
  choose = (number, data) => {
    this.props.choose_upData(Map({ number: number, data: data }), Map({
      content: true,
      bg: true
    }), false);
  };

  render() {
    const advance = this.props.data.get("advance");
    const customize = this.props.data.get("customize");
    // 可编辑属性 data:为文本
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
    return (
      <TextLayoutAtom {...advanced_settings}>
        {
          this.props.choose ?
            <div style={{ border: "1px grey solid" }}>
              <ComponentLocation visible={this.props.choose}>
                <Row gutter={16} onClick={this.choose.bind(this, this.props.index, this.props.data)}>
                  <Col span={14}>
                    <div style={{ display: " inline" }}
                         dangerouslySetInnerHTML={{ __html: customize.get("html_content") }}/>
                  </Col>
                  <Col span={10}>
                    <img
                      src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%BB%846%402x.png"} alt={"img"}/>
                  </Col>
                </Row>
              </ComponentLocation>
            </div> :
            <ComponentLocation>
              <Row gutter={16} onClick={this.choose.bind(this, this.props.index, this.props.data)}>
                <Col span={14}>
                  <div style={{ display: " inline" }}
                       dangerouslySetInnerHTML={{ __html: customize.get("html_content") }}/>
                </Col>
                <Col span={10}>
                  <img
                    src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%BB%846%402x.png"} alt={"img"}/>
                </Col>
              </Row>
            </ComponentLocation>
        }
      </TextLayoutAtom>
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

// hoc 包装组件
export default connect("", mapDispatchToProps)(TwoTextComponent);
