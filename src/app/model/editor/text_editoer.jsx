import React from "react";
import { connect } from "react-redux";
import { Map } from "immutable";
import { Tabs, Button, Collapse, Checkbox, Divider, Popover, Icon,Card } from "antd";
import { $$text_database, h_html_text, v_html_text } from "../../../database/components/text";
import { choose_action, select_action } from "../../../redux/action";
import PaddingForm from "../../../components/form/padding_form";
import PositionForm from "../../../components/form/position_form";
import EditorTextForm from "../../../components/form/editor_form";
import UpImgPart from "../part/up_img";
import { SketchPicker } from "react-color";
class EditorText extends React.Component {
  // 控制model 的显示与关闭
  state = {
    visible: false
  };
  // 展示model
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  // 关闭Model
  closeModal = (state, data) => {
    this.setState({
      visible: false
    });
    // 添加判断是为了控制电机model遮罩层时的图片显示问题
    if (state && data !== undefined) {
      //  预定义函数
      let $$new_select = "";
      let $$new_choose = "";
      // 获取核心组件数组
      const $$select_data = this.props.select_value.data;
      // 获取选择组件
      const $$choose_data = this.props.choose_value.data;

      $$new_select = $$select_data.setIn([$$choose_data.get("number"), "advance", "img"], data);
      const $$new_choose_item = $$select_data.get($$choose_data.get("number")).setIn(["advance", "img"], data);
      $$new_choose = $$choose_data.set("data", $$new_choose_item);

      // 发送数据
      this.props.select_upData($$new_select, "", false);
      this.props.choose_upData($$new_choose, Map({ content: true, choose: true }), false);
    }
  };

  bg_color_config = (color) => {
    //  预定义函数
    let $$new_select = "";
    let $$new_choose = "";
    // 获取核心组件数组
    const $$select_data = this.props.select_value.data;
    // 获取选择组件
    const $$choose_data = this.props.choose_value.data;

    $$new_select = $$select_data.setIn([$$choose_data.get("number"), "advance", "color"], color.hex);
    const $$new_choose_item = $$select_data.get($$choose_data.get("number")).setIn(["advance", "color"], color.hex);
    $$new_choose = $$choose_data.set("data", $$new_choose_item);

    // 发送数据
    this.props.select_upData($$new_select, "", false);
    this.props.choose_upData($$new_choose, Map({ content: true, choose: true }), false);
  };
  // 界面功能实现 ---> 删除背景图
  delete = () => {
    //  预定义函数
    let $$new_select = "";
    let $$new_choose = "";
    // 获取核心组件数组
    const $$select_data = this.props.select_value.data;
    // 获取选择组件
    const $$choose_data = this.props.choose_value.data;

    $$new_select = $$select_data.setIn([$$choose_data.get("number"), "advance", "img"],'');
    const $$new_choose_item = $$select_data.get($$choose_data.get("number")).setIn(["advance", "img"], '');
    $$new_choose = $$choose_data.set("data", $$new_choose_item);

    // 发送数据
    this.props.select_upData($$new_select, "", false);
    this.props.choose_upData($$new_choose, Map({ content: true, choose: true }), false);
  };
  change_form = (name, changedFields) => {
    //  预定义函数
    let $$new_select = "";
    let $$new_choose = "";
    // 获取核心组件数组
    const $$select_data = this.props.select_value.data;
    // 获取选择组件
    const $$choose_data = this.props.choose_value.data;

    if (name === "position") {
      // 得到position 更新后的数据
      const $$position = {
        ...$$select_data.get($$choose_data.get("number")).get("advance").get("position"),
        ...changedFields
      };
      // 得到全新的核心组件
      $$new_select = $$select_data.setIn([$$choose_data.get("number"), "advance", "position"], $$position);
      // 更新choose组件信息
      const $$new_choose_item = $$select_data.get($$choose_data.get("number")).setIn(["advance", "position"], $$position);
      $$new_choose = $$choose_data.set("data", $$new_choose_item);
    }
    if (name === "tiling") {
      $$new_select = $$select_data.setIn([$$choose_data.get("number"), "advance", "img_config", "tiling"], changedFields.target.checked);
      const $$new_choose_item = $$select_data.get($$choose_data.get("number")).setIn(["advance", "img_config", "tiling"], changedFields.target.checked);
      $$new_choose = $$choose_data.set("data", $$new_choose_item);
    }
    if (name === "stretching") {
      $$new_select = $$select_data.setIn([$$choose_data.get("number"), "advance", "img_config", "stretching"], changedFields.target.checked);
      const $$new_choose_item = $$select_data.get($$choose_data.get("number")).setIn(["advance", "img_config", "stretching"], changedFields.target.checked);
      $$new_choose = $$choose_data.set("data", $$new_choose_item);
    }
    if (name === "padding") {
      // 得到padding 更新后的数据
      const $$padding = {
        ...$$select_data.get($$choose_data.get("number")).get("advance").get("padding"),
        ...changedFields
      };
      // 得到全新的核心组件
      $$new_select = $$select_data.setIn([$$choose_data.get("number"), "advance", "padding"], $$padding);
      // 更新choose组件信息
      const $$new_choose_item = $$select_data.get($$choose_data.get("number")).setIn(["advance", "padding"], $$padding);
      $$new_choose = $$choose_data.set("data", $$new_choose_item);
    }


    if (name === "reset") {
      let reset_data = "";
      const name = $$select_data.get($$choose_data.get("number")).get("customize").get("name");
      if (name === "horizontal_text") {
        reset_data = Map($$text_database(name, h_html_text));
      }
      if (name === "vertical_text") {
        reset_data = Map($$text_database(name, v_html_text));
      }
      // 得到全新的核心组件
      $$new_select = $$select_data.set($$choose_data.get("number"), reset_data);
      $$new_choose = $$choose_data.set("data", reset_data);
    }
    // 发送数据
    this.props.select_upData($$new_select, "", false);
    this.props.choose_upData($$new_choose, Map({ content: true, choose: true }), false);
  };

  render() {
    const $$ui_text_data = this.props.data.get("data");
    const $$customize = $$ui_text_data.get("customize");
    const $$advance = $$ui_text_data.get("advance");
    const operations = (
      <Button onClick={this.change_form.bind(this, "reset")}>恢复默认</Button>
    );
    const tabs_config = {
      defaultActiveKey: "1",
      style: { height: "100%" }
    };
    return (
      <Tabs {...tabs_config} tabBarExtraContent={operations} key={1}>
        <Tabs.TabPane tab="内容设置" key="1">
          <Collapse bordered={false} defaultActiveKey={["1"]}>
            <Collapse.Panel header="组件内容" key="1">
              <EditorTextForm data={$$customize}/>
            </Collapse.Panel>
          </Collapse>
        </Tabs.TabPane>
        <Tabs.TabPane tab="高级设置" key="2">
          <Collapse bordered={false} defaultActiveKey={["1"]}>
            <Collapse.Panel header="背景配色" key="1">
              <Popover
                content={<SketchPicker color={$$advance.get("color")} onChangeComplete={this.bg_color_config}/>} trigger="click">
                <div><Card.Grid style={{ width: "40%", textAlign: "center" }}>
                  <Icon type="plus"/>&nbsp;&nbsp;自定义
                </Card.Grid></div>
              </Popover>
            </Collapse.Panel>
            <Collapse.Panel header="背景图" key="2">
              <div style={{ width: "100%", height: "100%" }}>
                {/*显示图片，并添加点击图片弹出model功能*/}
                <div style={{
                  width: "70%",
                  height: "240px",
                  margin: "auto",
                  border: "1px solid #e7e7e7",
                  textAlign: "center",
                  padding: " 0 40px",
                  color: "#e7e7e7"
                }} onClick={this.showModal}>
                  <img style={{
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    margin: "auto"
                  }} src={$$advance.get("img")} alt={"img"}/>
                </div>
                {/*功能栏*/}
                <div style={{
                  width: "70%",
                  margin: "10px auto",
                  textAlign: "center",
                  color: "#e7e7e7"
                }}>
                  <div style={{ display: "inline-block", color: "#19a0fa" }} onClick={this.showModal}>更换</div>
                  <Divider type="vertical"/>
                  <div style={{ display: "inline-block", marginRight: "25px", color: "#19a0fa" }}
                       onClick={this.delete}>删除
                  </div>
                  <Checkbox onChange={this.change_form.bind(this, "tiling")}
                            defaultValue={$$advance.get("img_config").get("tiling")}
                  >平铺</Checkbox>
                  <Checkbox onChange={this.change_form.bind(this, "stretching")}
                            defaultValue={$$advance.get("img_config").get("stretching")}
                  >拉伸</Checkbox>
                  <UpImgPart visible={this.state.visible} unvisible={this.closeModal.bind(this)}
                             img={$$advance.get("img")}/>
                </div>
              </div>
            </Collapse.Panel>
            <Collapse.Panel header="内边距" key="3">
              <PaddingForm
                {...$$advance.get("padding")}
                onChange={this.change_form.bind(this, "padding")}
              />
            </Collapse.Panel>
            <Collapse.Panel header="定位" key="4">
              <PositionForm
                {...$$advance.get("position")}
                onChange={this.change_form.bind(this, "position")}
              />
            </Collapse.Panel>
          </Collapse>
        </Tabs.TabPane>
      </Tabs>
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
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error))
  };
};

// Hoc
export default connect(mapStateToProps, mapDispatchToProps)(EditorText);
