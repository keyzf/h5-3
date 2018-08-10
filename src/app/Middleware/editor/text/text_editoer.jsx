import React, { PureComponent } from 'react';
import { Form, Popover, Tabs, Collapse } from 'antd';
import RichTextEditor from './rich_editor';
import { connect } from 'react-redux';
import { redux_action } from '../../../../database/redux/action';
import { SketchPicker } from 'react-color';

class EditorText extends PureComponent {
  richTextEditor = html_callback => {
    const $$new_h5_data = this.props.data
      .get('data')
      .setIn(['customize', 'html_content'], html_callback);
    this.sendAction($$new_h5_data);
  };
  editorFeatures = (opt_name, data) => {
    if (opt_name === 'style_color') {
      this.sendAction(
        this.props.data.get('data').setIn(['advance', 'style_color'], data.hex)
      );
    }
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
    const $$advance = $$data.get('advance');
    const Panel = Collapse.Panel;
    const form_item_style = label_name => {
      return {
        label: label_name,
        labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
        wrapperCol: {
          xl: { span: 17, offset: 1 },
          lg: { span: 18, offset: 1 },
        },
      };
    };
    return (
      <Collapse
        bordered={false}
        defaultActiveKey={['1', '2']}
        style={{
          height: '100%',
          overflow: 'auto',
        }}
      >
        <Panel header="边框配色" key="1">
          <Form>
            <Form.Item {...form_item_style('当前颜色')}>
              <Popover
                content={
                  <SketchPicker
                    color={$$advance.get('style_color')}
                    onChangeComplete={this.editorFeatures.bind(
                      this,
                      'style_color'
                    )}
                  />
                }
                trigger="click"
              >
                {$$advance.get('style_color') !== '' ? (
                  <div
                    style={{
                      marginTop: '6px',
                      height: '25px',
                      width: '100%',
                      background: $$advance.get('style_color'),
                    }}
                  />
                ) : (
                  <div
                    className={'bg_transparent'}
                    style={{
                      marginTop: '6px',
                      height: '25px',
                      width: '100%',
                    }}
                  />
                )}
              </Popover>
            </Form.Item>
          </Form>
        </Panel>
        <Panel header="编辑内容" key="2">
          <RichTextEditor
            data={$$data.get('customize')}
            func={this.richTextEditor}
          />
        </Panel>
      </Collapse>
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
