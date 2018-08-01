import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import AdvanceEditor from '../advance.form';
import RichTextEditor from './rich_editor';
import { connect } from 'react-redux';
import { redux_action } from '../../../../database/redux/action';

class EditorText extends PureComponent {
  richTextEditor = html_callback => {
    const $$new_h5_data = this.props.data
      .get('data')
      .setIn(['customize', 'html_content'], html_callback);
    this.sendAction($$new_h5_data);
  };

  sendAction = up_data => {
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;

    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);

    this.props.upData('H5_DATA', $$new_select_data);
    this.props.upData('EDITOR_UI', $$new_choose_data, {
      content: true,
      choose: true,
    });
  };

  render() {
    const $$data = this.props.data.get('data');
    return (
      <Tabs defaultActiveKey={'1'}>
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
            <RichTextEditor
              data={$$data.get('customize')}
              func={this.richTextEditor}
            />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="高级设置" key="2">
          <div
            style={{
              height: 'calc(100vh -  55px)',
              overflow: 'hidden',
              marginTop: '-18px',
              backgroundImage:
                'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
          >
            <AdvanceEditor data={$$data} name={'text'} />
          </div>
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
)(EditorText);
