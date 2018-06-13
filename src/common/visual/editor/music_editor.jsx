import React from 'react';
import { Tabs, Radio, Card } from 'antd';
import { connect } from 'react-redux';
import { choose_action, select_action } from '../../../redux/action';
import ImgForm from '../../../ui/visual/form/img_form';
import { Map } from 'immutable';

class EditorMusic extends React.Component {
  ImgPartChange = changedFields => {
    if (
      changedFields.upload &&
      changedFields.upload.value.file.response !== undefined
    ) {
      const $$new_data = this.props.data
        .get('data')
        .get('customize')
        .get('history');
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
  onChange = e => {
    this.sendAction(
      this.props.data.get('data').setIn(['customize', 'music'], e.target.value)
    );
  };

  render() {
    const $$customize = this.props.data.get('data').get('customize');
    const tab_config = {
      defaultActiveKey: '1',
      style: { height: '100%' },
    };
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
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
              <ImgForm
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
          <Card title="上传记录">
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
              {$$customize.get('history').map((data, index) => {
                return (
                  <Radio key={index} style={radioStyle} value={data.url}>
                    {data.name}
                  </Radio>
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
    select_value: state.select_reducer,
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

// hoc
export default connect(mapStateToProps, mapDispatchToProps)(EditorMusic);
