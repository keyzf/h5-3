import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ResizableRect from '../../../utils/resizable/ResizableRect';
import ComponentLocation from './component-location';
import { NoChoose, UIChoose } from './ui_choose_style';
import { redux_action } from '../../../database/redux/action';

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
)(
  class DynamicCommon extends PureComponent {
    componentWillMount() {
      const { data, layout } = this.props;
      if (!layout.top) {
        // 更新width 与 height 的值
        const $$change_left = data.setIn(['advance', 'left'], layout.left);
        const $$change_top = $$change_left.setIn(
          ['advance', 'top'],
          layout.top
        );
        // new data
        this.sendAction($$change_top);
      }
    }

    handleResize = style => {
      let { top, left, width, height } = style;
      top = Math.round(top);
      left = Math.round(left);
      width = Math.round(width);
      height = Math.round(height);
      // 更新width 与 height 的值
      const $$change_width = this.props.data.setIn(['advance', 'width'], width);
      const $$change_height = $$change_width.setIn(
        ['advance', 'height'],
        height
      );
      // 更新width 与 height 的值
      const $$change_left = $$change_height.setIn(['advance', 'left'], left);
      const $$change_top = $$change_left.setIn(['advance', 'top'], top);
      // new data
      this.sendAction($$change_top);
    };

    handleRotate = rotateAngle => {
      const $$rotate = this.props.data.setIn(
        ['advance', 'rotate'],
        rotateAngle
      );
      this.sendAction($$rotate);
    };

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
            <UIChoose {...this.props.layout}>
              <ComponentLocation>
                <span>{this.props.component}</span>
              </ComponentLocation>
            </UIChoose>
          }
        />
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
);
