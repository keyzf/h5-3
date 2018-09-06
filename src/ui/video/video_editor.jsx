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
    const newstr = e.target.value.replace('width=', "width='100%'");
    const newstrs = newstr.replace('height=', "height='100%'");
    this.sendAction(
      this.props.data.get('data').setIn(['customize', 'share'], newstrs)
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
        <Tabs.TabPane tab="视频设置" key="1">
          <Collapse bordered={false} defaultActiveKey={['1']}>
            <Collapse.Panel header="插入视频通用代码" key="1">
              <div>
                将视频通用代码粘贴至框内即可。<a
                  href={'http://www.e7wei.com/help-article-id-442.html'}
                  target="view_window"
                >
                  查看帮助
                </a>
              </div>
              <br />
              <TextArea rows={4} onChange={this.shareChange} />
              <div style={{ marginTop: '5px' }}>
                <div>
                  支持的视频：<a
                    href={'https://v.qq.com/'}
                    target="view_window"
                  >
                    腾讯视频
                  </a>、<a href={'https://www.youku.com/'} target="view_window">
                    优酷
                  </a>
                </div>
              </div>
            </Collapse.Panel>
          </Collapse>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 当前选择编辑的组件
    editor_ui_value: state.editorUi_rdc,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorVideo);
