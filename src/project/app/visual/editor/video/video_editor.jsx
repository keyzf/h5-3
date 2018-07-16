import React, { PureComponent } from 'react';
import { Tabs, Icon, Radio, Input, Button, Collapse } from 'antd';
import connect from '../../../../redux/decorator';
import VideoForm from '../../../../common/video_form';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';
import { user_music_api } from '../../../../api/user_music_api';
import { user_video_api } from '../../../../api/user_video_api';

@connect
export default class EditorVideo extends PureComponent {
  state = {
    video_library: [],
    number: '',
    length: 0,
  };

  componentWillMount() {
    user_music_api(0).then(
      data => {
        let sum = '';
        if (data.sum % 40 !== 0) {
          sum = data.sum / 40 + 1;
        } else {
          sum = data.sum / 40;
        }
        this.setState({
          number: sum,
          video_library: data.list,
        });
      },
      function(error) {}
    );
    user_video_api(0).then(
      data => {
        let sum = '';
        if (data.sum % 40 !== 0) {
          sum = data.sum / 40 + 1;
        } else {
          sum = data.sum / 40;
        }
        this.setState({
          video_number: sum,
          public_video_library: data.list,
        });
      },
      function(error) {}
    );
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
    const $$choose_data = this.props.editor_ui_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);
    // send action
    this.props.upData('H5_DATA', $$new_select_data);
    this.props.upData('CHOOSE_UI', $$new_choose_data, {
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
        user_music_api(props.index).then(
          data => {
            this.setState({
              length: this.state.length + 1,
              video_library: data.list,
            });
          },
          function(error) {}
        );
      }
      return (
        <React.Fragment>
          {this.state.video_library.map((data, index) => {
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
              <Collapse.Panel header="第三方素材引入" key="2">
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
        <Tabs.TabPane tab="历史上传" key="2">
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
                  {range(this.state.number).map((n_data, n_index) => {
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
