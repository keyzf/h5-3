/**
 * 设置组件中附加的选项
 */
import React, { PureComponent } from 'react';
import { Map } from 'immutable';
import { Tooltip, Divider, message } from 'antd';
import { connect } from 'react-redux';
import { choose_action, select_action } from '../../../redux/action';

/**
 * 为组件添加 tip
 */
class ComponentLocation extends PureComponent {
  /**
   * 位置移动
   * @param type
   */
  position = type => {
    const select_value = this.props.select_value.data;
    const choose_value = this.props.choose_value.data;
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
      this.props.select_upData($$select_data, '', false);
      // 设置选择项
      const $$choose_value = choose_value.set(
        'number',
        choose_value.get('number') - 1
      );
      this.props.choose_upData(
        $$choose_value,
        Map({ content: true, choose: true }),
        false
      );
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
      this.props.select_upData($$select_data, '', false);
      // 设置选择项
      const $$choose_value = choose_value.set(
        'number',
        choose_value.get('number') + 1
      );
      this.props.choose_upData(
        $$choose_value,
        Map({ content: true, choose: true }),
        false
      );
    }
    if (type === 'delete') {
      const $$select_data = select_value.delete(choose_value.get('number'));
      this.props.select_upData($$select_data, '', false);
      // 设置选择项
      const $$choose_value = choose_value.set(
        'number',
        choose_value.get('number')
      );
      this.props.choose_upData(
        $$choose_value,
        Map({ content: true, choose: true }),
        false
      );
    }
    if (type === 'copy') {
      const copy_data = select_value.get(choose_value.get('number'));
      let $$select_data = select_value.insert(
        choose_value.get('number'),
        copy_data
      );
      this.props.select_upData($$select_data, '', false);
      // 设置选择项
      const $$choose_value = choose_value.set(
        'number',
        choose_value.get('number') + 1
      );
      this.props.choose_upData(
        $$choose_value,
        Map({ content: true, choose: true }),
        false
      );
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

/**
 * 从数据源读取数据
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
 *  修改需要更改数据的数据源
 * @param dispatch
 * @returns {{select_upData: (function(*=, *=, *=): *), choose_upData: (function(*=, *=, *=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, mete, error) =>
      dispatch(select_action(data, mete, error)),
    choose_upData: (data, mete, error) =>
      dispatch(choose_action(data, mete, error)),
  };
};

/**
 * 高阶组件
 * hoc
 */
export default connect(mapStateToProps, mapDispatchToProps)(ComponentLocation);
