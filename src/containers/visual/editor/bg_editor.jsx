import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { SketchPicker } from "react-color";
import { Card, Icon, Divider, Checkbox, Popover, Popconfirm } from "antd";
import { bg_action, redux_action } from "../../../redux/action";
import UpImgPart from "../../../common/up_img_common/upload_common";
import { ImgCrop } from "../../../common/up_img_common/img_crop";
import style from "./bg_editor.module.scss";

/**
 * 功能:
 * 1. 上传图片
 * 2. 编辑颜色
 * 细节：
 * 上传组件使用插件（自定义）
 * 颜色选择使用拾色器
 * 修复bug
 * 1.鉴于拾色器的功能使用，需要使用state来控制颜色 2018年06月01日11:52:17
 */
class BgEditor extends PureComponent {
  // 控制model 的显示与关闭
  state = {
    visible: false,
    crop_visible: false
  };
  // 展示model
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  crop_showModal = () => {
    this.setState({
      crop_visible: true
    });
  };
  // 关闭Model
  closeModal = (state, data) => {
    this.setState({
      visible: false
    });
    // 添加判断是为了控制model遮罩层时的图片显示问题
    if (state && data !== undefined) {
      const $$bg_new = this.props.bg_value.data.setIn(
        ["customize", "img"],
        data
      );
      const $$bg_crop_img = $$bg_new.setIn(["customize", "crop_img"], data);
      this.props.upData("BG_UI", $$bg_crop_img);
    }
  };
  // 关闭Model
  crop_closeModal = (state, data) => {
    this.setState({
      crop_visible: false
    });
    if (state && data !== undefined) {
      let $$new_img = this.props.bg_value.data.getIn(["customize", "img"]);
      $$new_img =
        $$new_img +
        `?imageMogr2/crop/!${data.width}x${data.height}a${data.x}a${data.y}`;
      const $$bg_new = this.props.bg_value.data.setIn(
        ["customize", "crop_img"],
        $$new_img
      );
      this.props.upData("BG_UI", $$bg_new);
    }
  };
  // 界面功能实现 ---> 删除背景图
  delete = () => {
    const $$bg_new = this.props.bg_value.data.setIn(["customize", "img"], "");
    const $$bg_crop = $$bg_new.setIn(["customize", "crop_img"], "");
    this.props.upData("BG_UI", $$bg_crop);
  };
  // 界面功能实现 --> 通过识别关键字，完成平铺，固定的checkbox
  bg_img_config = (tip, e) => {
    let $$bg_new;
    if (tip === "fixed") {
      $$bg_new = this.props.bg_value.data.setIn(
        ["customize", "img_config", "fixed"],
        e.target.checked
      );
    } else {
      $$bg_new = this.props.bg_value.data.setIn(
        ["customize", "img_config", "repeat"],
        e.target.checked
      );
    }
    this.props.upData("BG_UI", $$bg_new);
  };
  // 界面功能实现 -->  修改色值后插入数据中
  bg_color_config = color => {
    const $$bg_new = this.props.bg_value.data.setIn(
      ["customize", "color"],
      color.hex
    );
    this.props.upData("BG_UI", $$bg_new);
  };

  render() {
    // 解构出背景组件数据
    const { data } = this.props.bg_value;
    // 获取特定数值
    const $$color = data.getIn(["customize", "color"]); //颜色
    const $$crop_img = data.getIn(["customize", "crop_img"]); //图片
    const $$img = data.getIn(["customize", "img"]); //图片
    const $$img_config = data.getIn(["customize", "img_config"]); //图片配置
    return (
      <React.Fragment>
        <Card
          title={"背景图"}
          className={style.card}
          extra={
            <div onClick={this.showModal}>
              <Icon type="plus"/>
              上传图片
            </div>
          }
        >
          {/*判断背景图是否存在*/}
          {$$crop_img ? (
            // 存在
            <React.Fragment>
              {/* 显示图片*/}
              <div className={style.img_show} onClick={this.showModal}>
                <img className={style.img} src={$$crop_img} alt={"img"}/>
              </div>
              {/*显示操作栏*/}
              <div className={style.editor}>
                <div className={style.editor_click} onClick={this.showModal}>
                  更换
                </div>
                <Divider type="vertical"/>
                <div className={style.editor_click}>
                  <div
                    className={style.editor_click}
                    onClick={this.crop_showModal}
                  >
                    裁剪
                  </div>
                </div>
                <Divider type="vertical"/>
                <div className={style.editor_delete}>
                  <Popconfirm
                    placement="top"
                    title={"确认删除此背景图?"}
                    onConfirm={this.delete}
                    okText="确认"
                    cancelText="取消"
                  >
                    删除
                  </Popconfirm>
                </div>
                <Checkbox
                  onChange={this.bg_img_config.bind(this, "repeat")}
                  defaultChecked={$$img_config.get("repeat")}
                >
                  重复
                </Checkbox>
                <Checkbox
                  onChange={this.bg_img_config.bind(this, "fixed")}
                  defaultChecked={$$img_config.get("fixed")}
                >
                  固定
                </Checkbox>
              </div>
            </React.Fragment>
          ) : (
            // 不存在
            <div onClick={this.showModal} className={style.bg_transparent}/>
          )}
          <UpImgPart
            visible={this.state.visible}
            unvisible={this.closeModal.bind(this)}
            img={$$img}
          />
          <ImgCrop
            crop_visible={this.state.crop_visible}
            crop_unvisible={this.crop_closeModal.bind(this)}
            src={$$img}
          />
        </Card>
        <Card title={"背景色配置"} className={style.card}>
          <Popover
            content={
              <SketchPicker
                color={$$color}
                onChangeComplete={this.bg_color_config}
              />
            }
            trigger="click"
            placement="left"
          >
            <Card.Grid
              className={style.card_grid}
              style={{ background: $$color }}
            >
              <Icon type="edit"/>&nbsp;&nbsp;自定义
            </Card.Grid>
          </Popover>
        </Card>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    bg_value: state.bg_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data) => dispatch(redux_action(name, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BgEditor);
