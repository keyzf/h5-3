import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Tabs, Input, Collapse } from 'antd';
import { redux_action } from '../../redux/action';

class EditorVideo extends PureComponent {
  state = {
    video_library: [],
    number: '',
    length: 0,
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
    this.props.upData('EDITOR_UI', $$new_choose_data, {
      content: true,
      choose: true,
    });
  };

  render() {
    const { TextArea } = Input;
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
              defaultActiveKey={['2']}
              style={{ background: 'transparent' }}
            >
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
      </Tabs>
    );
  }
}
const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5_data_reducer,
    // 当前选择编辑的组件
    editor_ui_value: state.editor_ui_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorVideo);
