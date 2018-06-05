import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; //状态管理器
import { SketchPicker } from 'react-color'; //拾色器
import { Card, Icon, Divider, Checkbox, Popover, Popconfirm } from 'antd'; //ant ui
import { bg_action } from '../../../../redux/action'; // 发送数据修改
import UpImgPart from '../../part/up_img'; // 图片上传组件

/**
 * 功能:
 * 1. 上传图片
 * 2. 编辑颜色
 * 细节：
 * 上传组件使用插件（自定义）
 * 颜色选择使用拾色器
 * 修复bug
 * 1.鉴于拾色器的功能使用，需要使用state来控制颜色 2018年06月01日11:52:17
 */
class BgEditor extends PureComponent {
  // 控制model 的显示与关闭
  state = {
    visible: false,
  };
  // 展示model
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  // 关闭Model
  closeModal = (state, data) => {
    this.setState({
      visible: false,
    });
    // 添加判断是为了控制电机model遮罩层时的图片显示问题
    if (state && data !== undefined) {
      const $$bg_new = this.props.bg_value.data.setIn(
        ['customize', 'img'],
        data
      );
      this.props.bg_upData($$bg_new, ''.false);
    }
  };
  // 界面功能实现 ---> 删除背景图
  delete = () => {
    const $$bg_new = this.props.bg_value.data.setIn(['customize', 'img'], '');
    this.props.bg_upData($$bg_new, ''.false);
  };
  // 界面功能实现 --> 通过识别关键字，完成平铺，固定的checkbox
  bg_img_config = (tip, e) => {
    let $$bg_new;
    if (tip === 'fixed') {
      $$bg_new = this.props.bg_value.data.setIn(
        ['customize', 'img_config', 'fixed'],
        e.target.checked
      );
    } else {
      $$bg_new = this.props.bg_value.data.setIn(
        ['customize', 'img_config', 'repeat'],
        e.target.checked
      );
    }
    this.props.bg_upData($$bg_new, ''.false);
  };
  // 界面功能实现 -->  修改色值后插入数据中
  bg_color_config = color => {
    const $$bg_new = this.props.bg_value.data.setIn(
      ['customize', 'color'],
      color.hex
    );
    this.props.bg_upData($$bg_new, ''.false);
  };

  /**
   * 界面渲染函数 ，功能实现路径
   * 1. 解构数据
   * 2. 提取数据
   * 3. 建立渲染界面结构 （图片栏，颜色栏）
   * 4. 为card创建样式函数
   * 5. 为图片栏创建逻辑
   * 5-1. 如果图片不存在：显示默认样式
   * 5-2. 如果图片存在：显示 背景图 + 底部操作栏
   * 6. 添加上传按钮
   * 7. 为颜色栏创建逻辑
   */
  render() {
    /**====1.解构数据====**/
    const { data } = this.props.bg_value; //将背景组件的核心数据解构出来  { data, meta, error }
    /**====2.提取数据====**/
    const $$color = data.getIn(['customize', 'color']); //颜色
    const $$img = data.getIn(['customize', 'img']); //图片
    const $$img_config = data.getIn(['customize', 'img_config']); //图片配置
    /**====4.样式函数====**/
    const card_style = title => {
      return {
        title: title,
        style: { width: '100%', height: '400px', cursor: 'pointer' },
      };
    };
    /**====6.添加上传按钮====**/
    const up_img_button = (
      <div onClick={this.showModal}>
        <Icon type="plus" />
        上传图片
      </div>
    );
    return (
      /**====3. 建立渲染界面结构====**/
      <React.Fragment>
        {/**====5. 为图片栏创建逻辑====**/}
        <Card {...card_style('背景图')} extra={up_img_button}>
          {$$img ? (
            /**======5-2. 如果图片存在：显示 背景图 + 底部操作栏=======**/
            <React.Fragment>
              <div
                style={{
                  width: '70%',
                  height: '240px',
                  margin: 'auto',
                  border: '1px solid #e7e7e7',
                  textAlign: 'center',
                  padding: ' 0 40px',
                  color: '#e7e7e7',
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
                  src={$$img}
                  alt={'img'}
                />
              </div>
              <div
                style={{
                  width: '70%',
                  margin: '10px auto',
                  textAlign: 'center',
                  color: '#e7e7e7',
                }}
              >
                <div
                  style={{ display: 'inline-block', color: '#19a0fa' }}
                  onClick={this.showModal}
                >
                  更换
                </div>
                <Divider type="vertical" />
                <div
                  style={{
                    display: 'inline-block',
                    marginRight: '25px',
                    color: '#19a0fa',
                  }}
                >
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
            /**======5-1. 如果图片不存在：显示默认样式=======**/
            <div
              onClick={this.showModal}
              className={'background_transparent'}
              style={{ width: '100%', height: '300px' }}
            />
          )}
          {/*Model 框 visible:控制model 显示 unvisible:控制model关闭*/}
          <UpImgPart
            visible={this.state.visible}
            unvisible={this.closeModal.bind(this)}
            img={$$img}
          />
        </Card>
        {/**====7. 为颜色栏创建逻辑====**/}
        <Card {...card_style('背景色配置')}>
          {/*点击后弹出 SketchPicker内的内容*/}
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
              style={{
                width: '40%',
                textAlign: 'center',
                background: $$color, //获取颜色值，实时显示数据
              }}
            >
              <Icon type="edit" />&nbsp;&nbsp;自定义
            </Card.Grid>
          </Popover>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    bg_value: state.bg_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bg_upData: (data, meta, error) => dispatch(bg_action(data, meta, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BgEditor);
