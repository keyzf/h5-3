import React, { PureComponent } from 'react';
import { Tooltip, Divider, message } from 'antd';
import { connect } from 'react-redux';
import { redux_action } from '../redux/action';

class ComponentLocation extends PureComponent {
  position = type => {
    const select_value = this.props.h5_data_value.data;
    const choose_value = this.props.editor_ui_value.data;
    if (type === 'up') {
      if (!choose_value.get('number')) {
        return message.warning('已至最顶层');
      }
      // 当前信息
      const now_data = select_value.get(choose_value.get('number'));
      const up_now_data = select_value.get(choose_value.get('number') - 1);
      let $$select_data = select_value
        .update(choose_value.get('number'), () => up_now_data)
        .update(choose_value.get('number') - 1, () => now_data);
      this.props.upData('H5_DATA', $$select_data);
      // 设置选择项
      const $$choose_value = choose_value.set(
        'number',
        choose_value.get('number') - 1
      );
      this.props.upData('EDITOR_UI', $$choose_value, {
        content: true,
        choose: true,
      });
    }
    if (type === 'down') {
      if (choose_value.get('number') + 1 === select_value.size) {
        return message.warning('已至最底层');
      }
      // 当前信息
      const now_data = select_value.get(choose_value.get('number'));
      const up_now_data = select_value.get(choose_value.get('number') + 1);
      let $$select_data = select_value
        .update(choose_value.get('number'), () => up_now_data)
        .update(choose_value.get('number') + 1, () => now_data);
      this.props.upData('H5_DATA', $$select_data);
      // 设置选择项
      const $$choose_value = choose_value.set(
        'number',
        choose_value.get('number') + 1
      );
      this.props.upData('EDITOR_UI', $$choose_value, {
        content: true,
        choose: true,
      });
    }
    if (type === 'delete') {
      const $$select_data = select_value.delete(choose_value.get('number'));
      this.props.upData('H5_DATA', $$select_data);
      // 设置选择项
      const $$choose_value = choose_value.set(
        'number',
        choose_value.get('number')
      );
      this.props.upData('EDITOR_UI', $$choose_value, {
        content: true,
        choose: true,
      });
    }
    if (type === 'copy') {
      const copy_data = select_value.get(choose_value.get('number'));
      let $$select_data = select_value.insert(
        choose_value.get('number'),
        copy_data
      );
      this.props.upData('H5_DATA', $$select_data);
      // 设置选择项
      const $$choose_value = choose_value.set(
        'number',
        choose_value.get('number') + 1
      );
      this.props.upData('EDITOR_UI', $$choose_value, {
        content: true,
        choose: true,
      });
    }
  };

  render() {
    const text = (
      <span style={{ cursor: 'pointer' }}>
        <span onClick={this.position.bind(this, 'up')}>上移</span>
        <Divider type="vertical" />
        <span onClick={this.position.bind(this, 'down')}>下移</span>
        <Divider type="vertical" />
        <span onClick={this.position.bind(this, 'copy')}>复制</span>
        <Divider type="vertical" />
        <span onClick={this.position.bind(this, 'delete')}>删除</span>
      </span>
    );
    return (
      <Tooltip title={text} trigger={'click'}>
        {this.props.children}
      </Tooltip>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5_data_reducer,
    // 当前选择编辑的组件
    editor_ui_value: state.editor_ui_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentLocation);
