import React, { PureComponent } from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import { Card, Icon, Divider, Checkbox, Popover, Popconfirm } from 'antd';
import { redux_action } from '../../redux/action';
import { ImgCropFactory } from '../../factory/img_cropfactory';
import BgHeightForm from './bg_height.form';
import UploadImg from '../../upload/upload_img.upload';
import style from './bg_editor.module.scss';

class BgEditor extends PureComponent {
  changeBgImgToChild = url => {
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'img'],
      url
    );
    const $$bg_crop_img = $$bg_new.setIn(['customize', 'crop_img'], url);
    this.props.upData('BG_UI', $$bg_crop_img);
  };
  cropBgImgToChild = data => {
    console.log('to', data);
    let $$new_img = this.props.bg_ui_value.data.getIn(['customize', 'img']);
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'crop_img'],
      `${$$new_img}?imageMogr2/crop/!${data.width}x${data.height}a${data.x}a${
        data.y
      }`
    );
    this.props.upData('BG_UI', $$bg_new);
  };
  delete = () => {
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'img'],
      ''
    );
    const $$bg_crop = $$bg_new.setIn(['customize', 'crop_img'], '');
    this.props.upData('BG_UI', $$bg_crop);
  };
  bg_img_config = (tip, e) => {
    let $$bg_new;
    if (tip === 'fixed') {
      $$bg_new = this.props.bg_ui_value.data.setIn(
        ['customize', 'img_config', 'fixed'],
        e.target.checked
      );
    }
    if (tip === 'repeat') {
      $$bg_new = this.props.bg_ui_value.data.setIn(
        ['customize', 'img_config', 'repeat'],
        e.target.checked
      );
    }
    if (tip === 'height') {
      $$bg_new = this.props.bg_ui_value.data.setIn(
        ['advanced', 'height', 'value'],
        e.height.value
      );
    }
    this.props.upData('BG_UI', $$bg_new);
  };
  bg_color_config = color => {
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'color'],
      color.hex
    );
    this.props.upData('BG_UI', $$bg_new);
  };

  render() {
    // 解构出背景组件数据
    const $$data = this.props.bg_ui_value.data;
    const $$color = $$data.getIn(['customize', 'color']); //颜色
    const $$img = $$data.getIn(['customize', 'img']); //原始图片地址
    const $$crop_img = $$data.getIn(['customize', 'crop_img']); //剪裁后的图片
    const $$img_config = $$data.getIn(['customize', 'img_config']); //图片配置
    /**
     * 背景编辑栏 图片上传默认样式
     */
    const default_upload = (
      <UploadImg
        type={1}
        img_url={$$img}
        func={this.changeBgImgToChild}
        children={
          <div className={style.bg_transparent}>
            <Icon
              type="plus"
              style={{ fontSize: '95px', marginTop: '-17px' }}
            />
            <br />
            <br />
            <div style={{ fontSize: '22px', marginTop: '-17px' }}>上传图片</div>
          </div>
        }
      />
    );
    /**
     * 背景组件 包含图片时的样式
     * 包含 ，图片展示，删除，裁剪，位置设置。。。
     */
    const bgImg_editor = (
      <React.Fragment>
        {/*展示图片*/}
        <UploadImg
          type={1}
          img_url={$$img}
          func={this.changeBgImgToChild}
          children={
            <div className={style.img_show}>
              <img className={style.img} src={$$crop_img} alt={'img'} />
            </div>
          }
        />
        {/*操作选项*/}
        <div className={style.editor}>
          <UploadImg
            type={1}
            img_url={$$img}
            func={this.changeBgImgToChild}
            children={<div className={style.editor_click}>更换</div>}
          />
          <Divider type="vertical" />
          <ImgCropFactory
            func={this.cropBgImgToChild}
            img_url={$$img}
            children={
              <div className={style.editor_click}>
                <div className={style.editor_click}>裁剪</div>
              </div>
            }
          />
          <Divider type="vertical" />
          <div className={style.editor_delete}>
            <Popconfirm
              placement="top"
              title={'确认删除此背景图?'}
              onConfirm={this.delete}
              okText="确认"
              cancelText="取消"
            >
              删除
            </Popconfirm>
          </div>
          <Checkbox
            onChange={this.bg_img_config.bind(this, 'repeat')}
            defaultChecked={$$img_config.get('repeat')}
          >
            重复
          </Checkbox>
          <Checkbox
            onChange={this.bg_img_config.bind(this, 'fixed')}
            defaultChecked={$$img_config.get('fixed')}
          >
            固定
          </Checkbox>
        </div>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Card className={style.card} title={'背景图'}>
          {$$data.getIn(['customize', 'crop_img'])
            ? bgImg_editor
            : default_upload}
        </Card>
        <Card title={'背景色配置'} className={style.card_color}>
          <Popover
            content={
              <SketchPicker
                color={$$color}
                onChangeComplete={this.bg_color_config}
              />
            }
            trigger="click"
            placement="left"
          >
            <Card.Grid
              className={style.card_grid}
              style={{ background: $$color }}
            >
              <Icon type="edit" />&nbsp;&nbsp;自定义
            </Card.Grid>
          </Popover>
        </Card>
        <Card title={'背景高度'} className={style.card_height}>
          <BgHeightForm
            height={{
              value: $$data.getIn(['advanced', 'height', 'value']),
            }}
            onChange={this.bg_img_config.bind(this, 'height')}
          />
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 当前选择编辑的组件
    editor_ui_value: state.editor_ui_reducer,
    // 背景组件样式
    bg_ui_value: state.bg_ui_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BgEditor);
