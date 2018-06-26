import React, { PureComponent } from 'react';
import { fromJS, List } from 'immutable';
import { Form, Button, Radio, Input, Rate, DatePicker, Checkbox } from 'antd';

class OneForm extends PureComponent {
  handleSubmit = e => {
    //{{title:'',value:''},{title:'',value:''},{title:'',value:''}}
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 将信息发送给指定url
        // axios.post('this.props.data.getIn(["customize","btn_url"])', {
        //   form_data: List(fromJS(values)).toJS(),
        // })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        console.log("Received values of form: ", List(fromJS(values)).toJS());
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const customize = this.props.data.get('customize');
    const FormItem = Form.Item;
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
      <Form
        onSubmit={this.handleSubmit.bind(this)}
        layout={'vertical'}
        hideRequiredMark={true}
      >
        {customize.get('item').map((data, index) => {
          return (
            <React.Fragment key={index}>
              {data.get('type') === 'radio' ? (
                <FormItem
                  {...form_item_style(`${data.get('title').get('value')}`)}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Radio.Group>
                      {data.get('option').map((data, index) => {
                        return (
                          <Radio style={radioStyle} value={index} key={index}>
                            {data}
                          </Radio>
                        );
                      })}
                    </Radio.Group>
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'input' ? (
                <FormItem
                  {...form_item_style(`${data.getIn(['title', 'value'])}`)}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(<Input />)}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'rate' ? (
                <FormItem
                  {...form_item_style(`${data.get('title').get('value')}`)}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Rate value={data.getIn(['option', 'value'])} />
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'checkbox' ? (
                <FormItem
                  {...form_item_style(`${data.get('title').get('value')}`)}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <Checkbox.Group options={data.get('option').toJS()} />
                  )}
                </FormItem>
              ) : (
                ''
              )}
              {data.get('type') === 'datePicker' ? (
                <FormItem
                  {...form_item_style(`${data.get('title').get('value')}`)}
                >
                  {getFieldDecorator(`${data.get('decorator')}`)(
                    <DatePicker value={data.getIn(['option', 'value'])} />
                  )}
                </FormItem>
              ) : (
                ''
              )}
            </React.Fragment>
          );
        })}
        <FormItem key={'asfdasdf'}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const OneFormUi = Form.create()(OneForm);

export { OneFormUi };
