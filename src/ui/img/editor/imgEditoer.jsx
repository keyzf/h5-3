import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {
  Button,
  Collapse,
  Row,
  Col,
  Icon,
  Card,
  Tooltip,
  Divider,
  Popconfirm,
} from 'antd';
import ImgItemForm from '../img_item_form';
import { $$img_addItem_database } from '../img.db';
import { redux_action } from '../../../redux/action';
import { ImgCropFactory } from '../../../components/imgCrop';
import UploadImg from '../../../components/upLoad/imgModel';

class EditorImg extends PureComponent {
  state = {
    //判断用户是否编辑单个项目
    item: false,
    // 修改的项目编号
    number: 0,
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
    const $$model = $$crop_img.setIn(['customize', 'model'], false);
    this.sendAction($$model);
  };
  closeModel = () => {
    const $$props_data = this.props.data.get('data');
    const $$model = $$props_data.setIn(['customize', 'model'], false);
    this.sendAction($$model);
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
  changeItem = number => {
    this.setState({
      item: true,
      number: number,
    });
  };
  backItem = () => {
    this.setState({
      item: false,
      number: '',
    });
  };
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
        .push($$img_addItem_database);
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
    const $$name = $$data.getIn(['customize', 'name']);
    const Panel = Collapse.Panel;
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
          <Tooltip title="图片补充说明">
            {title.get('value')}-{`${number + 1}`}
          </Tooltip>
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
    /**
     * 展示组件
     * @type {string}
     */
    let show_component = '';
    /**
     * 如果用户当前选择的是单图
     */
    if ($$name === 'single_img') {
      show_component = (
        <Card title="图片设置">
          <Row gutter={16}>
            <Col span={9}>
              <UploadImg
                type={1}
                func={this.changImgToChild.bind(this)}
                img_url={$$customize.getIn(['item', this.state.number, 'img'])}
                model={$$customize.get('model')}
                closeModel={this.closeModel.bind(this)}
              >
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
              </UploadImg>
            </Col>
            <Col span={15}>
              <Button.Group>
                <Button>
                  <UploadImg
                    type={1}
                    func={this.changImgToChild}
                    img_url={$$customize.getIn([
                      'item',
                      this.state.number,
                      'img',
                    ])}
                  >
                    <div> 更换</div>
                  </UploadImg>
                </Button>
                <Button>
                  <ImgCropFactory
                    func={this.cropImgToChild}
                    img_src={$$customize.getIn([
                      'item',
                      this.state.number,
                      'img',
                    ])}
                  >
                    <div>裁剪</div>
                  </ImgCropFactory>
                </Button>
              </Button.Group>
              <br />
              <br />
              <div>格式：*.jpg / *.png</div>
              <div>大小不超过2M</div>
            </Col>
          </Row>
          <Divider />
          <ImgItemForm
            name={$$customize.get('name')}
            onChange={this.editorFeatures.bind(this, 'item_change')}
            {...$$data.getIn(['customize', 'item']).toJS()[0]}
          />
        </Card>
      );
    } else {
      if (this.state.item) {
        show_component = (
          <Card
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
                  <Button>
                    <UploadImg
                      type={1}
                      func={this.changImgToChild}
                      img_url={$$customize.getIn([
                        'item',
                        this.state.number,
                        'img',
                      ])}
                      children={<div>更换</div>}
                    />
                  </Button>
                  <Button>
                    <ImgCropFactory
                      func={this.cropImgToChild}
                      children={<div>裁剪</div>}
                      img_src={$$customize.getIn([
                        'item',
                        this.state.number,
                        'img',
                      ])}
                    />
                  </Button>
                </Button.Group>
                <br />
                <br />
                <div>格式：*.jpg / *.png</div>
                <div>大小不超过2M</div>
              </Col>
            </Row>
            <Divider />
            <ImgItemForm
              name={$$customize.get('name')}
              onChange={this.editorFeatures.bind(this, 'item_change')}
              {...$$data.getIn(['customize', 'item']).toJS()[this.state.number]}
            />
          </Card>
        );
      } else {
        show_component = (
          <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header="列表" key="1">
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
              {$$data.getIn(['customize', 'name']) !== 'carousel_img' ? (
                ''
              ) : (
                <Button
                  type="dashed"
                  style={{ width: '100%' }}
                  onClick={this.editorFeatures.bind(this, 'add_item')}
                >
                  <Icon type="plus" />添加
                </Button>
              )}
            </Panel>
          </Collapse>
        );
      }
    }

    return <Fragment>{show_component}</Fragment>;
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
)(EditorImg);
