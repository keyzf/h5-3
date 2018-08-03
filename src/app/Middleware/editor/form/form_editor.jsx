import React, { PureComponent, Fragment } from 'react';
import { SketchPicker } from 'react-color';
import AdvanceEditor from '../advance.form';
import {
  Tabs,
  Button,
  Popover,
  Icon,
  Card,
  Row,
  Col,
  Collapse,
  Tooltip,
  Form,
  Input,
} from 'antd';

import {
  $$from_opt_address,
  $$from_opt_checkbox,
  $$from_opt_datepicker,
  $$from_opt_email,
  $$from_opt_input,
  $$from_opt_name,
  $$from_opt_phone,
  $$from_opt_rate,
  $$from_opt_upload,
} from '../../../../database/form.db';
import { connect } from 'react-redux';
import { redux_action } from '../../../../database/redux/action';

class EditorForm extends PureComponent {
  state = {
    // 默认界面控制器
    item: false,
    number: '',
  };
  backItem = () => {
    this.setState({
      item: false,
    });
  };
  changeItem = number => {
    this.setState({
      item: true,
      number: number,
    });
  };
  add_opt = opt_name => {
    // data source
    const $$data = this.props.data.get('data');
    if (opt_name === 'address') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_address);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    if (opt_name === 'phone') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_phone);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    if (opt_name === 'email') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_email);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    if (opt_name === 'name') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_name);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    // features
    if (opt_name === 'input') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_input);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    if (opt_name === 'rate') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_rate);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    if (opt_name === 'checkbox') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_checkbox);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    if (opt_name === 'datePicker') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_datepicker);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    if (opt_name === 'upload') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.push($$from_opt_upload);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
  };
  opt_add = () => {
    const $$data = this.props.data.get('data');
    const name = $$data.getIn(['customize', 'item', this.state.number, 'type']);
    if (name === 'radio' || name === 'checkbox' || 'select') {
      const new_option = $$data
        .getIn(['customize', 'item', this.state.number, 'option'])
        .push('添加项');
      this.sendAction(
        $$data.setIn(
          ['customize', 'item', this.state.number, 'option'],
          new_option
        )
      );
    }
  };
  editorFeatures = (opt_name, data) => {
    const $$data = this.props.data.get('data');

    if (opt_name === 'item_deletes') {
      const $$item = $$data.get('customize').get('item');
      const $$new_item = $$item.delete(data);
      this.sendAction($$data.setIn(['customize', 'item'], $$new_item));
    }
    if (opt_name === 'color') {
      this.sendAction($$data.setIn(['advance', 'color'], data.hex));
    }
    if (opt_name === 'delete') {
      this.sendAction($$data.setIn(['advance', 'img'], ''));
    }
    if (opt_name === 'tiling') {
      this.sendAction(
        $$data.setIn(
          ['advance', 'img_config', 'tiling', 'value'],
          data.target.checked
        )
      );
    }
    if (opt_name === 'stretching') {
      this.sendAction(
        $$data.setIn(
          ['advance', 'img_config', 'stretching', 'value'],
          data.target.checked
        )
      );
    }
    if (opt_name === 'title_color') {
      this.sendAction(
        $$data.setIn(
          ['customize', 'item', this.state.number, 'title_color'],
          data.hex
        )
      );
    }
    if (opt_name === 'opt_color') {
      this.sendAction(
        $$data.setIn(
          ['customize', 'item', this.state.number, 'opt_color'],
          data.hex
        )
      );
    }
    if (opt_name === 'btn_color') {
      this.sendAction($$data.setIn(['customize', 'btn_color'], data.hex));
    }
    if (opt_name === 'btn_bg_color') {
      this.sendAction($$data.setIn(['customize', 'btn_bg_color'], data.hex));
    }
  };
  handleChange = (inside_index, event) => {
    const $$data = this.props.data.get('data');
    this.sendAction(
      $$data.setIn(
        ['customize', 'item', this.state.number, 'option', inside_index],
        event.target.value
      )
    );
  };
  texthandleChange = event => {
    const $$data = this.props.data.get('data');
    this.sendAction(
      $$data.setIn(
        ['customize', 'item', this.state.number, 'option', 'value'],
        event.target.value
      )
    );
  };
  CustomizeFormChange = event => {
    const $$data = this.props.data.get('data');
    this.sendAction(
      $$data.setIn(
        ['customize', 'item', this.state.number, 'title', 'value'],
        event.target.value
      )
    );
  };
  btnContenthange = event => {
    const $$data = this.props.data.get('data');
    this.sendAction(
      $$data.setIn(['customize', 'btn_content', 'value'], event.target.value)
    );
  };
  opt_delete = number => {
    const $$data = this.props.data.get('data');
    this.sendAction(
      $$data.removeIn([
        'customize',
        'item',
        this.state.number,
        'option',
        number,
      ])
    );
  };
  sendAction = up_data => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);
    // send action
    this.props.upData('H5_DATA', $$new_select_data);
    this.props.upData('EDITOR_UI', $$new_choose_data, {
      content: true,
      choose: true,
    });
  };

  render() {
    const $$data = this.props.data.get('data');
    const $$customize = $$data.get('customize');

    const item = (title, number) => (
      <Row gutter={16}>
        <Col span={16}>{title}</Col>
        <Col span={8}>
          <Tooltip title="修改">
            <Icon
              type="edit"
              style={{ marginRight: '15px' }}
              onClick={this.changeItem.bind(this, number)}
            />
          </Tooltip>
          <Tooltip title="删除">
            <Icon
              type="delete"
              onClick={this.editorFeatures.bind(this, 'item_deletes', number)}
            />
          </Tooltip>
        </Col>
      </Row>
    );
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
    const content = (
      <Row gutter={16} style={{ width: '150px' }}>
        <Col span={12} onClick={this.add_opt.bind(this, 'name')}>
          姓名
        </Col>
        <Col span={12} onClick={this.add_opt.bind(this, 'phone')}>
          电话
        </Col>
        <Col span={12} onClick={this.add_opt.bind(this, 'address')}>
          地址
        </Col>
        <Col span={12} onClick={this.add_opt.bind(this, 'email')}>
          邮箱
        </Col>

        <Col span={12} onClick={this.add_opt.bind(this, 'input')}>
          输入框
        </Col>
        <Col span={12} onClick={this.add_opt.bind(this, 'rate')}>
          评分
        </Col>
        <Col span={12} onClick={this.add_opt.bind(this, 'checkbox')}>
          多选框
        </Col>
        <Col span={12} onClick={this.add_opt.bind(this, 'datePicker')}>
          日期
        </Col>
        <Col span={12} onClick={this.add_opt.bind(this, 'upload')}>
          上传
        </Col>
      </Row>
    );

    return (
      <Tabs defaultActiveKey={'1'}>
        <Tabs.TabPane tab="内容设置" key="1">
          <div
            style={{
              height: 'calc(100vh -  55px)',
              overflow: 'hidden',
              marginTop: '-18px',
              backgroundImage:
                'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
          >
            {this.state.item ? (
              <Card
                style={{ background: 'transparent' }}
                title="表单项编辑"
                extra={<div onClick={this.backItem}>返回</div>}
              >
                {console.log(
                  $$customize.getIn(['item', this.state.number, 'type'])
                )}
                {$$customize.getIn(['item', this.state.number, 'type']) ===
                'radio' ? (
                  <React.Fragment>
                    <Form>
                      <Form.Item {...form_item_style('标题')}>
                        <Input
                          value={$$customize.getIn([
                            'item',
                            this.state.number,
                            'title',
                            'value',
                          ])}
                          onChange={this.CustomizeFormChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('标题字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'title_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('选项字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'opt_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'opt_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'opt_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                    {$$customize
                      .getIn(['item', this.state.number, 'option'])
                      .map((data, inside_index) => {
                        return (
                          <Fragment key={inside_index}>
                            <Form>
                              <Form.Item {...form_item_style('可选项')}>
                                <Input
                                  defaultValue={data}
                                  onChange={this.handleChange.bind(
                                    this,
                                    inside_index
                                  )}
                                  addonAfter={
                                    <Icon
                                      className="dynamic-delete-button"
                                      type="minus-circle-o"
                                      onClick={this.opt_delete.bind(
                                        this,
                                        inside_index
                                      )}
                                    />
                                  }
                                />
                              </Form.Item>
                            </Form>
                          </Fragment>
                        );
                      })}
                    <Button
                      type="primary"
                      style={{ width: '100%' }}
                      onClick={this.opt_add}
                    >
                      添加项目
                    </Button>
                  </React.Fragment>
                ) : (
                  ''
                )}
                {$$customize.getIn(['item', this.state.number, 'type']) ===
                'input' ? (
                  <React.Fragment>
                    <Form>
                      <Form.Item {...form_item_style('标题')}>
                        <Input
                          value={$$customize.getIn([
                            'item',
                            this.state.number,
                            'title',
                            'value',
                          ])}
                          onChange={this.CustomizeFormChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('标题字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'title_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('提示内容')}>
                        <Input
                          defaultValue={$$customize.getIn([
                            'item',
                            this.state.number,
                            'option',
                            'value',
                          ])}
                          onChange={this.texthandleChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                  </React.Fragment>
                ) : (
                  ''
                )}
                {$$customize.getIn(['item', this.state.number, 'type']) ===
                'textarea' ? (
                  <React.Fragment>
                    <Form>
                      <Form.Item {...form_item_style('标题')}>
                        <Input
                          value={$$customize.getIn([
                            'item',
                            this.state.number,
                            'title',
                            'value',
                          ])}
                          onChange={this.CustomizeFormChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('标题字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'title_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('提示内容')}>
                        <Input
                          defaultValue={$$customize.getIn([
                            'item',
                            this.state.number,
                            'option',
                            'value',
                          ])}
                          onChange={this.texthandleChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                  </React.Fragment>
                ) : (
                  ''
                )}
                {$$customize.getIn(['item', this.state.number, 'type']) ===
                'upload' ? (
                  <React.Fragment>
                    <Form>
                      <Form.Item {...form_item_style('标题')}>
                        <Input
                          value={$$customize.getIn([
                            'item',
                            this.state.number,
                            'title',
                            'value',
                          ])}
                          onChange={this.CustomizeFormChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('标题字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'title_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                  </React.Fragment>
                ) : (
                  ''
                )}
                {$$customize.getIn(['item', this.state.number, 'type']) ===
                'rate' ? (
                  <React.Fragment>
                    <Form>
                      <Form.Item {...form_item_style('标题')}>
                        <Input
                          value={$$customize.getIn([
                            'item',
                            this.state.number,
                            'title',
                            'value',
                          ])}
                          onChange={this.CustomizeFormChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('标题字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'title_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                  </React.Fragment>
                ) : (
                  ''
                )}
                {$$customize.getIn(['item', this.state.number, 'type']) ===
                'checkbox' ? (
                  <React.Fragment>
                    <Form>
                      <Form.Item {...form_item_style('标题')}>
                        <Input
                          value={$$customize.getIn([
                            'item',
                            this.state.number,
                            'title',
                            'value',
                          ])}
                          onChange={this.CustomizeFormChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('标题字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'title_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('选项字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'opt_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'opt_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'opt_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                    {$$customize
                      .getIn(['item', this.state.number, 'option'])
                      .map((data, inside_index) => {
                        return (
                          <Fragment key={inside_index}>
                            <Form>
                              <Form.Item {...form_item_style('可选项')}>
                                <Input
                                  defaultValue={data}
                                  onChange={this.handleChange.bind(
                                    this,
                                    inside_index
                                  )}
                                  addonAfter={
                                    <Icon
                                      className="dynamic-delete-button"
                                      type="minus-circle-o"
                                      onClick={this.opt_delete.bind(
                                        this,
                                        inside_index
                                      )}
                                    />
                                  }
                                />
                              </Form.Item>
                            </Form>
                          </Fragment>
                        );
                      })}
                    <Button
                      type="primary"
                      style={{ width: '100%' }}
                      onClick={this.opt_add}
                    >
                      添加项目
                    </Button>
                  </React.Fragment>
                ) : (
                  ''
                )}
                {$$customize.getIn(['item', this.state.number, 'type']) ===
                'select' ? (
                  <React.Fragment>
                    <Form>
                      <Form.Item {...form_item_style('标题')}>
                        <Input
                          value={$$customize.getIn([
                            'item',
                            this.state.number,
                            'title',
                            'value',
                          ])}
                          onChange={this.CustomizeFormChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('标题字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'title_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('选项字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'opt_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'opt_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'opt_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                    {$$customize
                      .getIn(['item', this.state.number, 'option'])
                      .map((data, inside_index) => {
                        return (
                          <Fragment key={inside_index}>
                            <Form>
                              <Form.Item {...form_item_style('可选项')}>
                                <Input
                                  defaultValue={data}
                                  onChange={this.handleChange.bind(
                                    this,
                                    inside_index
                                  )}
                                  addonAfter={
                                    <Icon
                                      className="dynamic-delete-button"
                                      type="minus-circle-o"
                                      onClick={this.opt_delete.bind(
                                        this,
                                        inside_index
                                      )}
                                    />
                                  }
                                />
                              </Form.Item>
                            </Form>
                          </Fragment>
                        );
                      })}
                    <Button
                      type="primary"
                      style={{ width: '100%' }}
                      onClick={this.opt_add}
                    >
                      添加项目
                    </Button>
                  </React.Fragment>
                ) : (
                  ''
                )}
                {$$customize.getIn(['item', this.state.number, 'type']) ===
                'datePicker' ? (
                  <React.Fragment>
                    <Form>
                      <Form.Item {...form_item_style('标题')}>
                        <Input
                          value={$$customize.getIn([
                            'item',
                            this.state.number,
                            'title',
                            'value',
                          ])}
                          onChange={this.CustomizeFormChange.bind(this)}
                        />
                      </Form.Item>
                    </Form>
                    <Form>
                      <Form.Item {...form_item_style('标题字体色')}>
                        <Popover
                          content={
                            <SketchPicker
                              color={$$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ])}
                              onChangeComplete={this.editorFeatures.bind(
                                this,
                                'title_color'
                              )}
                            />
                          }
                          trigger="click"
                        >
                          <div
                            style={{
                              marginTop: '6px',
                              height: '25px',
                              width: '100%',
                              backgroundColor: $$customize.getIn([
                                'item',
                                this.state.number,
                                'title_color',
                              ]),
                            }}
                          />
                        </Popover>
                      </Form.Item>
                    </Form>
                  </React.Fragment>
                ) : (
                  ''
                )}
              </Card>
            ) : (
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                style={{ background: 'transparent' }}
              >
                <Collapse.Panel header="项目列表" key="1">
                  {$$customize.get('item').map((data, index) => {
                    return (
                      <Collapse.Panel
                        style={{ marginBottom: '10px' }}
                        disabled
                        header={item(data.getIn(['title', 'value']), index)}
                        key={index}
                      />
                    );
                  })}
                  <Popover content={content} title="类型选择" trigger="click">
                    <Button type="dashed" style={{ width: '100%' }}>
                      <Icon type="plus" />添加
                    </Button>
                  </Popover>
                </Collapse.Panel>

                <Collapse.Panel header="按钮设置" key="2">
                  <Form>
                    <Form.Item {...form_item_style('按钮内容')}>
                      <Input
                        value={$$customize.getIn(['btn_content', 'value'])}
                        onChange={this.btnContenthange.bind(this)}
                      />
                    </Form.Item>
                    <Form.Item {...form_item_style('按钮字体色')}>
                      <Popover
                        content={
                          <SketchPicker
                            color={$$customize.get('btn_color')}
                            onChangeComplete={this.editorFeatures.bind(
                              this,
                              'btn_color'
                            )}
                          />
                        }
                        trigger="click"
                      >
                        <div
                          style={{
                            marginTop: '6px',
                            height: '25px',
                            width: '100%',
                            backgroundColor: $$customize.get('btn_color'),
                          }}
                        />
                      </Popover>
                    </Form.Item>
                    <Form.Item {...form_item_style('按钮背景')}>
                      <Popover
                        content={
                          <SketchPicker
                            color={$$customize.get('btn_bg_color')}
                            onChangeComplete={this.editorFeatures.bind(
                              this,
                              'btn_bg_color'
                            )}
                          />
                        }
                        trigger="click"
                      >
                        <div
                          style={{
                            marginTop: '6px',
                            height: '25px',
                            width: '100%',
                            backgroundColor: $$customize.get('btn_bg_color'),
                          }}
                        />
                      </Popover>
                    </Form.Item>
                  </Form>
                </Collapse.Panel>
              </Collapse>
            )}
          </div>
        </Tabs.TabPane>
        {/*<Tabs.TabPane tab="高级设置" key="2">*/}
        {/*<div*/}
        {/*style={{*/}
        {/*height: 'calc(100vh -  55px)',*/}
        {/*overflow: 'hidden',*/}
        {/*marginTop: '-18px',*/}
        {/*backgroundImage:*/}
        {/*'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',*/}
        {/*}}*/}
        {/*>*/}
        {/*<AdvanceEditor data={$$data} />*/}
        {/*</div>*/}
        {/*</Tabs.TabPane>*/}
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 当前选择编辑的组件
    editor_ui_value: state.editorUi_rdc,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorForm);
