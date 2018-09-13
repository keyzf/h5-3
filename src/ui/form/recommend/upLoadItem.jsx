import React from "react";
import { Upload, Icon, Modal, message, Form } from "antd";
import connect from "react-redux/es/connect/connect";
import { redux_action } from "../../../redux/action";
import style from "./form.module.scss";

/**
 * 图片上传 表单选项
 * props:
 * 1. index 在form 表单中排行数，
 * 2. data form表单数据
 * 3. imgNumber 个数
 */
class UpLoadItem extends React.Component {
  state = {
    previewVisible: false, // 图片预览控制
    previewImage: "" // 预览图片
  };

  /**
   * 关闭预览
   */
  handleCancel = () => this.setState({ previewVisible: false });

  /**
   * 开启预览
   * @param file
   */
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  /**
   * 上传前审核
   * @param file
   * @returns {boolean}
   */
  beforeUpload = file => {
    const isJPG = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJPG) {
      message.error("图片格式只能为png或jpg");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("上传图片过大，不超过2M");
    }
    this.setState({
      index: file
    });
    return isJPG && isLt2M;
  };

  /**
   * 文件上传变更
   * @param info
   */
  handleChange = info => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} 文件上传成功.`);
      if (info.file.response.error) {
        message.error(info.file.response.msg);
      } else {
        // 添加项目内容
        const add = {
          url: info.file.response.url
        };
        // 内容添加至数据中
        const add_content = this.props.fileList.push(add);
        const data = this.props.data.setIn(
          ["customize", "item", this.props.index, "option", "value"],
          add_content
        );
        // 调用函数，更新数据源
        this.sendAction(data);
      }
    }
  };

  /**
   * 图片删除
   * @param file
   * @returns {boolean}
   */
  onRemove = file => {
    this.props.fileList.toJS().map((data, index) => {
      if (data.url === file.response.url) {
        // 内容添加至数据中
        const delete_content = this.props.fileList.delete(index);
        const data = this.props.data.setIn(
          ["customize", "item", this.props.index, "option", "value"],
          delete_content
        );
        // 调用函数，更新数据源
        this.sendAction(data);
      }
    });
  };

  /**
   * 更新数据源
   * @param up_data
   */
  sendAction = up_data => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get("number"),
      up_data
    );
    const $$new_choose_data = $$choose_data.set("data", up_data);
    // send action
    this.props.upData("H5_DATA", $$new_select_data);
    this.props.upData("EDITOR_UI", $$new_choose_data, {
      content: true,
      choose: true
    });
  };

  render() {
    const { previewVisible, previewImage } = this.state;
    const { getFieldDecorator } = this.props.form;
    const data = this.props.item_data;
    const form_item_style = (label_name, color) => {
      return {
        label: (
          <div className={style.form_fontSize} style={{ color: color }}>
            {label_name}
          </div>
        ),
        wrapperCol: { lg: { span: 24 } }
      };
    };
    return (
      <Form.Item
        className={style.form_item}
        {...form_item_style(
          `${data.getIn(["title", "value"])}`,
          data.get("title_color")
        )}
      >
        {getFieldDecorator(
          `${data.get("form_id") ? data.get("form_id") : ""}`,
          {
            rules: [
              {
                required:  data.get("choose"),
                message: "请上传图片"
              }
            ]
          }
        )(
          <React.Fragment>
            <Upload
              accept={"image/*"}
              name={"file"}
              action={`${window.location.origin}/View/uploadify`}
              listType="picture-card"
              data={{ type: 1 }}
              beforeUpload={this.beforeUpload}
              onPreview={this.handlePreview}
              onRemove={this.onRemove}
              onChange={this.handleChange}
            >
              {this.props.fileList.toJS().length >=
              this.props.imgNumber ? null : (
                <div>
                  <Icon type="plus"/>
                  <div className="ant-upload-text">点击上传图片</div>
                </div>
              )}
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img
                alt="UpImgByUser"
                style={{ width: "100%" }}
                src={previewImage}
              />
            </Modal>
          </React.Fragment>
        )}
      </Form.Item>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 当前操作组件
    editor_ui_value: state.editorUi_rdc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(UpLoadItem));
