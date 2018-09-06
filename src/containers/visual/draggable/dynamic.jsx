import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Rnd } from 'react-rnd';
import ResizableRect from '../../../utils/resizable/ResizableRect';
import ComponentLocation from './component-location';
import { NoChoose, UIChoose } from './ui_choose_style';
import { redux_action } from '../../../redux/action';
import style from './draggablel.module.scss';

/**
 * 画板中，组件的挪移
 * 电脑端，手机端
 */
class DynamicCommon extends PureComponent {
  /**
   * 选择ui
   * @param number
   * @param data
   */
  choose = (number, data) => {
    this.props.upData(
      'EDITOR_UI',
      { number: number, data: data, com: true },
      {
        content: true,
        choose: true,
      }
    );
  };

  /**
   * 移动端挪移操作
   * @param e
   * @param d
   */
  rndDrag = (e, d) => {
    const $$change_translateX = this.props.data.setIn(['advance', 'left'], d.x);
    const $$change_translateY = $$change_translateX.setIn(
      ['advance', 'top'],
      d.y
    );
    this.sendAction($$change_translateY);
  };

  /**
   *  移动端挪移操作
   * @param e
   * @param direction
   * @param ref
   * @param delta
   * @param position
   */
  rndResize = (e, direction, ref, delta, position) => {
    const { x, y } = position;
    // 更新width 与 height 的值
    const $$change_width = this.props.data.setIn(
      ['advance', 'width'],
      ref.style.width
    );
    const $$change_height = $$change_width.setIn(
      ['advance', 'height'],
      ref.style.height
    );
    // // 更新width 与 height 的值
    const $$change_left = $$change_height.setIn(['advance', 'left'], x);
    const $$change_top = $$change_left.setIn(['advance', 'top'], y);
    // new data
    this.sendAction($$change_top);
  };

  /**
   * 电脑端挪移操作
   * @param style
   */
  handleResize = style => {
    let { top, left, width, height } = style;
    top = Math.round(top);
    left = Math.round(left);
    width = Math.round(width);
    height = Math.round(height);
    // 更新width 与 height 的值
    const $$change_width = this.props.data.setIn(['advance', 'width'], width);
    const $$change_height = $$change_width.setIn(['advance', 'height'], height);
    // 更新width 与 height 的值
    const $$change_left = $$change_height.setIn(['advance', 'left'], left);
    const $$change_top = $$change_left.setIn(['advance', 'top'], top);
    // new data
    this.sendAction($$change_top);
  };

  /**
   * 电脑端挪移操作
   * @param rotateAngle
   */
  handleRotate = rotateAngle => {
    const $$rotate = this.props.data.setIn(['advance', 'rotate'], rotateAngle);
    this.sendAction($$rotate);
  };

  /**
   * 电脑端挪移操作
   * @param deltaX
   * @param deltaY
   */
  handleDrag = (deltaX, deltaY) => {
    const $$change_translateX = this.props.data.setIn(
      ['advance', 'left'],
      this.props.layout.left + deltaX
    );
    const $$change_translateY = $$change_translateX.setIn(
      ['advance', 'top'],
      this.props.layout.top + deltaY
    );
    this.sendAction($$change_translateY);
  };

  /**
   * 发送数据给renducer
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

  render() {
    const { layout } = this.props;
    // 选中时的组件状态
    const choose = (
      <div>
        <div className={style.mobile_dynamic}>
          <Rnd
            size={{ width: layout.width, height: layout.height }}
            position={{ x: layout.left, y: layout.top }}
            onDragStop={this.rndDrag}
            onResize={this.rndResize}
          >
            <span>{this.props.component}</span>
          </Rnd>
        </div>
        <div className={style.pc_dynamic}>
          <ResizableRect
            left={layout.left}
            top={layout.top}
            width={layout.width}
            height={layout.height}
            zIndex={layout.zIndex}
            rotateAngle={layout.rotate}
            zoomable="n, w, s, e, nw, ne, se, sw"
            onRotate={this.handleRotate}
            onResize={this.handleResize}
            onDrag={this.handleDrag}
            child={
              <UIChoose {...layout}>
                <ComponentLocation>
                  <span>{this.props.component}</span>
                </ComponentLocation>
              </UIChoose>
            }
          />
        </div>
      </div>
    );
    // 未选中时的组件状态
    const noChoose = (
      <NoChoose
        {...layout}
        onClick={this.choose.bind(this, this.props.index, this.props.data)}
      >
        {this.props.component}
      </NoChoose>
    );
    return (
      <React.Fragment>{this.props.choose ? choose : noChoose}</React.Fragment>
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
)(DynamicCommon);
