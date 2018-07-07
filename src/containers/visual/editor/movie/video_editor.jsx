import React, { PureComponent } from 'react';
import { Tabs, Icon, Radio, Input, Button, Collapse } from 'antd';
import { connect } from 'react-redux';
import { choose_redux_action, redux_action } from '../../../../redux/action';
import VideoForm from '../../../../common/video_form';
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

  render() {
    const $$customize = this.props.data.getIn(['data', 'customize']);
    const { TextArea } = Input;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const ShowMusic = props => {
      if (this.state.length === props.index) {
        if ($$api.get('surroundings') === 'development') {
          axios({
            method: 'get',
            url: `${$$api.getIn(['development', 'user_video_other'])}${
              props.index
            }`,
          }).then(response => {
            let length = this.state.length;
            this.setState({
              user_video: response.data,
              length: length + 1,
            });
          });
        }
        if ($$api.get('surroundings') === 'produce') {
          let params = new URLSearchParams();
          params.append('number', props.index);
          axios
            .post(`${$$api.getIn(['development', 'user_music_other'])}`, params)
            .then(response => {
              let length = this.state.length;
              this.setState({
                user_video: response.data,
                length: length + 1,
              });
            });
        }
      }
      return (
        <React.Fragment>
          {this.state.user_video.map((data, index) => {
            return (
              <Radio key={index} style={radioStyle} value={data.url}>
                {data.dsc}
              </Radio>
            );
          })}
        </React.Fragment>
      );
    };
    return (
      <Tabs defaultActiveKey="1" style={{ height: '100%' }}>
        <Tabs.TabPane tab="内容设置" key="1">
          <div
            style={{
              height: 'calc(100vh -  55px)',
              overflow: 'hidden',
              marginTop: '-18px',
              backgroundImage:
                'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              style={{ background: 'transparent' }}
            >
              <Collapse.Panel header="上传素材" key="1">
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
                      <Button style={{ width: '100%' }} type={'dashed'}>
                        <Icon type="plus" />上传素材
                      </Button>
                    </div>
                  }
                />
                <Radio.Group
                  onChange={this.onChange}
                  value={$$customize.get('video')}
                >
                  {$$customize.get('history').map((data, index) => {
                    return (
                      <Radio key={index} style={radioStyle} value={data.url}>
                        {data.name}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Collapse.Panel>
              <Collapse.Panel header="第三方素材引入" key="1">
                <div
                  style={{
                    color: '#19a0fa',
                    cursor: 'pointer',
                    marginTop: '-20px',
                    fontSize: '13.5px',
                  }}
                >
                  第三方分享<span style={{ fontSize: '13.5px', color: 'grey' }}>
                    请将分享代码复制至下方
                  </span>
                </div>
                <TextArea rows={4} onChange={this.shareChange} />
              </Collapse.Panel>
            </Collapse>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="上传记录" key="2">
          <div
            style={{
              height: 'calc(100vh -  55px)',
              overflow: 'hidden',
              marginTop: '-18px',
              backgroundImage:
                'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              style={{ background: 'transparent' }}
            >
              <Collapse.Panel header="上传素材" key="1">
                <Radio.Group
                  onChange={this.onChange}
                  value={$$customize.get('video')}
                >
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
              </Collapse.Panel>
            </Collapse>
          </div>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    h5_data_value: state.h5_data_reducer,
    choose_value: state.choose_reducer,
    id_value: state.user_id_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data) => dispatch(redux_action(name, data)),
    choose_upData: (name, data, meta) =>
      dispatch(choose_redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorVideo);
