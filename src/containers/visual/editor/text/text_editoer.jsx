/**
 *  @author 陈迎
 *  @version 0.3x-5
 *
 *  @file 文本编辑栏
 *  @description
 *  基础功能：
 *      1. 富文本编辑器
 *  高级功能：
 *      1. 颜色选择
 *      2. 背景图片上传
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { choose_redux_action, redux_action } from '../../../../redux/action';
import { VisualRichEditorLoadable } from '../../../../routers/visual.router';
import AdvanceEditor from '../advance.form';

/**
 * @class EditorText
 * @description
 * 实现text 编辑栏的功能
 * 接收来自外部的数据（props)
 * 提供相应的操作（修改数据源数据 h5_data_reducer）
 * @param 来自外部的变量（ -> props）
 * 基础内容
 * customize: {
 *    type: 'text',  // 文件类型
 *    index_number: Math.random(), // 编辑器赓续index_Number来更新内容
 *    name: name, // 数据附属名称
 *    html_content: html, // html显示的内容
 *    },
 * 高级内容
 * advance: {},
 * @param 传递出去的变量（props -> ）
 *
 */
class EditorText extends PureComponent {
  /**
   * 将要修改的数据通过此函数传递出去
   * @param html_callback
   */
  richTextEditor = html_callback => {
    const $$new_h5_data = this.props.data
      .get('data')
      .setIn(['customize', 'html_content'], html_callback);
    this.sendAction($$new_h5_data);
  };

  /**
   * 更新h5_data 与choose_data 中的信息
   * @param up_data
   */
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
            <VisualRichEditorLoadable
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

const mapStateToProps = state => {
  return {
    h5_data_value: state.h5_data_reducer,
    choose_value: state.choose_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data) => dispatch(redux_action(name, data)),
    choose_upData: (name, data, meta) =>
      dispatch(choose_redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorText);
