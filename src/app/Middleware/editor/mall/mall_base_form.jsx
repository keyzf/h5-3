import React from 'react';
import { Form, InputNumber, Checkbox, Radio } from 'antd';

class MallBaseForm extends React.Component {
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
    const plainOptions = ['标题', '内容', '现价', '原价', '图片', '按钮'];
    return (
      <Form hideRequiredMark>
        <Form.Item {...form_item_style('组件元素')}>
          {getFieldDecorator('show_element')(
            <Checkbox.Group options={plainOptions} />
          )}
        </Form.Item>
        {this.props.name === 'grid_mall' ? (
          <Form.Item {...form_item_style('布局')}>
            一行显示{getFieldDecorator('layout')(
              <InputNumber min={1} max={4} />
            )}{' '}
            个
          </Form.Item>
        ) : (
          ''
        )}
        {this.props.name === 'list_mall' ? (
          <Form.Item {...form_item_style('布局')}>
            {getFieldDecorator('layout')(
              <Radio.Group>
                <Radio value={1}>左图右文</Radio>
                <Radio value={2}>左文右图</Radio>
                <Radio value={3}>图文混排</Radio>
              </Radio.Group>
            )}
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
})(MallBaseForm);
