import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import connect from '../../../redux/decorator';
import QueueAnim from 'rc-queue-anim';
import { $$video_database } from '../../../../ui/video/video_database';
import { $$music_database } from '../../../../ui/music/music_database';

@connect
export default class InterActiveSelect extends PureComponent {
  state = {
    choose: '',
  };

  onChoose = name => {
    this.setState({
      choose: name,
    });
  };

  back = () => {
    this.setState({
      choose: '',
    });
  };

  video = () => {
    // 将选择的组件塞进老数组中，从而得到新数组
    const select_up_data = this.props.h5_data_value.data.push(
      $$video_database('video', '')
    );
    // 更新核心数组
    this.props.upData('H5_DATA', select_up_data);
    // 更新选择组件
    this.props.upData(
      'EDITOR_UI',
      { number: select_up_data.size - 1, data: $$video_database('video', '') },
      {
        content: true,
        choose: true,
      }
    );
  };
  music = () => {
    // 将选择的组件塞进老数组中，从而得到新数组
    const select_up_data = this.props.h5_data_value.data.push(
      $$music_database('music', '')
    );
    // 更新核心数组
    this.props.upData('H5_DATA', select_up_data);
    // 更新选择组件
    this.props.upData(
      'EDITOR_UI',
      { number: select_up_data.size - 1, data: $$music_database('music', '') },
      {
        content: true,
        choose: true,
      }
    );
  };

  render() {
    const default_text = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column nowrap',
      margin: 'auto',
    };
    return (
      <React.Fragment>
        {this.state.choose ? (
          this.select(this.state.choose)
        ) : (
          <QueueAnim delay={200} type={'left'}>
            <Row type={'flex'} gutter={16} key={1}>
              <Col
                span={6}
                style={default_text}
                className={'components_hover'}
                onClick={this.music}
              >
                <i
                  className="iconfont icon-yinlemusic214"
                  style={{ fontSize: '26px', flex: '1' }}
                />
                <div style={{ flex: '1' }}>音乐</div>
              </Col>
              <Col
                span={6}
                style={default_text}
                className={'components_hover'}
                onClick={this.video}
              >
                <i
                  className="iconfont icon-shipin"
                  style={{ fontSize: '26px', flex: '1' }}
                />
                <div style={{ flex: '1' }}>视频</div>
              </Col>
              <Col span={6} />
              <Col span={6} />
            </Row>
          </QueueAnim>
        )}
      </React.Fragment>
    );
  }
}
