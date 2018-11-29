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
import { FormModel } from "../model";

class CoreForm extends React.PureComponent {
  state = {
    previewVisible: false, // 图片预览控制
    previewImage: "", // 预览图片
    show: false,
    img: [],
    date: []
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
     * 图片删除
     * @param form_id
     * @returns {boolean}
     */
    onRemove = form_id => {
        let img_data = this.state.img;
        let count = "";
        img_data.map((data, index) => {
            if (data.form_id === form_id) {
                count = index;
            }
        });
        img_data.splice(count, 1);
        this.setState({
            img: img_data
        });
    };

  /**
   * 文件上传变更
   * @param info
   * @param form_id
   */
  handleChange = (form_id, info) => {
    if (info.file.status === "done") {
      if (info.file.response.error) {
        message.error(info.file.response.msg);
      } else {
        message.success(`${info.file.name} 文件上传成功.`);
        let img = this.state.img;
        img.push({ form_id: form_id, url: info.file.response.url });
        this.setState({
          img: img
        });
      }
    }
  };



  //修改日期数据
  date = (form_id, info) => {
    let date = this.state.date;
    date.push({ form_id: form_id, date: info.format("LL") });
    this.setState({
      date: date
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const sid = this.props.sid_value.data.get("sid");
      if (!err) {
        let from = [];
        const data = List(fromJS(values));

        this.props.data.getIn(["customize", "item"]).map(h5_data => {
          if (h5_data.get("type") === "input") {
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "rate") {
            data.map(data => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "datePicker") {
            this.state.date.map(data => {
              if (data.form_id === h5_data.get("form_id")) {
                from.push({
                  form_id: h5_data.get("form_id"),
                  value: data.date
                });
              }
            });
          }
          if (h5_data.get("type") === "upload") {
            this.state.img.map(data => {
              if (data.form_id === h5_data.get("form_id")) {
                from.push({
                  form_id: h5_data.get("form_id"),
                  value: data.url
                });
              }
            });
          }
          if (h5_data.get("type") === "checkbox") {
            let i = "";
            data.map((data, index) => {
              if (data[0] === h5_data.get("form_id")) {
                if (data[1]) {
                  data[1].map(data => {
                    i = i + data + ",";
                  });
                }
                from.push({ form_id: data[0], value: data[1] ? i : "" });
              }
            });
          }
          if (h5_data.get("type") === "select") {
            data.map(data => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "radio") {
            data.map(data => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }

          if (h5_data.get("type") === "name") {
            data.map(data => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "phone") {
            data.map(data => {
              if (data[0] === h5_data.get("form_id")) {
                from.push({ form_id: data[0], value: data[1] });
              }
            });
          }
          if (h5_data.get("type") === "mobile") {
            data.map(data => {
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
            this.props.upData("FORMMODEL", { show: true });
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
    const { previewVisible, previewImage } = this.state;
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

    // 检索是否存在上传
    const isUplaod = form_id => {
      let show = false;
      this.state.img.map(img_data => {
        if (img_data.form_id === form_id) {
          show = true;
        }
      });
      return show;
    };


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
                          onRemove={this.onRemove.bind(
                            this,
                            data.get("form_id")
                          )}
                          onChange={this.handleChange.bind(
                            this,
                            data.get("form_id")
                          )}
                        >
                          {isUplaod(data.get("form_id")) ? null : (
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
                              pattern: /^((1[3-9][0-9])+\d{8})$/,
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
                      <DatePicker
                        onChange={this.date.bind(this, data.get("form_id"))}
                        style={{ width: "100%" }}
                        size="large"
                        placeholder="选择日期"
                      />
                    </FormItem>
                  </div>
                );
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
