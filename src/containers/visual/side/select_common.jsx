/**
 * 通过接收组件样式及数据，将样式显示出来
 * 展现的样式将呈现在侧边选择栏中
 */
import React, { PureComponent } from "react";
import { Divider } from "antd";
import connect from "../../../redux/decorator";
import QueueAnim from "rc-queue-anim";
import style from "./select_common.module.scss";

/**
 * 文本组件选择栏
 */
@connect
export default class SelectCommon extends PureComponent {
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
    this.props.choose_upData(
      "CHOOSE_UI",
      { number: select_up_data.size - 1, data: data },
      {
        content: true,
        choose: true
      }
    );
  };

  render() {
    return (
      <QueueAnim delay={200} className={style.queueAnim} type={"bottom"}>
        {this.props.data.map((data, index) => {
          return (
            <div key={index}>
              {data.data === "dividing-line" ? (
                <Divider orientation="left" key={index}>
                  设计师推荐
                </Divider>
              ) : (
                <React.Fragment>
                  {data.data === "music_list_ui" ||
                  data.data === "video_list_ui" ? (
                    data.template
                  ) : (
                    <div
                      className={style.components_hover}
                      key={index}
                      onClick={this.transfer.bind(this, data.data)}
                    >
                      {data.template}
                    </div>
                  )}
                </React.Fragment>
              )}
            </div>
          );
        })}
      </QueueAnim>
    );
  }
}


