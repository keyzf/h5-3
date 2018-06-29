import React, { PureComponent } from 'react';
import axios from 'axios';
import { Map } from 'immutable';
import range from 'lodash.range';
import { Row, Col, Icon } from 'antd';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import { choose_action, select_action } from '../../../redux/action';
import { $$music_database } from '../music_database';
import style from './music_ui.module.scss';
import { $$api } from '../../../api/api.database';
import LazyLoad from 'react-lazyload';

/**
 * 文本组件选择栏
 */
class MusicListUI extends PureComponent {
  state = {
    recommend_music: [],
    recommend_number: '',
    length: 0,
  };

  componentDidMount() {
    if ($$api.get('surroundings') === 'development') {
      // 用来搜寻公共库 //总页数，第一轮数据，图片项目表
      axios({
        method: 'get',
        url: `${$$api.getIn(['development', 'recommend_music_start'])}`,
      }).then(response => {
        this.setState({
          recommend_music: response.data.data,
          recommend_number: response.data.number,
        });
      });
    }
    if ($$api.get('surroundings') === 'produce') {
      // 用来搜寻公共库 //总页数，第一轮数据，图片项目表
      axios({
        method: 'get',
        url: `${$$api.getIn(['produce', 'recommend_music_start'])}`,
      })
        .then(response => {
          this.setState({
            recommend_music: response.data.data,
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
    const ShowMusic = props => {
      if ($$api.get('surroundings') === 'development') {
        if (this.state.length === props.index) {
          axios({
            method: 'get',
            url: `${$$api.getIn(['development', 'recommend_music_other'])}${
              props.index
            }`,
          }).then(response => {
            let recommend_music = this.state.recommend_music;
            let length = this.state.length;
            response.data.map(data => {
              return recommend_music.push(data);
            });
            this.setState({
              recommend_music: recommend_music,
              length: length + 1,
            });
          });
        }
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        params.append('number', props.index);
        axios
          .post(
            `${$$api.getIn(['development', 'recommend_music_other'])}`,
            params
          )
          .then(response => {
            let recommend_music = this.state.recommend_music;
            let length = this.state.length;
            response.data.map(data => {
              return recommend_music.push(data);
            });
            this.setState({
              recommend_music: recommend_music,
              length: length + 1,
            });
          });
      }
      return (
        <React.Fragment>
          {this.state.length - 1 === props.index ? (
            <Row gutter={16}>
              {this.state.recommend_music.map((data, index) => {
                return (
                  <Row
                    key={index}
                    className={style.components_hover}
                    onClick={this.transfer.bind(
                      this,
                      $$music_database('music', data.url)
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
          ) : (
            <div style={{ display: 'none' }}>代价在</div>
          )}
        </React.Fragment>
      );
    };
    return (
      <QueueAnim delay={200} type={'bottom'}>
        {/*遍历出所有页*/}
        {range(this.state.recommend_number).map((n_data, n_index) => {
          return (
            <LazyLoad
              once={true}
              throttle={100}
              key={n_index}
              height={30}
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
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicListUI);
