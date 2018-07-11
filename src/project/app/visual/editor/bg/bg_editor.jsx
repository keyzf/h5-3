import React, { PureComponent } from 'react';
import connect from '../../../../redux/decorator';
import { SketchPicker } from 'react-color';
import { Card, Icon, Divider, Checkbox, Popover, Popconfirm } from 'antd';
import BgHeightForm from '../../../../../ui/background/bg_height.form';
import UploadImgCommon from '../../../../common/upload_img.common';
import { ImgCropCommon } from '../../../../common/img_crop.common';
import style from './bg_editor.module.scss';

@connect
export default class BgEditor extends PureComponent {
  /**
   * 方法传递给子组件
   * 子组件通过调用此方法，修改 bg_ui 的背景组件
   * */
  changeBgImgToChild = url => {
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'img'],
      url
    );
    const $$bg_crop_img = $$bg_new.setIn(['customize', 'crop_img'], url);
    this.props.upData('BG_UI', $$bg_crop_img);
  };
  /**
   * 方法传递给子组件
   * 子组件通过调用此方法，裁剪 bg_ui 的背景图片
   * */
  cropBgImgToChild = data => {
    let $$new_img = this.props.bg_ui_value.data.getIn(['customize', 'img']);
    $$new_img =
      $$new_img +
      `?imageMogr2/crop/!${data.width}x${data.height}a${data.x}a${data.y}`;
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'crop_img'],
      $$new_img
    );
    this.props.upData('BG_UI', $$bg_new);
  };
  /**
   * 删除背景图
   */
  delete = () => {
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'img'],
      ''
    );
    const $$bg_crop = $$bg_new.setIn(['customize', 'crop_img'], '');
    this.props.upData('BG_UI', $$bg_crop);
  };
  /**
   * 通过识别关键字
   * 修改表单数据
   * @param tip
   * @param e
   */
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
  /**
   * 修改色值后插入数据中
   * @param color
   */
  bg_color_config = color => {
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'color'],
      color.hex
    );
    this.props.upData('BG_UI', $$bg_new);
  };

  render() {
    // 解构出背景组件数据
    const { data } = this.props.bg_ui_value;
    // 获取特定数值
    const $$color = data.getIn(['customize', 'color']); //颜色
    const $$crop_img = data.getIn(['customize', 'crop_img']); //图片
    const $$img = data.getIn(['customize', 'img']); //图片
    const $$img_config = data.getIn(['customize', 'img_config']); //图片配置
    const $$height = data.get('advanced').toJS();
    const card_upload_img = (
      <UploadImgCommon
        img_url={'$$img'}
        func={this.changeBgImgToChild}
        children={
          <React.Fragment>
            <Icon type="plus" />上传图片
          </React.Fragment>
        }
      />
    );
    return (
      <React.Fragment>
        <Card className={style.card} title={'背景图'} extra={card_upload_img}>
          {$$crop_img ? (
            <React.Fragment>
              <UploadImgCommon
                img_url={'$$img'}
                func={this.changeBgImgToChild}
                children={
                  <div className={style.img_show}>
                    <img className={style.img} src={$$crop_img} alt={'img'} />
                  </div>
                }
              />

              <div className={style.editor}>
                <UploadImgCommon
                  img_url={'$$img'}
                  func={this.changeBgImgToChild}
                  children={
                    <div
                      className={style.editor_click}
                      onClick={this.showModal}
                    >
                      更换
                    </div>
                  }
                />
                <Divider type="vertical" />
                <ImgCropCommon
                  func={this.cropBgImgToChild}
                  src={$$img}
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
          ) : (
            <UploadImgCommon
              img_url={'$$img'}
              func={this.changeBgImgToChild}
              children={<div className={style.bg_transparent} />}
            />
          )}
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
            {...$$height}
            onChange={this.bg_img_config.bind(this, 'height')}
          />
        </Card>
      </React.Fragment>
    );
  }
}
