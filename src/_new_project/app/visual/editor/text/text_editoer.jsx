import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import connect from "../../../../redux/decorator";
import AdvanceEditor from '../advance.form';
import RichTextEditor from "./rich_editor";

@connect
export default class EditorText extends PureComponent {
  /**
   * 将要修改的数据通过此函数传递出去
   * @param html_callback
   * @param index_number
   */
  richTextEditor = (html_callback, index_number) => {
    const $$new_h5_data = this.props.data
      .get('data')
      .setIn(['customize', 'html_content'], html_callback);
    const $$new_index_number = $$new_h5_data.setIn(
      ['customize', 'index_number'],
      index_number
    );
    this.sendAction($$new_index_number);
  };

  /**
   * 更新h5_data 与choose_data 中的信息
   * @param up_data
   */
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
    /**
     *  组件间传递
     * @param data: 当前组件序号，当前组件数据 （->props）
     *  redux 传递
     * @param {h5_data_value,choose_value,upData,choose_upData}
     */
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

