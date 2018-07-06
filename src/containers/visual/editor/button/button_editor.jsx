import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Card, Form, Popover, Collapse } from 'antd';
import { choose_redux_action, redux_action } from '../../../../redux/action';
import { fromJS } from 'immutable';
import AdvanceEditor from '../advance.form';
import { SketchPicker } from 'react-color';
import ButtonForm from './button_form';

class EditorButton extends React.Component {
  editorFeatures = (opt_name, data) => {
    const $$props_data = this.props.data.get('data');

    if (opt_name === 'customize') {
      const $$customize = {
        ...$$props_data.get('customize').toJS(),
        ...data,
      };
      this.sendAction($$props_data.set('customize', fromJS($$customize)));
    }
    if (opt_name === 'color') {
      this.sendAction(
        $$props_data.setIn(['customize', 'font_color'], data.hex)
      );
    }
  };
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
    const $$ui_text_data = this.props.data.get('data');
    const $$customize = $$ui_text_data.get('customize');
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
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              style={{ background: 'transparent' }}
            >
              <Collapse.Panel header="基础属性" key="1">
                <Form hideRequiredMark>
                  <Form.Item {...form_item_style('字体颜色')}>
                    <Popover
                      content={
                        <SketchPicker
                          color={$$customize.getIn(['base', 'font_color'])}
                          onChangeComplete={this.editorFeatures.bind(
                            this,
                            'color'
                          )}
                        />
                      }
                      trigger="click"
                    >
                      <div
                        style={{
                          marginTop: '6px',
                          height: '25px',
                          width: '100%',
                          backgroundColor: $$customize.get('font_color'),
                        }}
                      />
                    </Popover>
                  </Form.Item>
                </Form>
                <ButtonForm
                  {...$$customize.toJS()}
                  onChange={this.editorFeatures.bind(this, 'customize')}
                />
              </Collapse.Panel>
            </Collapse>
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
            <AdvanceEditor data={$$ui_text_data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditorButton);
