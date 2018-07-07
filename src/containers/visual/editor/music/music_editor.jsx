import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios/index';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';
import { Tabs, Radio, Icon, Collapse, Button } from 'antd';
import { choose_redux_action, redux_action } from '../../../../redux/action';
import MusicForm from '../../../../common/music_form';
import { $$api } from '../../../../api/api.database';

class EditorMusic extends PureComponent {
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
          user_number: response.data.number,
        });
      });
    }
    if ($$api.get('surroundings') === 'produce') {
      axios({
        method: 'get',
        url: `${$$api.getIn(['produce', 'user_music_start'])}`,
      })
        .then(response => {
          this.setState({
            user_number: response.data.number,
          });
        })
        .catch(function(error) {
          console.log('访问服务器错误', error);
        });
    }
  }

  onChange = e => {
    this.sendAction(
      this.props.data.get('data').setIn(['customize', 'music'], e.target.value)
    );
  };
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
      if (this.state.length === props.index) {
        if ($$api.get('surroundings') === 'development') {
          axios({
            method: 'get',
            url: `${$$api.getIn(['development', 'user_music_other'])}${
              props.index
            }`,
          }).then(response => {
            let length = this.state.length;
            this.setState({
              user_music: response.data,
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
                user_music: response.data,
                length: length + 1,
              });
            });
        }
      }
      return (
        <React.Fragment>
          {this.state.user_music.map((data, index) => {
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
      <Tabs {...tab_config}>
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
              <Collapse.Panel header="当前使用" key="1">
                <audio
                  src={$$customize.get('music')}
                  controls
                  style={{ width: '100%' }}
                />
                <MusicForm
                  upload={{ value: '' }}
                  onChange={this.ImgPartChange}
                  child={
                    <Button style={{ width: '100%' }} type={'dashed'}>
                      <Icon type="plus" />添加素材
                    </Button>
                  }
                />
              </Collapse.Panel>
              <Collapse.Panel header="最近上传" key="2">
                {$$customize.get('history').map((data, index) => {
                  return (
                    <Radio.Group
                      onChange={this.onChange}
                      value={$$customize.get('music')}
                    >
                      <Radio key={index} style={radioStyle} value={data.url}>
                        {data.name}
                      </Radio>
                    </Radio.Group>
                  );
                })}
              </Collapse.Panel>
            </Collapse>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="历史记录" key="2">
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
              <Collapse.Panel header="上传记录" key="1">
                <div style={{ height: '500px', overflow: 'auto' }}>
                  <Radio.Group
                    onChange={this.onChange}
                    value={$$customize.get('music')}
                  >
                    {range(this.state.user_number).map((n_data, n_index) => {
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
                  </Radio.Group>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditorMusic);
