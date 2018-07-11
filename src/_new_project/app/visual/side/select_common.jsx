import React, { PureComponent } from 'react';
import { Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import connect from '../../../redux/decorator';
import style from './select_common.module.scss';

@connect
export default class SelectCommon extends PureComponent {
  transfer = data => {
    // 将选择的组件塞进老数组中，从而得到新数组
    const select_up_data = this.props.h5_data_value.data.push(data);
    // 更新核心数组
    this.props.upData('H5_DATA', select_up_data);
    // 更新选择组件
    this.props.upData(
      'EDITOR_UI',
      { number: select_up_data.size - 1, data: data },
      {
        content: true,
        choose: true,
      }
    );
  };

  render() {
    return (
      <QueueAnim delay={200} className={style.queueAnim} type={'bottom'}>
        {this.props.data.map((data, index) => {
          return (
            <div key={index}>
              {data.data === 'dividing-line' ? (
                <Divider orientation="left" key={index}>
                  设计师推荐
                </Divider>
              ) : (
                <React.Fragment>
                  {data.data === 'music_list_ui' ||
                  data.data === 'video_list_ui' ? (
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
