import React from 'react';
import { Form, InputNumber, Checkbox } from 'antd';

class ImgBaseForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
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
    const plainOptions = ['标题', '内容'];
    return (
      <Form hideRequiredMark>
        <Form.Item {...form_item_style('组件元素')}>
          {getFieldDecorator('show_element')(
            <Checkbox.Group options={plainOptions} />
          )}
        </Form.Item>
        {this.props.name === 'grid_img' || this.props.name === 'list_img' ? (
          <Form.Item {...form_item_style('组件布局')}>
            {getFieldDecorator('layout')(<InputNumber min={1} max={4} />)}
          </Form.Item>
        ) : (
          ''
        )}
      </Form>
    );
  }
}

export default Form.create({
  // 双向绑定
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  // 接口数据
  mapPropsToFields(props) {
    return {
      show_element: Form.createFormField({
        ...props.show_element,
        value: props.show_element.value,
      }),

      layout: Form.createFormField({
        ...props.layout,
        value: props.layout.value,
      }),
    };
  },
})(ImgBaseForm);
