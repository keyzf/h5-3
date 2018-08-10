import React, { PureComponent } from 'react';
import { fromJS } from 'immutable';
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

import MallItemForm from './mall_item_form';
import MallBaseForm from './mall_base_form';
import AdvanceEditor from '../advance.form';
import { ImgCropFactory } from '../../factory/img_cropfactory';
import UploadImg from '../../upload/upload_img.upload';
import { $$mall_item_database } from '../../../../database/mall.db';

import { connect } from 'react-redux';
import { redux_action } from '../../../../database/redux/action';

class EditorMall extends PureComponent {
  state = {
    //判断用户是否编辑单个项目
    item: false,
    // 修改的项目编号
    number: '',
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

  cropImgToChild = data => {
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
  };
  changImgToChild = data => {
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
    if (opt_name === 'content_color') {
      this.sendAction(
        $$props_data.setIn(['advance', 'content_color'], data.hex)
      );
    }
  };
  /**
   * 触发器
   * @param up_data
   */
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

  /**
   * 元素渲染
   * @returns {*}
   */
  render() {
    const $$data = this.props.data.get('data');
    const $$customize = $$data.get('customize');

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
            src={img}
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
      <Tabs defaultActiveKey={'1'} key={1}>
        <Tabs.TabPane tab="内容设置" key="1">
          <div
            style={{
              height: 'calc(100vh -  55px)',
              overflow: 'hidden',
              marginTop: '-18px',
            }}
          >
            {this.state.item ? (
              <Card
                style={{
                  background: 'transparent',
                  overflow: 'auto',
                  height: '100%',
                }}
                title="编辑图集数据"
                extra={<div onClick={this.backItem}>返回</div>}
              >
                <Row gutter={16}>
                  <Col span={9}>
                    <UploadImg
                      type={1}
                      func={this.changImgToChild}
                      img_url={$$customize.getIn([
                        'item',
                        this.state.number,
                        'img',
                      ])}
                      children={
                        <div className={'img_show'}>
                          {$$customize.getIn([
                            'item',
                            this.state.number,
                            'crop_img',
                          ]) ? (
                            <img
                              className={'img'}
                              src={$$customize.getIn([
                                'item',
                                this.state.number,
                                'crop_img',
                              ])}
                              alt={'img'}
                            />
                          ) : (
                            '待上传'
                          )}
                        </div>
                      }
                    />
                  </Col>
                  <Col span={15}>
                    <Button.Group>
                      <UploadImg
                        type={1}
                        func={this.changImgToChild}
                        img_url={$$customize.getIn([
                          'item',
                          this.state.number,
                          'img',
                        ])}
                        children={<Button>更换</Button>}
                      />
                      <ImgCropFactory
                        func={this.cropImgToChild}
                        children={<Button>裁剪</Button>}
                        img_src={$$customize.getIn([
                          'item',
                          this.state.number,
                          'img',
                        ])}
                      />
                    </Button.Group>
                    <br />
                    <br />
                    <div>格式：*.jpg / *.png</div>
                    <div>大小不超过2M</div>
                  </Col>
                </Row>
                <Divider />
                <MallItemForm
                  name={$$customize.get('name')}
                  onChange={this.editorFeatures.bind(this, 'item_change')}
                  {...$$data.getIn(['customize', 'item']).toJS()[
                    this.state.number
                  ]}
                />
              </Card>
            ) : (
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                style={{ background: 'transparent' }}
              >
                <Collapse.Panel header="列表" key="1">
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
                  {$$data.getIn(['customize', 'name']) !== 'grid_mall' ||
                  'list_mall' ? (
                    ''
                  ) : (
                    <Button
                      onClick={this.editorFeatures.bind(this, 'add_item')}
                      style={{ width: '100%' }}
                      type="dashed"
                    >
                      添加
                    </Button>
                  )}
                </Collapse.Panel>
              </Collapse>
            )}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="高级设置" key="2">
          <div
            style={{
              height: 'calc(100vh -  55px)',
              overflow: 'hidden',
              marginTop: '-18px',
              backgroundImage:
                'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              style={{ background: 'transparent' }}
            >
              <Collapse.Panel header="基础属性" key="1">
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
                <Form hideRequiredMark>
                  <Form.Item {...form_item_style('内容背景')}>
                    <Popover
                      content={
                        <SketchPicker
                          color={$$data.getIn(['advance', 'content_color'])}
                          onChangeComplete={this.editorFeatures.bind(
                            this,
                            'content_color'
                          )}
                        />
                      }
                      trigger="click"
                    >
                      {$$data.getIn(['advance', 'content_color']) !==
                      undefined ? (
                        <div
                          style={{
                            marginTop: '6px',
                            height: '25px',
                            width: '100%',
                            backgroundColor: $$data.getIn([
                              'advance',
                              'content_color',
                            ]),
                          }}
                        />
                      ) : (
                        <div
                          className={'bg_transparent'}
                          style={{
                            marginTop: '6px',
                            height: '25px',
                            width: '100%',
                          }}
                        />
                      )}
                    </Popover>
                  </Form.Item>
                </Form>

                <MallBaseForm
                  name={$$customize.get('name')}
                  onChange={this.editorFeatures.bind(this, 'base')}
                  {...$$customize.get('base').toJS()}
                />
              </Collapse.Panel>
            </Collapse>
            <AdvanceEditor data={$$data} />
          </div>
        </Tabs.TabPane>
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
)(EditorMall);
