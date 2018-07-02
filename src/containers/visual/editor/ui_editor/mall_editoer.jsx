/**
 * mall 编辑栏
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Map, fromJS } from 'immutable';
import { SketchPicker } from 'react-color';
import {
  Tabs,
  Button,
  Collapse,
  Row,
  Col,
  Icon,
  Card,
  Tooltip,
  Divider,
  Popconfirm,
  Form,
  Popover,
} from 'antd';
import { choose_action, select_action } from '../../../../redux/action';
import UpImgPart from '../../../../common/up_img_common/upload_common';
import MallItemForm from '../../../../ui/mall/mall_item_form';
import MallBaseForm from '../../../../ui/mall/mall_base_form';
import AdvanceEditor from '../advance.form';
import { ImgCrop } from '../../../../common/up_img_common/img_crop';
import {
  $$grid_mall_database,
  $$list_mall_database,
  $$mall_item_database,
} from '../../../../ui/mall/mall_database';

/**
 * 实现功能：
 *
 */
class EditorMall extends PureComponent {
  state = {
    //判断用户是否编辑单个项目
    item: false,
    // 修改的项目编号
    number: '',
    // 图片裁剪
    crop_visible: false,
    // 图片库
    visible: false,
  };
  /**
   * 修改单项
   * @param number
   */
  changeItem = number => {
    this.setState({
      item: true,
      number: number,
    });
  };
  /**
   * 回到默认页面
   */
  backItem = () => {
    this.setState({
      item: false,
      number: '',
    });
  };
  /**
   * 点击时展示model窗口（图片库）
   */
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  /**
   *  点击时展示model窗口（图片裁剪）
   */
  crop_showModal = () => {
    this.setState({
      crop_visible: true,
    });
  };
  /**
   * 关闭裁剪
   * 设置裁剪
   * @param state
   * @param data
   */
  crop_closeModal = (state, data) => {
    this.setState({
      crop_visible: false,
    });
    if (state && data !== undefined) {
      const $$props_data = this.props.data.get('data');
      let $$new_img = $$props_data.getIn([
        'customize',
        'item',
        this.state.number,
        'img',
      ]);
      $$new_img = `${$$new_img}?imageMogr2/crop/!${data.width}x${data.height}a${
        data.x
      }a${data.y}`;
      const $$new_crop_img = $$props_data.setIn(
        ['customize', 'item', this.state.number, 'crop_img'],
        $$new_img
      );
      this.sendAction($$new_crop_img);
    }
  };
  /**
   * 关闭图片库
   * @param state
   * @param data
   */
  closeModal = (state, data) => {
    this.setState({
      visible: false,
    });
    if (state && data !== undefined) {
      const $$props_data = this.props.data.get('data');
      const $$img = $$props_data.setIn(
        ['customize', 'item', this.state.number, 'img'],
        data
      );
      const $$crop_img = $$img.setIn(
        ['customize', 'item', this.state.number, 'crop_img'],
        data
      );
      this.sendAction($$crop_img);
    }
  };
  /**
   * 接收操作名称。实现相应操作
   * @param opt_name
   * @param data
   */
  editorFeatures = (opt_name, data) => {
    /**
     * 提取数值props 传递来的数值
     */
    const $$props_data = this.props.data.get('data');
    /**
     * 功能1. 恢复默认
     */
    if (opt_name === 'reset') {
      const name = $$props_data.getIn(['customize', 'name']);
      if (name === 'list_mall') {
        this.sendAction($$list_mall_database);
      }
      if (name === 'grid_mall') {
        this.sendAction($$grid_mall_database);
      }
    }
    /**
     * 功能2. 基础属性设置
     * 注： data 为 form表单回传回来的信息
     */
    if (opt_name === 'base') {
      if (data.layout) {
        this.sendAction(
          $$props_data.setIn(
            ['customize', 'base', 'layout', 'value'],
            data.layout.value
          )
        );
      }
      if (data.show_element) {
        this.sendAction(
          $$props_data.setIn(
            ['customize', 'base', 'show_element', 'value'],
            data.show_element.value
          )
        );
      }
    }
    /**
     * 功能3. 添加项目（小项目）
     */
    if (opt_name === 'add_item') {
      const $$add = $$props_data
        .getIn(['customize', 'item'])
        .push($$mall_item_database);
      this.sendAction($$props_data.setIn(['customize', 'item'], $$add));
    }
    /**
     * 功能3. 单个项目删除
     * 这里的data,来自 this.state.number
     */
    if (opt_name === 'item_delete') {
      const $$new_data = $$props_data.getIn(['customize', 'item']).delete(data);
      this.sendAction($$props_data.setIn(['customize', 'item'], $$new_data));
    }
    /**
     * 功能4. 删除项目图片
     */
    if (opt_name === 'item_img_de') {
      const $$img_clear = $$props_data.setIn(
        ['customize', 'item', this.state.number, 'img'],
        ''
      );
      const $$crop_img_clear = $$img_clear.setIn(
        ['customize', 'item', this.state.number, 'crop_img'],
        ''
      );
      this.sendAction($$crop_img_clear);
    }
    /**
     * 功能5. 更改单项表单数据数据
     */
    if (opt_name === 'item_change') {
      // update position
      const $$item = {
        ...$$props_data.getIn(['customize', 'item']).toJS()[this.state.number],
        ...data,
      };
      // new data
      this.sendAction(
        $$props_data.setIn(
          ['customize', 'item', this.state.number],
          fromJS($$item)
        )
      );
    }
    /**
     * 功能6. 更改字体颜色
     */
    if (opt_name === 'color') {
      this.sendAction(
        $$props_data.setIn(['customize', 'base', 'font_color'], data.hex)
      );
    }
  };
  /**
   * 触发器
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

  /**
   * 元素渲染
   * @returns {*}
   */
  render() {
    const $$data = this.props.data.get('data');
    const $$customize = $$data.get('customize');
    /**
     * 恢复默认
     */
    const operations = (
      <Popconfirm
        placement="bottom"
        title={'重置为默认设置？'}
        onConfirm={this.editorFeatures.bind(this, 'reset')}
        okText="确认"
        cancelText="取消"
      >
        <Button>恢复默认</Button>
      </Popconfirm>
    );
    /**
     *  列表展示
     */
    const item = (img, title, number) => (
      <Row gutter={16}>
        <Col span={8}>
          <img
            onClick={this.changeItem.bind(this, number)}
            width={'50px'}
            height={'40px'}
            src={
              img
                ? img
                : 'https://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
            }
            alt={'img'}
          />
        </Col>
        <Col
          span={10}
          style={{
            padding: '8px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          onClick={this.changeItem.bind(this, number)}
        >
          <Tooltip title="商品标题">{title.get('value')}</Tooltip>
        </Col>
        <Col span={6} style={{ padding: '8px' }}>
          <Tooltip title="修改">
            <Icon
              type="edit"
              style={{ marginRight: '15px' }}
              onClick={this.changeItem.bind(this, number)}
            />
          </Tooltip>
          <Tooltip title="删除" placement="bottom">
            <Popconfirm
              placement="top"
              title={'确认删除此图片?'}
              onConfirm={this.editorFeatures.bind(this, 'item_delete', number)}
              okText="确认"
              cancelText="取消"
            >
              <Icon type="delete" />
            </Popconfirm>
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
    return (
      <React.Fragment>
        {/*判断用户是否选择单项操作*/}
        {this.state.item ? (
          // 选择单项，跳转
          <Card
            title="编辑图集数据"
            extra={<div onClick={this.backItem}>返回</div>}
          >
            <Row gutter={16}>
              <Col
                span={7}
                offset={3}
                style={{
                  margin: 'auto',
                  height: '100px',
                  border: '1px solid #e7e7e7',
                  textAlign: 'center',
                  color: '#e7e7e7',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={this.showModal}
              >
                <img
                  style={{
                    verticalAlign: 'middle',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    margin: 'auto',
                  }}
                  src={
                    $$customize.getIn(['item', this.state.number, 'crop_img'])
                      ? $$customize.getIn([
                          'item',
                          this.state.number,
                          'crop_img',
                        ])
                      : 'http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png'
                  }
                  alt={'img'}
                />
              </Col>
              <Col span={17}>
                <Button.Group>
                  <Button onClick={this.crop_showModal}>裁剪</Button>
                  <Button onClick={this.showModal}>更换</Button>
                  <Popconfirm
                    placement="top"
                    title={'确认删除此背景图?'}
                    onConfirm={this.editorFeatures.bind(this, 'item_img_de')}
                    okText="确认"
                    cancelText="取消"
                  >
                    <Button>删除</Button>
                  </Popconfirm>
                </Button.Group>
                <br />
                <br />
                <p> 上传图片格式为：JPG/PNG</p>
                <UpImgPart
                  visible={this.state.visible}
                  unvisible={this.closeModal.bind(this)}
                  img={$$customize.getIn(['item', this.state.number, 'img'])}
                />
                <ImgCrop
                  crop_visible={this.state.crop_visible}
                  crop_unvisible={this.crop_closeModal.bind(this)}
                  src={$$customize.getIn(['item', this.state.number, 'img'])}
                />
              </Col>
            </Row>
            <Divider />
            <MallItemForm
              name={$$customize.get('name')}
              onChange={this.editorFeatures.bind(this, 'item_change')}
              {...$$data.getIn(['customize', 'item']).toJS()[this.state.number]}
            />
          </Card>
        ) : (
          //默认
          <Tabs defaultActiveKey={'1'} tabBarExtraContent={operations} key={1}>
            <Tabs.TabPane tab="内容设置" key="1">
              <Card
                style={{ marginTop: '-18px' }}
                title="项目列表"
                extra={
                  <div onClick={this.editorFeatures.bind(this, 'add_item')}>
                    <Icon type="plus" />添加
                  </div>
                }
              >
                {$$customize.get('item').map((data, index) => {
                  return (
                    <Collapse.Panel
                      style={{ marginBottom: '10px' }}
                      disabled
                      header={item(
                        data.get('crop_img'),
                        data.get('title'),
                        index
                      )}
                      key={index}
                    />
                  );
                })}
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="高级设置" key="2">
              {/*基础属性，单图上传没有基础属性*/}
              {$$customize.get('name') === 'single_img' ? (
                ''
              ) : (
                <Card title="基础属性" style={{ marginTop: '-18px' }}>
                  {/*颜色设置*/}
                  <Form hideRequiredMark>
                    <Form.Item {...form_item_style('字体颜色')}>
                      <Popover
                        content={
                          <SketchPicker
                            color={$$customize.getIn(['base', 'font_color'])}
                            onChangeComplete={this.editorFeatures.bind(
                              this,
                              'color'
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
                              'base',
                              'font_color',
                            ]),
                          }}
                        />
                      </Popover>
                    </Form.Item>
                  </Form>
                  <MallBaseForm
                    name={$$customize.get('name')}
                    onChange={this.editorFeatures.bind(this, 'base')}
                    {...$$customize.get('base').toJS()}
                  />
                </Card>
              )}
              <AdvanceEditor data={$$data} />
            </Tabs.TabPane>
          </Tabs>
        )}
      </React.Fragment>
    );
  }
}

/**
 * 从数据源获取数据
 * @param state
 * @returns {{select_value: *, choose_value: *}}
 */
const mapStateToProps = state => {
  return {
    select_value: state.h5_data_reducer,
    choose_value: state.choose_reducer,
  };
};

/**
 * 从数据源修改数据
 * @param dispatch
 * @returns {{select_upData: (function(*=, *=, *=): *), choose_upData: (function(*=, *=, *=): *)}}
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
export default connect(mapStateToProps, mapDispatchToProps)(EditorMall);
