import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { SketchPicker } from "react-color";
import {
  Button,
  Checkbox,
  Popover,
  Icon,
  Card,
  Row,
  Col,
  Popconfirm
} from "antd";
import { choose_redux_action, redux_action } from "../../../redux/action";
import { ImgCropCommon } from "../../../common/img_crop.common";
import UploadImgCommon from "../../../common/upload_img.common";

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
class AdvanceForm extends PureComponent {
  changImgToChild = data => {
    const $$img = this.props.data.setIn(["advance", "img"], data);
    const $$crop_img = $$img.setIn(["advance", "crop_img"], data);
    this.sendAction($$crop_img);
  };
  cropImgToChild = data => {
    let $$new_img = this.props.data.getIn(["advance", "img"]);
    $$new_img =
      $$new_img +
      `?imageMogr2/crop/!${data.width}x${data.height}a${data.x}a${data.y}`;
    const $$bg_new = this.props.data.setIn(["advance", "crop_img"], $$new_img);
    this.sendAction($$bg_new);
  };
  editorFeatures = (opt_name, data) => {
    if (opt_name === "color") {
      this.sendAction(this.props.data.setIn(["advance", "color"], data.hex));
    }
    if (opt_name === "delete") {
      const $$bg_new = this.props.data.setIn(["advance", "img"], "");
      const $$bg_crop = $$bg_new.setIn(["advance", "crop_img"], "");
      this.sendAction($$bg_crop);
    }
    if (opt_name === "tiling") {
      this.sendAction(
        this.props.data.setIn(
          ["advance", "img_config", "tiling", "value"],
          data.target.checked
        )
      );
    }
    if (opt_name === "stretching") {
      this.sendAction(
        this.props.data.setIn(
          ["advance", "img_config", "stretching", "value"],
          data.target.checked
        )
      );
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
    this.props.upData("H5_DATA", $$new_select_data);
    this.props.choose_upData("CHOOSE_UI", $$new_choose_data, {
      content: true,
      choose: true
    });
  };

  render() {
    const $$advance = this.props.data.get("advance");
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
            >
              <UploadImgCommon
                func={this.changImgToChild}
                url={$$advance.get("img")}
                children={
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
                }
              />
            </Col>
            <Col span={17}>
              <Button.Group>
                <UploadImgCommon
                  func={this.changImgToChild}
                  url={$$advance.get("img")}
                  children={<Button>更换</Button>}
                />
                <ImgCropCommon
                  func={this.cropImgToChild}
                  children={<Button onClick={this.showModal}>裁剪</Button>}
                  src={$$advance.get("img")}
                />
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
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.h5_data_reducer,
    choose_value: state.choose_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data) => dispatch(redux_action(name, data)),
    choose_upData: (name, data, meta) =>
      dispatch(choose_redux_action(name, data, meta))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceForm);
