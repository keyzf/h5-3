/**
 * img 单项 表单
 */
import React, { PureComponent } from 'react';
import { Col, Form, Input, InputNumber, Slider } from 'antd';

/**
 * img 单项 表单
 */
class ImgItemForm extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    const form_item_style = label_name => {
      return {
        label: label_name,
        labelCol: { xl: { span: 5 }, lg: { span: 5 } },
        wrapperCol: {
          xl: { span: 19 },
          lg: { span: 19 },
        },
      };
    };

    return (
      <Form hideRequiredMark>
        {this.props.name === 'single_img' ? (
          ''
        ) : (
          <Form.Item {...form_item_style('标题')}>
            {getFieldDecorator('title')(<Input />)}
          </Form.Item>
        )}
        {this.props.name === 'single_img' ? (
          ''
        ) : (
          <Form.Item {...form_item_style('内容')}>
            {getFieldDecorator('content')(<TextArea rows={4} />)}
          </Form.Item>
        )}
        <Form.Item {...form_item_style('图片圆角')}>
          {getFieldDecorator('radius')(<Slider min={0} max={1000} />)}
        </Form.Item>
        <Form.Item {...form_item_style('链接')}>
          {getFieldDecorator('link')(
            <Input placeholder="例:http://www.e7wei.com" />
          )}
        </Form.Item>
      </Form>
    );
  }
}

/**
 * 高阶组件 hoc
 */
export default Form.create({
  // 双向绑定
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  // 接口数据
  mapPropsToFields(props) {
    return {
      radius: Form.createFormField({
        ...props.radius,
        value: props.radius.value,
      }),
      link: Form.createFormField({
        ...props.link,
        value: props.link.value,
      }),
      content: Form.createFormField({
        ...props.content,
        value: props.content.value,
      }),
      title: Form.createFormField({
        ...props.title,
        value: props.title.value,
      }),
    };
  },
})(ImgItemForm);
