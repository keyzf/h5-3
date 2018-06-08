import React from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import { choose_action, select_action } from '../../../redux/action';
import { Map, fromJS } from 'immutable';
import { ButtonTemplate } from '../../../ui/visual/template/button';
import { $$button_database } from '../../../ui/components/button_database';

class ButtonSelect extends React.Component {
  transfer = data => {
    // 将选择的组件塞进老数组中，从而得到新数组
    const select_up_data = this.props.select_value.data.push(data);
    // 更新核心数组
    this.props.select_upData(select_up_data, 'meta', false);
    // 更新选择组件
    this.props.choose_upData(
      Map({ number: select_up_data.size - 1, data: data }),
      Map({
        content: true,
        choose: true,
      }),
      false
    );
  };

  render() {
    const option_data = name => {
      return fromJS($$button_database(name));
    };
    return (
      <div>
        <div
          className={'components_hover'}
          onClick={this.transfer.bind(this, option_data('button'))}
        >
          <ButtonTemplate />
        </div>
        <Divider orientation="left">设计师推荐</Divider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
  };
};

// hoc
export default connect(mapStateToProps, mapDispatchToProps)(ButtonSelect);
