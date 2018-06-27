/**
 * 为组件添加动态效果
 */
import React, { PureComponent } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import ComponentLocation from './component-location';
import { NoChoose, UIChoose } from './ui_choose_style';
import './drag_resizeable.css';

/**
 * 为组件添加，拖动，鼠标控制大小的功能
 */
class DynamicCommon extends PureComponent {
  /**
   * 下面几项为内部数据，无需设置
   * @type {{activeDrags: number}}
   */
  state = {
    activeDrags: 0,
  };
  //移动开始
  onStart = () => {
    let add = this.state.activeDrags;
    this.setState({ activeDrags: ++add });
  };
  //移动结束
  onStop = () => {
    let less = this.state.activeDrags;
    this.setState({ activeDrags: --less });
  };
  //触发更改操作
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
   * 设计到数据项（操作项）
   * @param e
   * @param ui
   */
  // 提取出移动数据
  handleDrag(e, ui) {
    const $$translateX = this.props.data.getIn([
      'advance',
      'transform',
      'translateX',
      'value',
    ]);
    const $$translateY = this.props.data.getIn([
      'advance',
      'transform',
      'translateY',
      'value',
    ]);
    // 更新translateX 与 translateY 的值
    const $$change_translateX = this.props.data.setIn(
      ['advance', 'transform', 'translateX', 'value'],
      $$translateX + ui.deltaX
    );
    const $$change_translateY = $$change_translateX.setIn(
      ['advance', 'transform', 'translateY', 'value'],
      $$translateY + ui.deltaY
    );
    // new data
    this.sendAction($$change_translateY);
  }
  // 调整长宽时的 长度与宽度
  onResize = (event, { element, size }) => {
    event.stopPropagation();
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // 获取当前长度与宽度
    const $$perimeter = $$select_data.get($$choose_data.get('number'));
    // 更新width 与 height 的值
    const $$change_width = $$perimeter.setIn(
      ['advance', 'perimeter', 'width', 'value'],
      size.width
    );
    const $$change_height = $$change_width.setIn(
      ['advance', 'perimeter', 'height', 'value'],
      size.height
    );
    // new data
    this.sendAction($$change_height);
  };
  // 控制当前选择的组件
  choose = (number, data) => {
    this.props.choose_upData(
      Map({ number: number, data: data }),
      Map({
        content: true,
        choose: true,
      }),
      false
    );
  };

  /**
   * 渲染组件
   * @returns {*}
   */
  render() {
    const advance = this.props.data.get('advance');
    const $$width = advance.getIn(['perimeter', 'width', 'value']);
    const $$height = advance.getIn(['perimeter', 'height', 'value']);
    const $$translateX = advance.getIn(['transform', 'translateX', 'value']);
    const $$translateY = advance.getIn(['transform', 'translateY', 'value']);
    // 拆解出的位置数据
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    // 选中时的组件状态
    const choose = (
      <Draggable
        defaultPosition={{ x: $$translateX, y: $$translateY }}
        onDrag={this.handleDrag.bind(this)}
        cancel=".react-resizable-handle"
        bounds={`parent`}
        {...dragHandlers}
      >
        <div
          className={'box'}
          onClick={this.choose.bind(this, this.props.index, this.props.data)}
          style={{
            width: `${$$width}px`,
            height: `${$$height}px`,
          }}
        >
          <ResizableBox
            width={$$width}
            height={$$height}
            onResize={this.onResize}
            maxConstraints={[320, Infinity]}
          >
            <ComponentLocation>
              <span>
                <UIChoose {...this.props.layout}>
                  {this.props.component}
                </UIChoose>
              </span>
            </ComponentLocation>
          </ResizableBox>
        </div>
      </Draggable>
    );
    // 未选中时的组件状态
    const noChoose = (
      <NoChoose
        {...this.props.layout}
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

/**
 * 触发器
 * @param data
 * @param meta
 * @param error
 * @returns {{type: string, payload: *, meta: *, error: *}}
 */
const choose_action = (data, meta, error) => {
  return {
    type: 'CHOOSE_COMPONENTS',
    payload: data,
    meta: meta,
    error: error,
  };
};
const action = (type, data) => {
  return {
    type: type,
    payload: data,
    meta: '',
    error: '',
  };
};

/**
 * 从数据源获取数据
 * @param state
 * @returns {{select_value: *, choose_value: *}}
 */
const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer,
  };
};

/**
 * 修改数据源数据
 * @param dispatch
 * @returns {{choose_upData: (function(*=, *=, *=): *), select_upData: (function(*=, *=, *=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    select_upData: data => dispatch(action('SELECT_COMPONENTS', data)),
  };
};

/**
 * 高阶组件Hoc
 */
export default connect(mapStateToProps, mapDispatchToProps)(DynamicCommon);
