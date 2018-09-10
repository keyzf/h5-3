import React, { PureComponent } from 'react';
import { Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { redux_action } from '../../redux/action';
import EditorMobile from '../../app/visual/editor/editorMobile';

/**
 * 画板中，ui在移动端的可选项
 */
class CanvasUiOpt extends PureComponent {
  position = type => {
    const select_value = this.props.h5_data_value.data;
    const choose_value = this.props.editor_ui_value.data;
    if (type === 'up') {
      const $$zIndex = select_value.getIn([
        choose_value.get('number'),
        'advance',
        'zIndex',
      ]);
      const $$new_select_data = select_value.setIn(
        [choose_value.get('number'), 'advance', 'zIndex'],
        $$zIndex + 1
      );
      this.props.upData('H5_DATA', $$new_select_data);
    }
    if (type === 'down') {
      const $$zIndex = select_value.getIn([
        choose_value.get('number'),
        'advance',
        'zIndex',
      ]);
      const $$new_select_data = select_value.setIn(
        [choose_value.get('number'), 'advance', 'zIndex'],
        $$zIndex - 1
      );
      this.props.upData('H5_DATA', $$new_select_data);
    }
    if (type === 'delete') {
      const $$select_data = select_value.delete(choose_value.get('number'));
      this.props.upData('H5_DATA', $$select_data);
    }
    if (type === 'copy') {
      const copy_data = select_value.get(choose_value.get('number'));
      let $$select_data = select_value.insert(
        choose_value.get('number'),
        copy_data
      );
      this.props.upData('H5_DATA', $$select_data);
    }
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <div onClick={this.position.bind(this, 'up')}>上移一层</div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={this.position.bind(this, 'down')}>下移一层</div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={this.position.bind(this, 'copy')}>复制</div>
        </Menu.Item>
        <Menu.Item>
          <div onClick={this.position.bind(this, 'delete')}>删除</div>
        </Menu.Item>
        <Menu.Item>
          <EditorMobile child={<span>属性设置</span>} />
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <div>设置</div>
      </Dropdown>
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
)(CanvasUiOpt);
