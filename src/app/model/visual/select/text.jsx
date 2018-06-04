import React from 'react';
import { Map } from 'immutable';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import {
  HorizontalTextTemplate,
  VerticalTextTemplate,
} from '../../../../components/visual/template/text';
import { choose_action, select_action } from '../../../../redux/action';
import {
  $$text_database,
  h_html_text,
  v_html_text,
} from '../../../../database/components/text';

class TextSelect extends React.Component {
  /**
   * 触发两个action
   * 目的---> 1.更新核心数组 select
   *         2. 更新选择数组 choose
   * @param data
   */
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
    const option_data = (name, html) => {
      return Map($$text_database(name, html));
    };
    return (
      <QueueAnim delay={200}>
        <div
          className={'components_hover'}
          key={1}
          onClick={this.transfer.bind(
            this,
            option_data('horizontal_text', h_html_text)
          )}
        >
          <HorizontalTextTemplate />
        </div>
        <div
          className={'components_hover'}
          key={2}
          onClick={this.transfer.bind(
            this,
            option_data('vertical_text', v_html_text)
          )}
        >
          <VerticalTextTemplate />
        </div>
        <Divider orientation="left">设计师推荐</Divider>
      </QueueAnim>
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

export default connect(mapStateToProps, mapDispatchToProps)(TextSelect);