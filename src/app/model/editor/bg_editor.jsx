import React from "react";
import { Card, Icon, Popover, Divider, Checkbox } from "antd";
import { connect } from "react-redux";
import QueueAnim from "rc-queue-anim";
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

  delete = () => {
    const $$bg_new = this.props.bg_value.data.setIn(["customize", "img"], "");
    this.props.bg_upData($$bg_new, "".false);
  };

  bg_tiling = (e) => {
    const $$bg_new = this.props.bg_value.data.setIn(["customize", "img_config", "tiling"], e.target.checked);
    this.props.bg_upData($$bg_new, "".false);
  };
  bg_locking = (e) => {
    const $$bg_new = this.props.bg_value.data.setIn(["customize", "img_config", "locking"], e.target.checked);
    this.props.bg_upData($$bg_new, "".false);
  };
  // 关闭Model
  closeModal = (tip, data) => {
    this.setState({
      visible: false
    });
    if (tip) {

      const $$bg_new = this.props.bg_value.data.setIn(["customize", "img"], data);
      this.props.bg_upData($$bg_new, "".false);
    }
  };
  // 修改色值后插入数据中
  handleChangeComplete = (color) => {
    const $$bg_new = this.props.bg_value.data.setIn(["customize", "color"], color.hex);
    this.props.bg_upData($$bg_new, "".false);
  };

  render() {
    const $$bg_color = this.props.bg_value.data.get("customize").get("color");
    const $$bg_img = this.props.bg_value.data.get("customize").get("img");
    const $$bg_img_config = this.props.bg_value.data.get("customize").get("img_config");
    const gridStyle = {
      width: "40%",
      textAlign: "center"
    };
    return (
      <QueueAnim type={"left"}>
        <Card title="背景图" style={{ width: "100%", height: "400px", cursor: "pointer" }} key={1}>
          {
            $$bg_img ?
              <div style={{ width: "100%", height: "100%" }}>
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
                  }}
                       src={$$bg_img} alt={"img"}/>
                </div>
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
                  <Checkbox onChange={this.bg_tiling} defaultChecked={$$bg_img_config.get('tiling')}>平铺</Checkbox>
                  <Checkbox onChange={this.bg_locking} defaultChecked={$$bg_img_config.get('locking')}>固定</Checkbox>
                </div>
              </div>
              : <div onClick={this.showModal} style={{
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
          <UpImgPart visible={this.state.visible} unvisible={this.closeModal.bind(this)}/>
        </Card>
        <Card title="背景色配置" style={{ width: "100%", height: "350px", cursor: "pointer" }} key={2}>
          <Popover content={<SketchPicker color={$$bg_color} onChangeComplete={this.handleChangeComplete}/>}
                   trigger="click">
            <Card.Grid style={gridStyle}>
              <Icon type="plus"/>&nbsp;&nbsp;自定义
            </Card.Grid>
          </Popover>
        </Card>
      </QueueAnim>
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

