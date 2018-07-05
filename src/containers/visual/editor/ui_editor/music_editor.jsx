import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios/index';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';
import { Tabs, Radio, Card } from 'antd';
import { choose_redux_action, redux_action } from '../../../../redux/action';
import MusicForm from '../../../../common/up_music_common/music_form';
import { $$api } from '../../../../api/api.database';

class EditorMusic extends React.Component {
  state = {
    user_music: [],
    user_number: '',
    length: 0,
  };

  componentWillMount() {
    if ($$api.get('surroundings') === 'development') {
      axios({
        method: 'get',
        url: `${$$api.getIn(['development', 'user_music_start'])}`,
      }).then(response => {
        this.setState({
          user_music: response.data.data,
          user_number: response.data.number,
        });
      });
    }
    if ($$api.get('surroundings') === 'produce') {
      // 用来搜寻公共库 //总页数，第一轮数据，图片项目表
      axios({
        method: 'get',
        url: `${$$api.getIn(['produce', 'user_music_start'])}`,
      })
        .then(response => {
          this.setState({
            user_music: response.data.data,
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
      const cs = $$new_data.unshift({
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
  sendAction = up_data => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.choose_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);
    // send action
    this.props.upData('H5_DATA', $$new_select_data);
    this.props.choose_upData('CHOOSE_UI', $$new_choose_data, {
      content: true,
      choose: true,
    });
  };
  onChange = e => {
    this.sendAction(
      this.props.data.get('data').setIn(['customize', 'music'], e.target.value)
    );
  };

  render() {
    const $$customize = this.props.data.getIn(['data', 'customize']);
    const tab_config = {
      defaultActiveKey: '1',
      style: { height: '100%' },
    };
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
            url: `${$$api.getIn(['development', 'user_music_other'])}${
              props.index
            }`,
          }).then(response => {
            let user_music = this.state.user_music;
            let length = this.state.length;
            response.data.map(data => {
              return user_music.push(data);
            });
            this.setState({
              user_music: user_music,
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
            let user_music = this.state.user_music;
            let length = this.state.length;
            response.data.map(data => {
              return user_music.push(data);
            });
            this.setState({
              recommend_music: user_music,
              length: length + 1,
            });
          });
      }
      return (
        <React.Fragment>
          {this.state.length - 1 === props.index ? (
            this.state.user_music.map((data, index) => {
              console.log(data);
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
      <Tabs {...tab_config}>
        <Tabs.TabPane tab="内容设置" key="1">
          <Card title="当前使用" style={{ marginTop: '-18px' }}>
            <audio
              src={$$customize.get('music')}
              controls
              style={{ width: '100%' }}
            />
            <span>
              <MusicForm
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
                    &nbsp;添加素材
                  </div>
                }
              />
            </span>
          </Card>
          <Card title="上传记录" style={{ height: '400px', overflow: 'auto' }}>
            <Radio.Group
              onChange={this.onChange}
              value={$$customize.get('music')}
            >
              <Radio
                style={radioStyle}
                value={
                  'https://e7wei-img.oss-cn-beijing.aliyuncs.com/music.mp3'
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
    h5_data_value: state.h5_data_reducer,
    choose_value: state.choose_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data) => dispatch(redux_action(name, data)),
    choose_upData: (name, data, meta) =>
      dispatch(choose_redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorMusic);
