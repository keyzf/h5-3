import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Radio,
  Input,
  Rate,
  DatePicker,
  Checkbox,
  Icon,
  Select,
  message,
  Upload,
  Modal
} from "antd";
import "moment/locale/zh-cn";
import { fromJS, List } from "immutable";
import { form_api } from "../../../api/form.api";
import { ImgAtom } from "../../img/img_atom";
import style from "./form.module.scss";
import { redux_action } from "../../../redux/action";

class CoreForm extends PureComponent {
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
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("上传图片过大，不超过10M");
    }
    this.setState({
      index: file
    });
    return isJPG && isLt10M;
  };

  /**
   * 文件上传变更
   * @param info
   * @param index
   */
  handleChange = (index, info) => {
    if (info.file.status === "done") {
      if (info.file.response.error) {
        message.error(info.file.response.msg);
      } else {
        message.success(`${info.file.name} 文件上传成功.`);
        // 添加项目内容
        const add = {
          url: info.file.response.url
        };
        // 内容添加至数据中
        const add_content = this.props.data
          .getIn(["customize", "item", index, "option", "value"])
          .push(add);
        const data = this.props.data.setIn(
          ["customize", "item", index, "option", "value"],
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
   * @param props_index
   * @returns {boolean}
   */
  onRemove = (props_index, file) => {
    const fileList = this.props.data.getIn(["customize", "item", props_index, "option", "value"]);
    fileList.toJS().map((data, index) => {
      if (data.url === file.response.url) {
        // 内容添加至数据中
        const delete_content = fileList.delete(index);
        const data = this.props.data.setIn(
          ["customize", "item", props_index, "option", "value"],
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const sid = this.props.sid_value.data.get("sid");
      if (!err) {
        let from = [];
        const data = List(fromJS(values));

        this.props.data.getIn(["customize", "item"]).map((h5_data) => {
          if (h5_data.get("type") === "input") {
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "upload") {
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({
                  form_id: data[0],
                  value: h5_data.getIn(["option", "value", 0])
                    ? h5_data.getIn(["option", "value", 0]).url
                    : ""
                });
              }
            });
          }
          if (h5_data.get("type") === "checkbox") {
            let i = "";
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                if (data[1]) {
                  data[1].map((data) => {
                    i = i + data + ",";
                  });
                }
                from.push({ form_id: data[0], value: data[1] ? i : "" });
              }
            });
          }
          if (h5_data.get("type") === "select") {
            let i = "";
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                if (data[1]) {
                  console.log("select", data[1]);
                  data[1].map((data) => {
                    i = i + data + ",";
                  });
                }
                from.push({ form_id: data[0], value: data[1] ? i : "" });
              }
            });
          }
          if (h5_data.get("type") === "radio") {
            data.map((data) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "datePicker") {
            data.map((data) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] ? data[1].format("LL") : "" });
              }
            });
          }
          if (h5_data.get("type") === "name") {
            data.map((data) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "phone") {
            data.map((data) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "mobile") {
            data.map((data) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "address") {
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "email") {
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "textarea") {
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
        });

        form_api(from, sid)
          .then(response => {
            message.success(response);
          })
          .catch(response => {
            message.error(response);
            return "";
          });
      }
      return "";
    });
  };

  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const advance = this.props.data.get("advance");
    const customize = this.props.data.get("customize");
    const btn_color = customize.get("btn_color");
    const btn_bg_color = customize.get("btn_bg_color");
    const form_config = {
      onSubmit: this.handleSubmit.bind(this),
      layout: "vertical",
      hideRequiredMark: true
    };
    const advanced_settings = {
      width: advance.get("width"),
      height: advance.get("height")
    };
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
    const { previewVisible, previewImage } = this.state;
    return (
      <ImgAtom {...advanced_settings}>
        <Form {...form_config}>
          {customize.get("item").map((data, index) => {
            const opt_color = data.get("opt_color");
            const choose = data.get("choose");
            switch (data.get("type")) {
              case "upload":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
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
                              required: choose,
                              message: "请上传图片"
                            }
                          ]
                        }
                      )(
                        <Upload
                          accept={"image/*"}
                          name={"file"}
                          action={`${window.location.origin}/View/uploadify`}
                          listType="picture-card"
                          data={{ type: 1 }}
                          beforeUpload={this.beforeUpload}
                          onPreview={this.handlePreview}
                          onRemove={this.onRemove.bind(this, index)}
                          onChange={this.handleChange.bind(this, index)}
                        >
                          {data.getIn(["option", "value"]).toJS().length >=
                          1 ? null : (
                            <div>
                              <Icon type="plus"/>
                              <div className="ant-upload-text">
                                点击上传图片
                              </div>
                            </div>
                          )}
                        </Upload>
                      )}
                    </FormItem>
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
                  </div>
                );
              case "radio":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "请选择" }]
                        }
                      )(
                        <Radio.Group>
                          {data.get("option").map((data, index) => {
                            return (
                              <Radio
                                value={data}
                                key={index}
                                style={{ color: opt_color }}
                              >
                                {data}
                              </Radio>
                            );
                          })}
                        </Radio.Group>
                      )}
                    </FormItem>
                  </div>
                );
              case "input":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "此项不能为空" }]
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(["option", "value"])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case "name":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "此项不能为空" }]
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(["option", "value"])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case "email":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
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
                              pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
                              message: "邮箱格式错误"
                            },
                            { required: choose, message: "此项不能为空" }
                          ]
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(["option", "value"])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case "address":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "此项不能为空" }]
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(["option", "value"])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case "phone":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
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
                              pattern: /^((1[3-8][0-9])+\d{8})$/,
                              message: "手机号格式错误"
                            },
                            { required: choose, message: "此项不能为空" }
                          ]
                        }
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(["option", "value"])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case "mobile":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`
                      )(
                        <Input
                          size="large"
                          placeholder={data.getIn(["option", "value"])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case "select":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "此项不能为空" }]
                        }
                      )(
                        <Select
                          size="large"
                          placeholder={`${data.getIn(["option", 0])}`}
                        >
                          {data.get("option").map((data, index) => {
                            return (
                              <Select.Option
                                value={data}
                                key={index}
                                style={{ color: opt_color }}
                              >
                                {data}
                              </Select.Option>
                            );
                          })}
                        </Select>
                      )}
                    </FormItem>
                  </div>
                );
              case "textarea":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "此项不能为空" }]
                        }
                      )(
                        <Input.TextArea
                          size="large"
                          rows={4}
                          placeholder={data.getIn(["option", "value"])}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case "rate":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "此项不能为空" }]
                        }
                      )(<Rate style={{ color: opt_color }}/>)}
                    </FormItem>
                  </div>
                );
              case "checkbox":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "此项不能为空" }]
                        }
                      )(
                        <Checkbox.Group
                          style={{ color: opt_color }}
                          options={data.get("option").toJS()}
                        />
                      )}
                    </FormItem>
                  </div>
                );
              case "datePicker":
                return (
                  <div
                    key={index}
                    style={{
                      pointerEvents: `${this.props.pointer ? "none" : ""}`
                    }}
                  >
                    <FormItem
                      className={style.form_item}
                      {...form_item_style(
                        `${data.getIn(["title", "value"])}`,
                        data.get("title_color")
                      )}
                    >
                      {getFieldDecorator(
                        `${data.get("form_id") ? data.get("form_id") : ""}`,
                        {
                          rules: [{ required: choose, message: "此项不能为空" }]
                        }
                      )(
                        <DatePicker
                          style={{ width: "100%" }}
                          size="large"
                          placeholder="选择日期"
                        />
                      )}
                    </FormItem>
                  </div>
                );
              default:
                return "";
            }
          })}
          <FormItem
            key={"asfdasdf"}
            style={{ pointerEvents: `${this.props.pointer ? "none" : ""}` }}
          >
            <Button
              type="primary"
              htmlType="submit"
              disabled={Object.keys(getFieldsError()).some(
                field => getFieldsError()[field]
              )}
              style={{
                width: "100%",
                border: "none",
                color: btn_color,
                background: btn_bg_color
              }}
            >
              {customize.getIn(["btn_content", "value"])}
            </Button>
          </FormItem>
        </Form>
      </ImgAtom>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 解析url,获取用户id
    sid_value: state.sid_rdc,
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
)(Form.create()(CoreForm));
