import React from 'react';
import { Form, Button, Radio } from 'antd';
import { FormLayoutAtom } from './layout_atom';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const advance = this.props.data.get('advance');
    const customize = this.props.data.get('customize');
    // 可编辑属性 data:为文本
    const advanced_settings = {
      // 绝对定位
      top: advance
        .get('position')
        .get('top')
        .get('value'),
      left: advance
        .get('position')
        .get('left')
        .get('value'),
      right: advance
        .get('position')
        .get('right')
        .get('value'),
      bottom: advance
        .get('position')
        .get('bottom')
        .get('value'),
      depth: advance
        .get('position')
        .get('depth')
        .get('value'),
      // 内边距
      pb: advance
        .get('padding')
        .get('bottom')
        .get('value'),
      pl: advance
        .get('padding')
        .get('left')
        .get('value'),
      pr: advance
        .get('padding')
        .get('right')
        .get('value'),
      pt: advance
        .get('padding')
        .get('top')
        .get('value'),
      // 颜色
      bgColor: advance.get('color'),
      //背景
      img: advance.get('img'),
    };

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    // 表单选项显示样式
    const form_item_style = label_name => {
      return {
        label: <div>{label_name}</div>,
        wrapperCol: {
          lg: { span: 22, offset: 2 },
        },
      };
    };

    return (
      <FormLayoutAtom {...advanced_settings}>
        <Form
          onSubmit={this.handleSubmit}
          layout={'vertical'}
          hideRequiredMark={true}
        >
          {customize.get('item').map((data, index) => {
            return (
              <FormItem
                {...form_item_style(`${data.get('title').get('value')}`)}
                key={index}
              >
                {getFieldDecorator(`${data.get('decorator')}`)(
                  <Radio.Group>
                    {data.get('option').map((data, index) => {
                      return (
                        <Radio style={radioStyle} value={index}>
                          {data}
                        </Radio>
                      );
                    })}
                  </Radio.Group>
                )}
              </FormItem>
            );
          })}
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%', color: 'yellow' }}
            >
              提交
            </Button>
          </FormItem>
        </Form>
      </FormLayoutAtom>
    );
  }
}

const FormComponent = Form.create()(NormalLoginForm);
export default FormComponent;
