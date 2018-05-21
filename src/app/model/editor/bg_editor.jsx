import React from "react";
import { Card, Icon, Popover, Modal, Tabs, Button } from "antd";
import { connect } from "react-redux";
import QueueAnim from "rc-queue-anim";
import { SketchPicker } from "react-color";
import { bg_action } from "../../../redux/action";
import { ImgForm } from "../../../components/form/img_form";

const TabPane = Tabs.TabPane;


class BgEditor extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleCancel = (e) => {
    this.setState({
      visible: false
    });
  };
  handleChangeComplete = (color) => {
    const $$bg_new = this.props.bg_value.data.setIn(["customize", "color"], color.hex);
    this.props.bg_upData($$bg_new, "".false);
  };

  render() {
    const $$bg_color = this.props.bg_value.data.get("customize").get("color");
    const $$bg_img = this.props.bg_value.data.get("customize").get("img");
    const gridStyle = {
      width: "40%",
      textAlign: "center"
    };
    return (
      <QueueAnim type={"left"}>
        <Card title="背景图" style={{ width: "100%", height: "400px", cursor: "pointer" }} key={1}>
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
          <Modal width={800}
                 title="素材库"
                 visible={this.state.visible}
                 onCancel={this.handleCancel}
                 footer={null}
          >
            <Tabs tabBarExtraContent={<ImgForm {...$$bg_img}
                                               child={<div style={{ color: "#19a0fa", cursor: "pointer" }}><Icon
                                                 type="plus"/> &nbsp;添加素材</div>}/>}>
              <TabPane tab="我的素材" key="1">
                <div style={{ textAlign: "center", padding: "0 80px" }}>
                  <img src={"http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png"} alt={"img"}/><br/>
                  <ImgForm {...$$bg_img} child={<Button type="dashed" style={{ width: "150px" }}>
                    种植素材
                  </Button>}/>


                </div>
              </TabPane>
              <TabPane tab="共享素材" key="2">
                <Tabs tabPosition={"left"}>
                  <TabPane tab="背景" key="1">Content of Tab 1</TabPane>
                  <TabPane tab="文本背景" key="2">Content of Tab 2</TabPane>
                  <TabPane tab="艺术字" key="3">Content of Tab 3</TabPane>
                  <TabPane tab="电商" key="4">Content of Tab 3</TabPane>
                  <TabPane tab="节日" key="5">Content of Tab 3</TabPane>
                  <TabPane tab="文理" key="6">Content of Tab 3</TabPane>
                  <TabPane tab="配饰" key="7">Content of Tab 3</TabPane>
                  <TabPane tab="图形图标" key="8">Content of Tab 3</TabPane>
                </Tabs>
              </TabPane>
            </Tabs>
          </Modal>
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

