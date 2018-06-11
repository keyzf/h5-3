import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Form, Button, Radio, Input, Rate, DatePicker, Checkbox } from 'antd';
import { FormLayoutAtom } from './layout_atom';
import ComponentLocation from '../../../../containers/visual/component-location';
import { choose_action, select_action } from '../../../../redux/action';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  choose = (number, data) => {
    this.props.choose_upData(
      Map({ number: number, data: data }),
      Map({
        content: true,
        choose: true,
      }),
      false
    );
  };

  handleSubmit = e => {
    //{{title:'',value:''},{title:'',value:''},{title:'',value:''}}
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
        {this.props.choose ? (
          <div style={{ border: '1px grey solid' }}>
            <Form
              onSubmit={this.handleSubmit.bind(this)}
              layout={'vertical'}
              hideRequiredMark={true}
            >
              <ComponentLocation visible={this.props.choose}>
                {customize.get('item').map((data, index) => {
                  return (
                    <div
                      key={index}
                      onClick={this.choose.bind(
                        this,
                        this.props.index,
                        this.props.data
                      )}
                    >
                      {data.get('type') === 'radio' ? (
                        <FormItem
                          {...form_item_style(
                            `${data.get('title').get('value')}`
                          )}
                        >
                          {getFieldDecorator(`${data.get('decorator')}`)(
                            <Radio.Group>
                              {data.get('option').map((data, index) => {
                                return (
                                  <Radio
                                    style={radioStyle}
                                    value={index}
                                    key={index}
                                  >
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
                          {...form_item_style(
                            `${data.get('title').get('value')}`
                          )}
                        >
                          {getFieldDecorator(`${data.get('decorator')}`)(
                            <Input value={data.getIn(['option', 'value'])} />
                          )}
                        </FormItem>
                      ) : (
                        ''
                      )}
                      {data.get('type') === 'rate' ? (
                        <FormItem
                          {...form_item_style(
                            `${data.get('title').get('value')}`
                          )}
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
                          {...form_item_style(
                            `${data.get('title').get('value')}`
                          )}
                        >
                          {getFieldDecorator(`${data.get('decorator')}`)(
                            <Checkbox.Group
                              options={data.get('option').toJS()}
                            />
                          )}
                        </FormItem>
                      ) : (
                        ''
                      )}
                      {data.get('type') === 'datePicker' ? (
                        <FormItem
                          {...form_item_style(
                            `${data.get('title').get('value')}`
                          )}
                        >
                          {getFieldDecorator(`${data.get('decorator')}`)(
                            <DatePicker
                              value={data.getIn(['option', 'value'])}
                            />
                          )}
                        </FormItem>
                      ) : (
                        ''
                      )}
                    </div>
                  );
                })}
              </ComponentLocation>
              <FormItem key={'asfdasdf'}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  提交
                </Button>
              </FormItem>
            </Form>
          </div>
        ) : (
          <Form
            onSubmit={this.handleSubmit.bind(this)}
            layout={'vertical'}
            hideRequiredMark={true}
          >
            <ComponentLocation>
              {customize.get('item').map((data, index) => {
                return (
                  <div
                    key={index}
                    onClick={this.choose.bind(
                      this,
                      this.props.index,
                      this.props.data
                    )}
                  >
                    <FormItem
                      {...form_item_style(`${data.get('title').get('value')}`)}
                    >
                      {getFieldDecorator(`${data.get('decorator')}`)(
                        <Radio.Group>
                          {data.get('option').map((data, index) => {
                            return (
                              <Radio
                                style={radioStyle}
                                value={index}
                                key={index}
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
              })}
            </ComponentLocation>
            <FormItem key={'asfdasdf'}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                提交
              </Button>
            </FormItem>
          </Form>
        )}
      </FormLayoutAtom>
    );
  }
}

const FormComponent = Form.create()(NormalLoginForm);

const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
  };
};

// hoc 包装组件
export default connect('', mapDispatchToProps)(FormComponent);
