import React from 'react';
import { Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { VideoTemplate } from '../../../../components/visual/template/video';
import { fromJS, Map } from 'immutable';
import { connect } from 'react-redux';
import { choose_action, select_action } from '../../../../redux/action';
import { $$video_database } from '../../../../database/components/video';

class VideoSelect extends React.Component {
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
    const option_data = name => {
      return fromJS($$video_database(name));
    };
    return (
      <QueueAnim delay={200}>
        <div
          className={'components_hover'}
          key={1}
          onClick={this.transfer.bind(this, option_data('video'))}
        >
          <VideoTemplate />
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoSelect);
