/**
 * text 编辑栏
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Tabs, Button, Card, Popconfirm } from 'antd';
import { choose_action, select_action } from '../../../../redux/action';
import {
  $$horizontal_text,
  $$vertical_text,
} from '../../../../ui/text/text_database';
import { VisualRichEditorLoadable } from '../../../../routers/visual.router';
import AdvanceEditor from '../advance.form';

/**
 * editor for text
 * features 1. rich editor
 *          2. up_img <model>
 *          3. color picker <package>
 *          4. padding  <css element>
 *          5. position <css element>
 */
class EditorText extends PureComponent {
  /**
   * rich text editor html content callback
   * html_callback :  html content
   * @param html_callback
   */
  richTextEditor = html_callback => {
    // data source
    const $$choose_data = this.props.choose_value.data;
    const $$select_data = this.props.select_value.data;
    // create new data
    const $$new_select_data = $$select_data.setIn(
      [$$choose_data.get('number'), 'customize', 'html_content'],
      html_callback
    );
    // send action  -> to change select_render's data
    this.props.select_upData($$new_select_data, '', false);
  };

  /**
   * editor Functional implementation
   * opt_name : operating name
   * data : change data
   * 1. reset data
   * 2. color data
   */
  editorFeatures = opt_name => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // Current component name
    const name = $$select_data.getIn([
      $$choose_data.get('number'),
      'customize',
      'name',
    ]);
    if (opt_name === 'reset') {
      if (name === 'horizontal_text') {
        this.sendAction($$horizontal_text);
      }
      if (name === 'vertical_text') {
        this.sendAction($$vertical_text);
      }
    }
  };

  /**
   * send action
   * Receive: Single component style
   * @param up_data
   */
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

  render() {
    // resolve props data
    const $$ui_text_data = this.props.data.get('data');
    const $$customize = $$ui_text_data.get('customize');
    /**
     * reset data
     */
    const operations = (
      <Popconfirm
        placement="bottom"
        title={'重置为默认设置？'}
        onConfirm={this.editorFeatures.bind(this, 'reset')}
        okText="确认"
        cancelText="取消"
      >
        <Button>恢复默认</Button>
      </Popconfirm>
    );
    return (
      <Tabs defaultActiveKey={'1'} tabBarExtraContent={operations}>
        <Tabs.TabPane tab="内容设置" key="1">
          <Card
            title="富文本编辑器"
            style={{ width: '100%', marginTop: '-18px' }}
          >
            <VisualRichEditorLoadable
              data={$$customize}
              callBack={this.richTextEditor.bind(this)}
            />
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="高级设置" key="2">
          <AdvanceEditor data={$$ui_text_data} />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

/**
 * 获取数据
 * @param state
 * @returns {{select_value: *, choose_value: *}}
 */
const mapStateToProps = state => {
  return {
    select_value: state.h5_data_reducer,
    choose_value: state.choose_reducer,
  };
};

/**
 * 修改数据源数据
 * @param dispatch
 * @returns {{select_upData: (function(*=, *=, *=): *), choose_upData: (function(*=, *=, *=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
  };
};

/**
 * 高阶组件 hoc
 */
export default connect(mapStateToProps, mapDispatchToProps)(EditorText);
