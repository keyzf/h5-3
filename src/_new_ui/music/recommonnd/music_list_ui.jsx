import React, { PureComponent } from "react";
import range from "lodash.range";
import { Row, Col, Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import LazyLoad from "react-lazyload";
import { $$music_database } from "../music_database";
import style from "./music_ui.module.scss";
import connect from "../../../_new_project/redux/decorator";
import { user_music_api } from "../../../_new_project/api/user_music_api";

@connect
export default class MusicListUI extends PureComponent {
  state = {
    music_library: [],
    number: "",
    length: 0
  };

  componentWillMount() {
    user_music_api(0).then(
      data => {
        let sum = "";
        if (data.sum % 40 !== 0) {
          sum = data.sum / 40 + 1;
        } else {
          sum = data.sum / 40;
        }
        this.setState({
          number: sum,
          music_library: data.list
        });
      },
      function(error) {}
    );
  }

  /**
   * 触发两个action
   * 目的---> 1.更新核心数组 select
   *         2. 更新选择数组 choose
   * @param data
   */
  transfer = data => {
    // 将选择的组件塞进老数组中，从而得到新数组
    const select_up_data = this.props.h5_data_value.data.push(data);
    // 更新核心数组
    this.props.upData("H5_DATA", select_up_data);
    // 更新选择组件
    this.props.upData(
      "EDITOR_UI",
      { number: select_up_data.size - 1, data: data },
      {
        content: true,
        choose: true
      }
    );
  };

  render() {
    const ShowMusic = props => {
      if (this.state.length === props.index) {
        user_music_api(props.index).then(
          data => {
            this.setState({
              length: this.state.length + 1,
              music_library: data.list
            });
          },
          function(error) {}
        );
      }
      return (
        <Row gutter={16}>
          {this.state.music_library.map((data, index) => {
            return (
              <Row
                key={index}
                className={style.components_hover}
                onClick={this.transfer.bind(
                  this,
                  $$music_database("music", data.url)
                )}
              >
                <Col span={8} className={style.hide_text}>
                  {data.desc}
                </Col>
                <Col span={8} className={style.hide_text}>
                  其他信息
                </Col>
                <Col span={8} className={style.hide_text}>
                  <Icon type="caret-right" />
                </Col>
              </Row>
            );
          })}
        </Row>
      );
    };
    return (
      <QueueAnim delay={200} type={"bottom"}>
        {range(this.state.number).map((data, index) => {
          return (
            <LazyLoad
              once={true}
              throttle={100}
              key={index}
              height={400}
              overflow
            >
              <ShowMusic index={index} />
            </LazyLoad>
          );
        })}
      </QueueAnim>
    );
  }
}
