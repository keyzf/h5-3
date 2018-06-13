import React from 'react';
import { connect } from 'react-redux';
import { Map, fromJS } from 'immutable';
import {
  Tabs,
  Button,
  Collapse,
  Row,
  Col,
  Icon,
  Card,
  Checkbox,
  Popover,
  Tooltip,
  Divider,
  Popconfirm,
} from 'antd';
import { SketchPicker } from 'react-color';
import { choose_action, select_action } from '../../../redux/action';
import UpImgPart from '../upload_common';
import ImgBaseForm from '../../../ui/visual/form/img_base_form';
import ImgItemForm from '../../../ui/visual/form/img_item_form';
import {
  $$carousel_img_database,
  $$grid_img_database,
  $$img_addItem_database,
  $$list_img_database,
  $$slider_img_database,
  $$single_img_database,
} from '../../../ui/img/img_database';

class EditorImg extends React.Component {
  /**
   * control mode
   * @type {{visible: boolean}}
   */
  state = {
    visible: false,
    item: false,
    number: '',
  };

  // 修改单个选项值
  changeItem = number => {
    this.setState({
      item: true,
      number: number,
    });
  };

  // 回到原页面
  backItem = () => {
    this.setState({
      item: false,
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

  itemCloseModal = (state, data) => {
    this.setState({
      visible: false,
    });
    if (state && data !== undefined) {
      const $$select_data = this.props.select_value.data;
      const $$choose_data = this.props.choose_value.data;

      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item', this.state.number, 'img'], data)
      );
    }
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
    // Current component name
    const name = $$select_data.getIn([
      $$choose_data.get('number'),
      'customize',
      'name',
    ]);
    // features
    if (opt_name === 'item_deletes') {
      const $$new_data = $$select_data
        .getIn([$$choose_data.get('number'), 'customize', 'item'])
        .delete(data);
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$new_data)
      );
    }

    if (opt_name === 'item_change') {
      // update position
      const $$item = {
        ...$$select_data
          .getIn([$$choose_data.get('number'), 'customize', 'item'])
          .toJS()[this.state.number],
        ...data,
      };
      // new data
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item', this.state.number], fromJS($$item))
      );
    }

    if (opt_name === 'add_item') {
      const $$add = $$select_data
        .getIn([$$choose_data.get('number'), 'customize', 'item'])
        .push($$img_addItem_database);
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$add)
      );
    }
    if (opt_name === 'base') {
      if (data.layout) {
        this.sendAction(
          $$select_data
            .get($$choose_data.get('number'))
            .setIn(['customize', 'base', 'layout', 'value'], data.layout.value)
        );
      }
      if (data.show_element) {
        this.sendAction(
          $$select_data
            .get($$choose_data.get('number'))
            .setIn(
              ['customize', 'base', 'show_element', 'value'],
              data.show_element.value
            )
        );
      }
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

    if (opt_name === 'item_delete') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item', this.state.number, 'img'], '')
      );
    }
    if (opt_name === 'item_tiling') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(
            [
              'customize',
              'item',
              this.state.number,
              'img_config',
              'tiling',
              'value',
            ],
            data.target.checked
          )
      );
    }
    if (opt_name === 'item_stretching') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(
            [
              'customize',
              'item',
              this.state.number,
              'img_config',
              'stretching',
              'value',
            ],
            data.target.checked
          )
      );
    }

    if (opt_name === 'reset') {
      if (name === 'single_img') {
        this.sendAction($$single_img_database);
      }
      if (name === 'list_img') {
        this.sendAction($$list_img_database);
      }
      if (name === 'grid_img') {
        this.sendAction($$grid_img_database);
      }
      if (name === 'sider_img') {
        this.sendAction($$slider_img_database);
      }
      if (name === 'carousel_img') {
        this.sendAction($$carousel_img_database);
      }
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

  render() {
    // 传递过来的数据
    const $$ui_text_data = this.props.data.get('data');
    const $$customize = $$ui_text_data.get('customize');
    const $$advance = $$ui_text_data.get('advance');
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
    const item = (img, title, number) => (
      <Row gutter={16}>
        <Col span={8}>
          <img
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
        >
          {title.get('value')}
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
              onConfirm={this.editorFeatures.bind(this, 'item_deletes', number)}
              okText="确认"
              cancelText="取消"
            >
              <Icon type="delete" />
            </Popconfirm>
          </Tooltip>
        </Col>
      </Row>
    );
    return (
      <div>
        {this.state.item ? (
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
                    $$customize.getIn(['item', this.state.number, 'img'])
                      ? $$customize.getIn(['item', this.state.number, 'img'])
                      : 'http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png'
                  }
                  alt={'img'}
                />
              </Col>
              <Col span={14}>
                <Button.Group>
                  <Button onClick={this.showModal}>更换</Button>
                  <Popconfirm
                    placement="top"
                    title={'确认删除此背景图?'}
                    onConfirm={this.editorFeatures.bind(this, 'item_delete')}
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
                  unvisible={this.itemCloseModal.bind(this)}
                  img={$$customize.getIn(['item', this.state.number, 'img'])}
                />
              </Col>
            </Row>
            <Divider />
            <ImgItemForm
              name={$$customize.get('name')}
              {...$$ui_text_data.getIn(['customize', 'item']).toJS()[
                this.state.number
              ]}
              onChange={this.editorFeatures.bind(this, 'item_change')}
            />
          </Card>
        ) : (
          <Tabs defaultActiveKey={'1'} tabBarExtraContent={operations} key={1}>
            <Tabs.TabPane tab="内容设置" key="1">
              {$$customize.get('name') === 'single_img' ? (
                ''
              ) : (
                <Card title="基础属性" style={{ marginTop: '-18px' }}>
                  <ImgBaseForm
                    name={$$customize.get('name')}
                    {...$$customize.get('base').toJS()}
                    onChange={this.editorFeatures.bind(this, 'base')}
                  />
                </Card>
              )}
              <Card
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
                      header={item(data.get('img'), data.get('title'), index)}
                      key={index}
                    />
                  );
                })}
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="高级设置" key="2">
              <Card title="背景色" style={{ marginTop: '-18px' }}>
                <Popover
                  content={
                    <SketchPicker
                      color={$$advance.get('color')}
                      onChangeComplete={this.editorFeatures.bind(this, 'color')}
                    />
                  }
                  trigger="click"
                >
                  <Card.Grid
                    style={{
                      textAlign: 'center',
                      width: '45%',
                      background: $$advance.get('color'),
                    }}
                  >
                    <Icon type="plus" />&nbsp;&nbsp;自定义
                  </Card.Grid>
                </Popover>
              </Card>
              <Card title="背景图">
                <Row gutter={16}>
                  <Col
                    span={7}
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
                        $$advance.get('img')
                          ? $$advance.get('img')
                          : 'http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png'
                      }
                      alt={'img'}
                    />
                  </Col>
                  <Col span={12}>
                    <Button.Group>
                      <Button onClick={this.showModal}>更换</Button>
                      <Button
                        onClick={this.editorFeatures.bind(this, 'delete')}
                      >
                        删除
                      </Button>
                    </Button.Group>
                    <br />
                    <br />
                    <Row gutter={16}>
                      <Col span={12}>
                        <Checkbox
                          onChange={this.editorFeatures.bind(this, 'tiling')}
                          defaultValue={$$advance
                            .get('img_config')
                            .get('tiling')
                            .get('value')}
                        >
                          平铺
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          onChange={this.editorFeatures.bind(
                            this,
                            'stretching'
                          )}
                          defaultValue={$$advance
                            .get('img_config')
                            .get('stretching')
                            .get('value')}
                        >
                          拉伸
                        </Checkbox>
                      </Col>
                    </Row>
                    <UpImgPart
                      visible={this.state.visible}
                      unvisible={this.closeModal.bind(this)}
                      img={$$advance.get('img')}
                    />
                  </Col>
                </Row>
              </Card>
            </Tabs.TabPane>
          </Tabs>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorImg);
