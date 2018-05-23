import React from "react";
import { Card, Icon, Popover, Divider, Checkbox } from "antd";
import { connect } from "react-redux";
import { SketchPicker } from "react-color";
import { bg_action } from "../../../redux/action";
import UpImgPart from "../part/up_img";


class BgEditor extends React.Component {
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
      const $$bg_new = this.props.bg_value.data.setIn(["customize", "img"], data);
      this.props.bg_upData($$bg_new, "".false);
    }
  };
  // 界面功能实现 ---> 删除背景图
  delete = () => {
    const $$bg_new = this.props.bg_value.data.setIn(["customize", "img"], "");
    this.props.bg_upData($$bg_new, "".false);
  };

  // 界面功能实现 --> 通过识别关键字，完成平铺，固定的checkbox
  bg_img_config = (tip, e) => {
    let $$bg_new;
    if (tip === "tiling") {
      $$bg_new = this.props.bg_value.data.setIn(["customize", "img_config", "tiling"], e.target.checked);
    } else {
      $$bg_new = this.props.bg_value.data.setIn(["customize", "img_config", "locking"], e.target.checked);
    }
    this.props.bg_upData($$bg_new, "".false);
  };
  // 界面功能实现 -->  修改色值后插入数据中
  bg_color_config = (color) => {
    const $$bg_new = this.props.bg_value.data.setIn(["customize", "color"], color.hex);
    this.props.bg_upData($$bg_new, "".false);
  };

  render() {
    const $$bg_color = this.props.bg_value.data.get("customize").get("color");
    const $$bg_img = this.props.bg_value.data.get("customize").get("img");
    const $$bg_img_config = this.props.bg_value.data.get("customize").get("img_config");
    return (
      <div>
        {/*图片栏*/}
        <Card title="背景图" style={{ width: "100%", height: "400px", cursor: "pointer" }} key={1}>
          {
            // 判断是否存在背景图 如果存在则显示 背景图 + 底部操作栏 否则显示默认样式
            $$bg_img ?
              // true
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
                  }} src={$$bg_img} alt={"img"}/>
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
                  <Checkbox onChange={this.bg_img_config.bind(this, "tiling")}
                            defaultChecked={$$bg_img_config.get("tiling")}>平铺</Checkbox>
                  <Checkbox onChange={this.bg_img_config.bind(this, "locking")}
                            defaultChecked={$$bg_img_config.get("locking")}>固定</Checkbox>
                </div>
              </div>
              :
              // false
              <div onClick={this.showModal} style={{
                width: "70%",
                height: "270px",
                margin: "auto",
                border: "1px solid #e7e7e7",
                textAlign: "center",
                padding: "80px",
                color: "#e7e7e7"
              }}>
                <Icon type="plus" style={{ fontSize: "80px" }}/>
                上传图片
              </div>
          }
          {/*Model 框 visible:控制model 显示 unvisible:控制model关闭*/}
          <UpImgPart visible={this.state.visible} unvisible={this.closeModal.bind(this)} img={$$bg_img}/>
        </Card>
        {/*颜色栏*/}
        <Card title="背景色配置" style={{ width: "100%", height: "350px", cursor: "pointer" }} key={2}>
          {/*点击后弹出 SketchPicker内的内容*/}
          <Popover
            content={<SketchPicker color={$$bg_color} onChangeComplete={this.bg_color_config}/>} trigger="click">
            <div><Card.Grid style={{ width: "40%", textAlign: "center" }}>
              <Icon type="plus"/>&nbsp;&nbsp;自定义
            </Card.Grid></div>
          </Popover>
        </Card>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    bg_value: state.bg_reducer
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    bg_upData: (data, meta, error) => dispatch(bg_action(data, meta, error))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BgEditor);

