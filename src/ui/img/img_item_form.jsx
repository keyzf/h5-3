/**
 * img 单项 表单
 */
import React, { PureComponent } from 'react';
import { Form, Input, Slider } from 'antd';

/**
 * img 单项 表单
 */
class ImgItemForm extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
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
        <Form.Item {...form_item_style('图片圆角')}>
          {getFieldDecorator('radius')(<Slider min={0} max={100} />)}
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
