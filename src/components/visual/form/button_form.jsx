import React, { Component } from "react";
import { Form, Slider, Row, Col, Input, Select} from "antd";

class ButtonForm extends Component {
  render() {
    // 表单的单个项目
    const FormItem = Form.Item;
    // getFieldDecorator : 用于和表单进行双向绑定
    const { getFieldDecorator } = this.props.form;
    // 表单选项 '布局' 样式
    const form_item_style = label_name => {
      return {
        label: label_name,
        labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
        wrapperCol: {
          xl: { span: 17, offset: 1 },
          lg: { span: 18, offset: 1 }
        }
      };
    };
    const Option = Select.Option;
    return (
      <Row gutter={16}>
        <Form hideRequiredMark>
          <Col span={24}>
            <FormItem {...form_item_style("高度")}>
              {getFieldDecorator("height")(<Input/>)}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem {...form_item_style("宽度")}>
              {getFieldDecorator("width")(<Input/>)}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem {...form_item_style("按钮内容")}>
              {getFieldDecorator("content")(<Input/>)}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem {...form_item_style("按钮圆角")}>
              {getFieldDecorator("radius")(<Slider min={0} max={1000}/>)}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem {...form_item_style("阴影")}>
              {getFieldDecorator("shadow")(
                <Select showSearch placeholder="Select a person">
                  <Option value="0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)">一级</Option>
                  <Option value="0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)">二级</Option>
                  <Option value="0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -7px rgba(0,0,0,0.2)">三级</Option>
                  <Option value="0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)">四级</Option>
                </Select>)}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem {...form_item_style("按钮链接")}>
              {getFieldDecorator("btn_url")(<Input/>)}
            </FormItem>
          </Col>

        </Form>
      </Row>
    );
  }
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      height: Form.createFormField({
        ...props.height,
        value: props.height.value
      }),
      width: Form.createFormField({
        ...props.width,
        value: props.width.value
      }),
      content: Form.createFormField({
        ...props.content,
        value: props.content.value
      }),
      btn_url: Form.createFormField({
        ...props.btn_url,
        value: props.btn_url.value
      }),
      shadow: Form.createFormField({
        ...props.shadow,
        value: props.shadow.value
      }),
      radius: Form.createFormField({
        ...props.radius,
        value: props.radius.value
      })

    };
  }
})(ButtonForm);
