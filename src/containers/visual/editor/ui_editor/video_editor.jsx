import React, { PureComponent } from 'react';
import { Tabs, Card, Radio, Input } from 'antd';
import { connect } from 'react-redux';
import { choose_action, select_action } from '../../../../redux/action';
import { Map } from 'immutable';
import VideoForm from '../../../../common/up_video_common/video_form';
import axios from 'axios/index';
import { $$api } from '../../../../api/api.database';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';

class EditorVideo extends PureComponent {
  state = {
    user_video: [],
    user_number: '',
    length: 0,
  };

  componentWillMount() {
    if ($$api.get('surroundings') === 'development') {
      axios({
        method: 'get',
        url: `${$$api.getIn(['development', 'user_video_start'])}`,
      }).then(response => {
        this.setState({
          user_video: response.data.data,
          user_number: response.data.number,
        });
      });
    }
    if ($$api.get('surroundings') === 'produce') {
      // 用来搜寻公共库 //总页数，第一轮数据，图片项目表
      axios({
        method: 'get',
        url: `${$$api.getIn(['produce', 'user_video_start'])}`,
      })
        .then(response => {
          this.setState({
            user_video: response.data.data,
            user_number: response.data.number,
          });
        })
        .catch(function(error) {
          console.log('访问服务器错误', error);
        });
    }
  }

  ImgPartChange = changedFields => {
    if (
      changedFields.upload &&
      changedFields.upload.value.file.response !== undefined
    ) {
      const $$new_data = this.props.data.getIn([
        'data',
        'customize',
        'history',
      ]);
      const cs = $$new_data.push({
        name: changedFields.upload.value.file.name,
        url: `http://p8afqcqwq.bkt.clouddn.com/${
          changedFields.upload.value.file.response.key
        }`,
      });
      this.sendAction(
        this.props.data.get('data').setIn(['customize', 'history'], cs)
      );
    }
  };
  onChange = e => {
    this.sendAction(
      this.props.data.get('data').setIn(['customize', 'video'], e.target.value)
    );
  };
  shareChange = e => {
    this.sendAction(
      this.props.data.get('data').setIn(['customize', 'share'], e.target.value)
    );
  };
  sendAction = up_data => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);
    // send action
    this.props.select_upData($$new_select_data, '', false);
    this.props.choose_upData(
      $$new_choose_data,
      Map({ content: true, choose: true }),
      false
    );
  };

  render() {
    const $$customize = this.props.data.getIn(['data', 'customize']);
    const { TextArea } = Input;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const ShowMusic = props => {
      if ($$api.get('surroundings') === 'development') {
        if (this.state.length === props.index) {
          axios({
            method: 'get',
            url: `${$$api.getIn(['development', 'user_video_other'])}${
              props.index
            }`,
          }).then(response => {
            let user_video = this.state.user_video;
            let length = this.state.length;
            response.data.map(data => {
              return user_video.push(data);
            });
            this.setState({
              user_video: user_video,
              length: length + 1,
            });
          });
        }
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        params.append('number', props.index);
        axios
          .post(`${$$api.getIn(['development', 'user_music_other'])}`, params)
          .then(response => {
            let user_video = this.state.user_video;
            let length = this.state.length;
            response.data.map(data => {
              return user_video.push(data);
            });
            this.setState({
              recommend_music: user_video,
              length: length + 1,
            });
          });
      }
      return (
        <React.Fragment>
          {this.state.length - 1 === props.index ? (
            this.state.user_video.map((data, index) => {
              return (
                <Radio key={index} style={radioStyle} value={data.url}>
                  {data.dsc}
                </Radio>
              );
            })
          ) : (
            <div style={{ display: 'none' }}>代价在</div>
          )}
        </React.Fragment>
      );
    };
    return (
      <Tabs defaultActiveKey="1" style={{ height: '100%' }}>
        <Tabs.TabPane tab="内容设置" key="1">
          <Card title="自定义素材" style={{ marginTop: '-18px' }}>
            <span>
              <VideoForm
                upload={{ value: '' }}
                onChange={this.ImgPartChange}
                child={
                  <div
                    style={{
                      color: '#19a0fa',
                      cursor: 'pointer',
                      marginTop: '-20px',
                    }}
                  >
                    &nbsp;上传素材
                  </div>
                }
              />
            </span>
            <div
              style={{
                color: '#19a0fa',
                cursor: 'pointer',
                marginTop: '-20px',
                fontSize: '13.5px',
              }}
            >
              &nbsp;第三方分享&nbsp;&nbsp;<span
                style={{ fontSize: '13.5px', color: 'grey' }}
              >
                请将分享代码复制至下方
              </span>
            </div>
            <TextArea rows={4} onChange={this.shareChange} />
          </Card>
          <Card title="上传记录" style={{ height: '400px', overflow: 'auto' }}>
            <Radio.Group
              onChange={this.onChange}
              value={$$customize.get('video')}
            >
              <Radio
                style={radioStyle}
                value={
                  'https://e7wei-img.oss-cn-beijing.aliyuncs.com/movie.mp4'
                }
              >
                默认
              </Radio>
              {range(this.state.user_number).map((n_data, n_index) => {
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
            </Radio.Group>
          </Card>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.h5_data_reducer,
    choose_value: state.choose_reducer,
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
export default connect(mapStateToProps, mapDispatchToProps)(EditorVideo);
