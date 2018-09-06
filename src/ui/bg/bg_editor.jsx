import React, { PureComponent } from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import { Card, Icon, Popover } from 'antd';
import { redux_action } from '../../redux/action';
import UploadImg from '../../components/Middleware/upload/upload_img.upload';
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
    this.props.upData('BG_UI', $$bg_new);
  };

  bg_color_config = color => {
    const $$bg_new = this.props.bg_ui_value.data.setIn(
      ['customize', 'color'],
      color.hex
    );
    const $$bg_news = $$bg_new.setIn(['customize', 'img'], '');
    const $$bg_crop_img = $$bg_news.setIn(['customize', 'crop_img'], '');
    this.props.upData('BG_UI', $$bg_crop_img);
  };

  render() {
    // 解构出背景组件数据
    const $$data = this.props.bg_ui_value.data;
    const $$color = $$data.getIn(['customize', 'color']); //颜色
    const $$img = $$data.getIn(['customize', 'img']); //原始图片地址
    const $$crop_img = $$data.getIn(['customize', 'crop_img']); //剪裁后的图片
    // const gridStyle = {
    //   width: "25%",
    //   textAlign: "center"
    // };
    // const $$img_config = $$data.getIn(["customize", "img_config"]); //图片配置
    /**
     * 背景编辑栏 图片上传默认样式
     */

    /**
     * 背景组件 包含图片时的样式
     * 包含 ，图片展示，删除，裁剪，位置设置。。。
     */
    const bgImg_editor = (
      <React.Fragment>
        <UploadImg
          type={2}
          img_url={$$img}
          func={this.changeBgImgToChild}
          children={
            <React.Fragment>
              {$$data.getIn(['customize', 'crop_img']) ? (
                <div className={style.img_show}>
                  <img className={style.img} src={$$crop_img} alt={'img'} />
                </div>
              ) : (
                <div className={style.bg_transparent}>
                  <Icon type="plus" style={{ fontSize: '20px' }} />
                  <br />
                  <div style={{ fontSize: '15px' }}>上传图片</div>
                </div>
              )}
            </React.Fragment>
          }
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.5182970046062747.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.5182970046062747.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.21293656213657686.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.21293656213657686.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.9399785810363934.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.9399785810363934.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.017314256564314734.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.017314256564314734.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.8733457750857099.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.8733457750857099.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.2633511981756784.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.2633511981756784.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.06858509273754665.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.06858509273754665.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.19132678881431509.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.19132678881431509.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.8088298012566268.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.8088298012566268.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.9293878801420654.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.9293878801420654.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.7019754276704415.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.7019754276704415.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.06444740452582765.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.06444740452582765.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.4181801561048386.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.4181801561048386.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.25534700484800354.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.25534700484800354.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.8238020347899278.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.8238020347899278.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.8236058044578007.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.8236058044578007.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.5134087373905294.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.5134087373905294.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.40632079362931695.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.40632079362931695.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.5731551667623831.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.5731551667623831.png) repeat',
          }}
        />
        <Card.Grid
          onClick={this.changeBgImgToChild.bind(
            this,
            'http://src.e7wei.com/0.9002937599084637.png'
          )}
          style={{
            width: '25%',
            textAlign: 'center',
            background:
              'url(http://src.e7wei.com/0.9002937599084637.png) repeat',
          }}
        />
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Card title={'背景色'} className={style.card_color}>
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
              <Icon type="edit" />&nbsp;自定义
            </Card.Grid>
          </Popover>
        </Card>
        <Card className={style.card} title={'背景图'}>
          {bgImg_editor}
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 当前选择编辑的组件
    editor_ui_value: state.editorUi_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
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
)(BgEditor);
