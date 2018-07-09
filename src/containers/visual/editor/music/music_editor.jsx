import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';
import { Tabs, Radio, Icon, Collapse, Button } from 'antd';
import { choose_redux_action, redux_action } from '../../../../redux/action';
import MusicForm from '../../../../common/music_form';
import { user_music } from '../../../../ajax/user_music';

class EditorMusic extends PureComponent {
  state = {
    music_library: [],
    number: '',
    length: 0,
  };

  componentWillMount() {
    user_music(0).then(
      data => {
        let sum = '';
        if (data.sum % 40 !== 0) {
          sum = data.sum / 40 + 1;
        } else {
          sum = data.sum / 40;
        }
        this.setState({
          number: sum,
          music_library: data.list,
        });
      },
      function(error) {}
    );
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
        user_music(props.index).then(
          data => {
            this.setState({
              length: this.state.length + 1,
              music_library: data.list,
            });
          },
          function(error) {}
        );
      }
      return (
        <React.Fragment>
          {this.state.music_library.map((data, index) => {
            return (
              <Radio key={index} style={radioStyle} value={data.url}>
                {data.desc}
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
                    {range(this.state.number).map((n_data, n_index) => {
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
