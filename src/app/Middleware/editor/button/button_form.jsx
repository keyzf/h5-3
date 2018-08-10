import React, { Component } from 'react';
import { Form, Slider, Row, Col, Input } from 'antd';

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
          lg: { span: 18, offset: 1 },
        },
      };
    };
    return (
      <Row gutter={16}>
        <Form hideRequiredMark>
          <Col span={24}>
            <FormItem {...form_item_style('按钮内容')}>
              {getFieldDecorator('content')(
                <Input placeholder="请输入按钮文本" />
              )}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem {...form_item_style('按钮圆角')}>
              {getFieldDecorator('radius')(<Slider min={0} max={1000} />)}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem {...form_item_style('按钮链接')}>
              {getFieldDecorator('btn_url')(
                <Input placeholder="例:http://www.e7wei.com" />
              )}
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
      content: Form.createFormField({
        ...props.content,
        value: props.content.value,
      }),
      btn_url: Form.createFormField({
        ...props.btn_url,
        value: props.btn_url.value,
      }),
      radius: Form.createFormField({
        ...props.radius,
        value: props.radius.value,
      }),
    };
  },
})(ButtonForm);
