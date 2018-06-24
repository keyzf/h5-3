import React from "react";
import { Row, Col } from "antd";
import { Map } from "immutable";
import { connect } from "react-redux";
import QueueAnim from "rc-queue-anim";
import { choose_action, select_action } from "../../../redux/action";
import { $$music_database } from "../music_database";
import axios from "axios";

/**
 * 文本组件选择栏
 */
class MusicListUI extends React.Component {
  state = {
    ajax_url: []
  };

  // 在渲染之前,通过ajax 获取数据
  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:3001/recommend_music',
    })
      .then(response => {
        this.setState({
          ajax_url: response.data,
        });
      })
      .catch(function(error) {
        // 输出错误信息，生产环境中需要剔除
        console.log(error);
      });
  }



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
    this.props.select_upData(select_up_data, "meta", false);
    // 更新选择组件
    this.props.choose_upData(
      Map({ number: select_up_data.size - 1, data: data }),
      Map({
        content: true,
        choose: true
      }),
      false
    );
  };

  render() {
    return (
      <QueueAnim delay={200} type={"bottom"}>
        {this.state.ajax_url.map((data, index) => {
          return (
            <Row
              key={index}
              className={"components_hover"}
              onClick={this.transfer.bind(
                this,
                $$music_database("music", data.url)
              )}
            >
              <Col span={8}>{data.dsc}</Col>
              <Col span={8}>其他信息</Col>
              <Col span={8}>选择</Col>
            </Row>
          );
        })}
      </QueueAnim>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicListUI);
