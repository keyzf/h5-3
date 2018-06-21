/**
 * 组件高级属性栏
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Map } from "immutable";
import { SketchPicker } from "react-color";
import {
  Tabs,
  Button,
  Checkbox,
  Popover,
  Icon,
  Card,
  Row,
  Col,
  Popconfirm
} from "antd";
import { choose_action, select_action } from "../../../redux/action";
import UpImgPart from "../../../common/up_img_common/upload_common";
import {
  $$horizontal_text,
  $$vertical_text
} from "../../../ui/text/text_database";
import { VisualRichEditorLoadable } from "../../../routers/visual.router";
import { ImgCrop } from "../../../common/up_img_common/img_crop";

/**
 * 接收属性
 *
 * editor for text
 * features 1. rich editor
 *          2. up_img <model>
 *          3. color picker <package>
 *          4. padding  <css element>
 *          5. position <css element>
 */
class AdvanceEditor extends PureComponent {
  state = {
    visible: false,
    crop_visible: false
  };
  crop_showModal = () => {
    this.setState({
      crop_visible: true
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  // close Model
  closeModal = (state, data) => {
    this.setState({
      visible: false
    });
    if (state && data !== undefined) {
      const $$select_data = this.props.select_value.data;
      const $$choose_data = this.props.choose_value.data;
      const $$img = $$select_data
        .get($$choose_data.get("number"))
        .setIn(["advance", "img"], data);
      const $$crop_img = $$img.setIn(["advance", "crop_img"], data);
      this.sendAction($$crop_img);
    }
  };
  crop_closeModal = (state, data) => {
    this.setState({
      crop_visible: false
    });
    if (state && data !== undefined) {
      const $$select_data = this.props.select_value.data;
      const $$choose_data = this.props.choose_value.data;
      let $$new_img = $$select_data.getIn([
        $$choose_data.get("number"),
        "advance",
        "img"
      ]);
      $$new_img =
        $$new_img +
        `?imageMogr2/crop/!${data.width}x${data.height}a${data.x}a${data.y}`;
      const $$bg_new = $$select_data
        .get($$choose_data.get("number"))
        .setIn(["advance", "crop_img"], $$new_img);
      this.sendAction($$bg_new);
    }
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

  /**
   * editor Functional implementation
   * opt_name : operating name
   * data : change data
   * 1. reset data
   * 2. color data
   */
  editorFeatures = (opt_name, data) => {
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // features
    if (opt_name === "color") {
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["advance", "color"], data.hex)
      );
    }
    if (opt_name === "delete") {
      const $$bg_new = $$select_data
        .get($$choose_data.get("number"))
        .setIn(["advance", "img"], "");
      const $$bg_crop = $$bg_new.setIn(["advance", "crop_img"], "");
      this.sendAction($$bg_crop);
    }
    if (opt_name === "tiling") {
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(
            ["advance", "img_config", "tiling", "value"],
            data.target.checked
          )
      );
    }
    if (opt_name === "stretching") {
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(
            ["advance", "img_config", "stretching", "value"],
            data.target.checked
          )
      );
    }
  };

  render() {
    // resolve props data
    const $$ui_text_data = this.props.data;
    const $$advance = $$ui_text_data.get("advance");
    return (
      <React.Fragment>
        <Card title="背景色" style={{ marginTop: "-18px" }}>
          <Popover
            content={
              <SketchPicker
                color={$$advance.get("color")}
                onChangeComplete={this.editorFeatures.bind(this, "color")}
              />
            }
            trigger="click"
          >
            <Card.Grid
              style={{
                textAlign: "center",
                width: "45%",
                background: $$advance.get("color")
              }}
            >
              <Icon type="plus" />&nbsp;&nbsp;自定义
            </Card.Grid>
          </Popover>
        </Card>
        <Card title="背景图">
          <Row gutter={16}>
            <Col
              span={7}
              style={{
                margin: "auto",
                height: "100px",
                border: "1px solid #e7e7e7",
                textAlign: "center",
                color: "#e7e7e7",
                display: "flex",
                alignItems: "center"
              }}
              onClick={this.showModal}
            >
              <img
                style={{
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "auto"
                }}
                src={
                  $$advance.get("crop_img")
                    ? $$advance.get("crop_img")
                    : "http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png"
                }
                alt={"img"}
              />
            </Col>
            <Col span={17}>
              <Button.Group>
                <Button onClick={this.crop_showModal}>裁剪</Button>
                <Button onClick={this.showModal}>更换</Button>
                <Popconfirm
                  placement="bottom"
                  title={"确定删除此图片？"}
                  onConfirm={this.editorFeatures.bind(this, "delete")}
                  okText="确认"
                  cancelText="取消"
                >
                  <Button>删除</Button>
                </Popconfirm>
              </Button.Group>
              <br />
              <br />
              <Row gutter={16}>
                <Col span={12}>
                  <Checkbox
                    onChange={this.editorFeatures.bind(this, "tiling")}
                    defaultValue={$$advance.getIn([
                      "img_config",
                      "tiling",
                      "value"
                    ])}
                  >
                    平铺
                  </Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox
                    onChange={this.editorFeatures.bind(this, "stretching")}
                    defaultValue={$$advance.getIn([
                      "img_config",
                      "stretching",
                      "value"
                    ])}
                  >
                    拉伸
                  </Checkbox>
                </Col>
              </Row>
              <UpImgPart
                visible={this.state.visible}
                unvisible={this.closeModal.bind(this)}
                img={$$advance.get("img")}
              />
              <ImgCrop
                crop_visible={this.state.crop_visible}
                crop_unvisible={this.crop_closeModal.bind(this)}
                src={$$advance.get("img")}
              />
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

/**
 * 获取数据
 * @param state
 * @returns {{select_value: *, choose_value: *}}
 */
const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer
  };
};

/**
 * 修改数据源数据
 * @param dispatch
 * @returns {{select_upData: (function(*=, *=, *=): *), choose_upData: (function(*=, *=, *=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error))
  };
};

/**
 * 高阶组件 hoc
 */
export default connect(mapStateToProps, mapDispatchToProps)(AdvanceEditor);
