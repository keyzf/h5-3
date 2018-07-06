import React, { PureComponent } from 'react';
import axios from 'axios';
import range from 'lodash.range';
import { Row, Col, Icon } from 'antd';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import LazyLoad from 'react-lazyload';
import { choose_redux_action, redux_action } from '../../../redux/action';
import { $$video_database } from '../video_database';
import { $$api } from '../../../api/api.database';
import style from './video_list.module.scss';

/**
 * 文本组件选择栏
 */
class VideoListUI extends PureComponent {
  state = {
    recommend_video: [],
    recommend_number: '',
    length: 0,
  };

  componentWillMount() {
    if ($$api.get('surroundings') === 'development') {
      axios({
        method: 'get',
        url: `${$$api.getIn(['development', 'recommend_video_start'])}`,
      }).then(response => {
        this.setState({
          recommend_number: response.data.number,
        });
      });
    }
    if ($$api.get('surroundings') === 'produce') {
      axios({
        method: 'get',
        url: `${$$api.getIn(['produce', 'recommend_video_start'])}`,
      })
        .then(response => {
          this.setState({
            recommend_number: response.data.number,
          });
        })
        .catch(function(error) {
          console.log('访问服务器错误', error);
        });
    }
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
    this.props.upData('H5_DATA', select_up_data);
    // 更新选择组件
    this.props.choose_upData(
      'CHOOSE_UI',
      { number: select_up_data.size - 1, data: data },
      {
        content: true,
        choose: true,
      }
    );
  };

  render() {
    const ShowMusic = props => {
      if (this.state.length === props.index) {
        if ($$api.get('surroundings') === 'development') {
          axios({
            method: 'get',
            url: `${$$api.getIn(['development', 'recommend_video_other'])}${
              props.index
            }`,
          }).then(response => {
            let length = this.state.length;
            this.setState({
              recommend_video: response.data,
              length: length + 1,
            });
          });
        }
        if ($$api.get('surroundings') === 'produce') {
          let params = new URLSearchParams();
          params.append('number', props.index);
          axios
            .post(
              `${$$api.getIn(['development', 'recommend_video_other'])}`,
              params
            )
            .then(response => {
              let length = this.state.length;
              this.setState({
                recommend_video: response.data,
                length: length + 1,
              });
            });
        }
      }
      return (
        <Row gutter={16}>
          {this.state.recommend_video.map((data, index) => {
            return (
              <Row
                key={index}
                className={style.components_hover}
                onClick={this.transfer.bind(
                  this,
                  $$video_database('video', data.url)
                )}
              >
                <Col span={8} className={style.hide_text}>
                  {data.dsc}
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
      <QueueAnim delay={200} type={'bottom'}>
        {range(this.state.recommend_number).map((n_data, n_index) => {
          return (
            <LazyLoad
              once={true}
              throttle={100}
              key={n_index}
              height={400}
              overflow
            >
              <ShowMusic index={n_index} />
            </LazyLoad>
          );
        })}
      </QueueAnim>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.h5_data_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data) => dispatch(redux_action(name, data)),
    choose_upData: (name, data, meta) =>
      dispatch(choose_redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListUI);
