import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import AdvanceEditor from '../advance.form';
import RichTextEditor from './rich_editor';
import connect from '../../../../redux/decorator';

@connect
export default class EditorText extends PureComponent {
  richTextEditor = (html_callback, index_number) => {
    const $$new_h5_data = this.props.data
      .get('data')
      .setIn(['customize', 'html_content'], html_callback);
    // const $$new_index_number = $$new_h5_data.setIn(
    //   ['customize', 'index_number'],
    //   index_number
    // );
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
            <AdvanceEditor data={$$data} />
          </div>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}
