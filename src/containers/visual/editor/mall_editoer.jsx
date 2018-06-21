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
} from 'antd';
import { SketchPicker } from 'react-color';
import { choose_action, select_action } from '../../../redux/action';
import UpImgPart from '../../../common/up_img_common/upload_common';
import MallBaseForm from '../../../ui/mall/mall_base_form';

import ImgItemForm from '../../../ui/mall/mall_item_form';
import {
  $$grid_mall_database,
  $$list_mall_database,
  $$mall_item_database,
} from '../../../ui/mall/mall_database';

class EditorMall extends React.Component {
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
    // 表单
    if (opt_name === 'item_change') {
      // update position
      const $$item = {
        ...$$select_data
          .get($$choose_data.get('number'))
          .get('customize')
          .get('item')
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
    //功能性按键
    if (opt_name === 'add_item') {
      const $$add = $$select_data
        .get($$choose_data.get('number'))
        .get('customize')
        .get('item')
        .push($$mall_item_database);
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$add)
      );
    }
    if (opt_name === 'reset') {
      if (name === 'list_mall') {
        this.sendAction($$list_mall_database);
      }
      if (name === 'grid_mall') {
        this.sendAction($$grid_mall_database);
      }
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
    if (opt_name === 'item_deletes') {
      const $$new_data = $$select_data
        .get($$choose_data.get('number'))
        .get('customize')
        .get('item')
        .delete(data);

      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['customize', 'item'], $$new_data)
      );
    }
    // 高级设置
    if (opt_name === 'color') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'color'], data.hex)
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
    if (opt_name === 'delete') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'img'], '')
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

  render() {
    // 传递过来的数据
    const $$ui_text_data = this.props.data.get('data');
    const $$customize = $$ui_text_data.get('customize');
    const $$advance = $$ui_text_data.get('advance');
    const operations = (
      <Button onClick={this.editorFeatures.bind(this, 'reset')}>
        恢复默认
      </Button>
    );
    const item = (img, title, number) => (
      <Row gutter={8}>
        <Col span={8}>
          <img
            width={'50px'}
            height={'45px'}
            src={
              img
                ? img
                : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
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
          <Tooltip title="删除">
            <Icon
              type="delete"
              onClick={this.editorFeatures.bind(this, 'item_deletes', number)}
            />
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
              {/*图片*/}
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
                    $$customize
                      .get('item')
                      .get(this.state.number)
                      .get('img')
                      ? $$customize
                          .get('item')
                          .get(this.state.number)
                          .get('img')
                      : 'http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png'
                  }
                  alt={'img'}
                />
              </Col>
              {/*图片配套功能*/}
              <Col span={14}>
                <Button.Group>
                  <Button onClick={this.showModal}>更换</Button>
                  <Button
                    onClick={this.editorFeatures.bind(this, 'item_delete')}
                  >
                    删除
                  </Button>
                </Button.Group>
                <br />
                <br />
                <Row gutter={16}>
                  <Col span={10}>
                    <Checkbox
                      onChange={this.editorFeatures.bind(this, 'item_tiling')}
                      defaultValue={$$customize
                        .get('item')
                        .get(this.state.number)
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
                        'item_stretching'
                      )}
                      defaultValue={$$customize
                        .get('item')
                        .get(this.state.number)
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
                  unvisible={this.itemCloseModal.bind(this)}
                  img={$$customize
                    .get('item')
                    .get(this.state.number)
                    .get('img')}
                />
              </Col>
            </Row>
            <Divider />
            {/*表单*/}
            <ImgItemForm
              name={$$customize.get('name')}
              {...$$ui_text_data
                .get('customize')
                .get('item')
                .toJS()[this.state.number]}
              onChange={this.editorFeatures.bind(this, 'item_change')}
            />
          </Card>
        ) : (
          <Tabs defaultActiveKey={'1'} tabBarExtraContent={operations} key={1}>
            <Tabs.TabPane tab="内容设置" key="1">
              <Card title="基础属性" style={{ marginTop: '-18px' }}>
                <MallBaseForm
                  name={$$customize.get('name')}
                  {...$$customize.get('base').toJS()}
                  onChange={this.editorFeatures.bind(this, 'base')}
                />
              </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditorMall);
