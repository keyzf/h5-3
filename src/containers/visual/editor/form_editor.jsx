/**
 * 表单组件编辑
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Map, fromJS } from 'immutable';
import AdvanceEditor from './advance.editor';
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
import { choose_action, select_action } from '../../../redux/action';
import {
  $$form_database,
  $$form_item_database,
  $$from_opt_checkbox,
  $$from_opt_datepicker,
  $$from_opt_input,
  $$from_opt_rate,
} from '../../../ui/form/form_database';
import { SketchPicker } from 'react-color';

/**
 * 表单组件，设置
 */
class EditorForm extends PureComponent {
  state = {
    visible: false,
    // 默认界面控制器
    item: false,
    number: '',
  };
  /**
   * 返回默认界面
   */
  backItem = () => {
    this.setState({
      item: false,
    });
  };
  // 修改单个选项值
  changeItem = number => {
    this.setState({
      item: true,
      number: number,
    });
  };

  /**
   * model show
   */
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  // close Model
  closeModal = (state, data) => {
    this.setState({
      visible: false,
    });
    if (state && data !== undefined) {
      const $$select_data = this.props.select_value.data;
      const $$choose_data = this.props.choose_value.data;
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'img'], data)
      );
    }
  };
  add_opt = opt_name => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;

    // features
    if (opt_name === 'input') {
      const $$item = $$select_data
        .get($$choose_data.get('number'))
        .get('customize')
        .get('item');
      const $$new_item = $$item.push($$from_opt_input);
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$new_item)
      );
    }
    if (opt_name === 'rate') {
      const $$item = $$select_data
        .get($$choose_data.get('number'))
        .get('customize')
        .get('item');
      const $$new_item = $$item.push($$from_opt_rate);
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$new_item)
      );
    }
    if (opt_name === 'checkbox') {
      const $$item = $$select_data
        .get($$choose_data.get('number'))
        .get('customize')
        .get('item');
      const $$new_item = $$item.push($$from_opt_checkbox);
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$new_item)
      );
    }
    if (opt_name === 'datePicker') {
      const $$item = $$select_data
        .get($$choose_data.get('number'))
        .get('customize')
        .get('item');
      const $$new_item = $$item.push($$from_opt_datepicker);
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$new_item)
      );
    }
  };
  opt_add = () => {
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    const name = $$select_data
      .get($$choose_data.get('number'))
      .getIn(['customize', 'item', this.state.number, 'type']);
    if (name === 'radio') {
      const new_option = $$select_data
        .get($$choose_data.get('number'))
        .getIn(['customize', 'item', this.state.number, 'option'])
        .push('添加项');
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item', this.state.number, 'option'], new_option)
      );
    }
  };
  /**
   * editor Functional implementation
   * opt_name : operating name
   * data : change data
   * 1. reset data
   * 2. color data
   */
  editorFeatures = (opt_name, data) => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;

    if (opt_name === 'item_deletes') {
      const $$item = $$select_data
        .get($$choose_data.get('number'))
        .get('customize')
        .get('item');
      const $$new_item = $$item.delete(data);
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$new_item)
      );
    }
    if (opt_name === 'color') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'color'], data.hex)
      );
    }
    if (opt_name === 'delete') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'img'], '')
      );
    }
    if (opt_name === 'tiling') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(
            ['advance', 'img_config', 'tiling', 'value'],
            data.target.checked
          )
      );
    }
    if (opt_name === 'stretching') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(
            ['advance', 'img_config', 'stretching', 'value'],
            data.target.checked
          )
      );
    }
    if (opt_name === 'reset') {
      const form_data = {
        name: 'form',
        decorator: ['item_one', 'item_two', 'item_three', 'item_four'],
        title: [
          { value: '题目一' },
          { value: '题目二' },
          { value: '题目三' },
          { value: '题目四' },
        ],
      };
      let img_data = $$form_database(form_data.name);
      // 给数据修改值
      img_data.customize.item = form_data.title.map((datas, index) =>
        $$form_item_database('radio', form_data.decorator[index], datas, [
          '非常满意',
          '满意',
          '一般满意',
          '不满意',
        ])
      );

      this.sendAction(fromJS(img_data));
    }

    if (opt_name === 'title_color') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(
            ['customize', 'item', this.state.number, 'title_color'],
            data.hex
          )
      );
    }

    if (opt_name === 'opt_color') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(
            ['customize', 'item', this.state.number, 'opt_color'],
            data.hex
          )
      );
    }
  };
  /**
   * send action
   * Receive: Single component style
   * @param up_data
   */
  sendAction = up_data => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);
    // send action
    this.props.select_upData($$new_select_data, '', false);
    this.props.choose_upData(
      $$new_choose_data,
      Map({ content: true, choose: true }),
      false
    );
  };
  handleChange = (inside_index, event) => {
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    this.sendAction(
      $$select_data
        .get($$choose_data.get('number'))
        .setIn(
          ['customize', 'item', this.state.number, 'option', inside_index],
          event.target.value
        )
    );
  };
  CustomizeFormChange = event => {
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    this.sendAction(
      $$select_data
        .get($$choose_data.get('number'))
        .setIn(
          ['customize', 'item', this.state.number, 'title', 'value'],
          event.target.value
        )
    );
  };

  opt_delete = number => {
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    this.sendAction(
      $$select_data
        .get($$choose_data.get('number'))
        .removeIn(['customize', 'item', this.state.number, 'option', number])
    );
  };

  render() {
    const $$data = this.props.data.get('data');
    const $$customize = $$data.get('customize');

    /**
     * 默认界面显示项
     * @param title (标题)
     * @param number (选择的项目号)
     * @returns {*}
     */
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

    /**
     * reset data
     */
    const operations = (
      <Button onClick={this.editorFeatures.bind(this, 'reset')}>
        恢复默认
      </Button>
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
      <Row gutter={16}>
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
      </Row>
    );

    return (
      <Fragment>
        {this.state.item ? (
          <Card
            title="表单项编辑"
            extra={<div onClick={this.backItem}>返回</div>}
          >
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
                          onChange={this.handleChange.bind(this, inside_index)}
                          addonAfter={
                            <Icon
                              className="dynamic-delete-button"
                              type="minus-circle-o"
                              onClick={this.opt_delete.bind(this, inside_index)}
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
          </Card>
        ) : (
          <Tabs defaultActiveKey={'1'} tabBarExtraContent={operations}>
            <Tabs.TabPane tab="内容设置" key="1">
              <Card
                style={{ marginTop: '-18px' }}
                title="项目列表"
                extra={
                  <Popover content={content} title="类型选择" trigger="click">
                    <Icon type="plus" />添加
                  </Popover>
                }
              >
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
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="高级设置" key="2">
              <AdvanceEditor data={$$data} />
            </Tabs.TabPane>
          </Tabs>
        )}
      </Fragment>
    );
  }
}

/**
 * 读取数据
 * @param state
 * @returns {{select_value: *, choose_value: *}}
 */
const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer,
  };
};

/**
 * 发送数据
 * @param dispatch
 * @returns {{select_upData: (function(*=, *=, *=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
  };
};

/**
 * 高阶组件 hoc
 */
export default connect(mapStateToProps, mapDispatchToProps)(EditorForm);
