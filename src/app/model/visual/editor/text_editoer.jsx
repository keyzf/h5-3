import React from 'react';
import { connect } from 'react-redux';
import { Map, fromJS } from 'immutable';
import { SketchPicker } from 'react-color';
import { Tabs, Button, Checkbox, Popover, Icon, Card, Row, Col } from 'antd';
import {
  $$text_database,
  h_html_text,
  v_html_text,
} from '../../../../database/components/text';
import { choose_action, select_action } from '../../../../redux/action';
import PaddingForm from '../../../../components/visual/form/padding_form';
import PositionForm from '../../../../components/visual/form/position_form';
import RichTextEditor from '../../../../components/visual/form/editor_form';
import UpImgPart from '../../part/up_img';

/**
 * editor for text
 * features 1. rich editor
 *          2. up_img <model>
 *          3. color picker <package>
 *          4. padding  <css element>
 *          5. position <css element>
 */
class EditorText extends React.Component {
  /**
   * control mode
   * @type {{visible: boolean}}
   */
  state = {
    visible: false,
  };

  /**
   * model show
   */
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // close Model
  closeModal = (state, data) => {
    this.setState({
      visible: false,
    });
    if (state && data !== undefined) {
      const $$select_data = this.props.select_value.data;
      const $$choose_data = this.props.choose_value.data;
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'img'], data)
      );
    }
  };

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
  editorFeatures = (opt_name, data) => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // Current component name
    const name = $$select_data
      .get($$choose_data.get('number'))
      .get('customize')
      .get('name');
    // features
    if (opt_name === 'color') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'color'], data.hex)
      );
    }
    if (opt_name === 'delete') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'img'], '')
      );
    }
    if (opt_name === 'tiling') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(
            ['advance', 'img_config', 'tiling', 'value'],
            data.target.checked
          )
      );
    }
    if (opt_name === 'stretching') {
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(
            ['advance', 'img_config', 'stretching', 'value'],
            data.target.checked
          )
      );
    }
    if (opt_name === 'position') {
      // update position
      const $$position = {
        ...$$select_data
          .get($$choose_data.get('number'))
          .get('advance')
          .get('position')
          .toJS(),
        ...data,
      };
      // new data
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'position'], fromJS($$position))
      );
    }
    if (opt_name === 'padding') {
      // update position
      const $$padding = {
        ...$$select_data
          .get($$choose_data.get('number'))
          .get('advance')
          .get('padding')
          .toJS(),
        ...data,
      };
      // new data
      this.sendAction(
        $$select_data
          .get($$choose_data.get('number'))
          .setIn(['advance', 'padding'], fromJS($$padding))
      );
    }
    if (opt_name === 'reset') {
      if (name === 'horizontal_text') {
        this.sendAction(Map($$text_database(name, h_html_text)));
      }
      if (name === 'vertical_text') {
        this.sendAction(Map($$text_database(name, v_html_text)));
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
    const $$advance = $$ui_text_data.get('advance');
    /**
     * reset data
     */
    const operations = (
      <Button onClick={this.editorFeatures.bind(this, 'reset')}>
        恢复默认
      </Button>
    );
    return (
      <Tabs defaultActiveKey={'1'} tabBarExtraContent={operations}>
        <Tabs.TabPane tab="内容设置" key="1">
          <Card
            title="富文本编辑器"
            style={{ width: '100%', marginTop: '-18px' }}
          >
            <RichTextEditor
              data={$$customize}
              callBack={this.richTextEditor.bind(this)}
            />
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="高级设置" key="2">
          <Card title="背景色" style={{ marginTop: '-18px' }}>
            <Popover
              content={
                <SketchPicker
                  color={$$advance.get('color')}
                  onChangeComplete={this.editorFeatures.bind(this, 'color')}
                />
              }
              trigger="click"
            >
              <Card.Grid
                style={{
                  textAlign: 'center',
                  width: '45%',
                  background: $$advance.get('color'),
                }}
              >
                <Icon type="plus" />&nbsp;&nbsp;自定义
              </Card.Grid>
            </Popover>
          </Card>
          <Card title="背景图">
            <Row gutter={16}>
              <Col
                span={7}
                style={{
                  margin: 'auto',
                  height: '100px',
                  border: '1px solid #e7e7e7',
                  textAlign: 'center',
                  color: '#e7e7e7',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={this.showModal}
              >
                <img
                  style={{
                    verticalAlign: 'middle',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    margin: 'auto',
                  }}
                  src={
                    $$advance.get('img')
                      ? $$advance.get('img')
                      : 'http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png'
                  }
                  alt={'img'}
                />
              </Col>
              <Col span={12}>
                <Button.Group>
                  <Button onClick={this.showModal}>更换</Button>
                  <Button onClick={this.editorFeatures.bind(this, 'delete')}>
                    删除
                  </Button>
                </Button.Group>
                <br />
                <br />
                <Row gutter={16}>
                  <Col span={10}>
                    <Checkbox
                      onChange={this.editorFeatures.bind(this, 'tiling')}
                      defaultValue={$$advance
                        .get('img_config')
                        .get('tiling')
                        .get('value')}
                    >
                      平铺
                    </Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox
                      onChange={this.editorFeatures.bind(this, 'stretching')}
                      defaultValue={$$advance
                        .get('img_config')
                        .get('stretching')
                        .get('value')}
                    >
                      拉伸
                    </Checkbox>
                  </Col>
                </Row>
                <UpImgPart
                  visible={this.state.visible}
                  unvisible={this.closeModal.bind(this)}
                  img={$$advance.get('img')}
                />
              </Col>
            </Row>
          </Card>
          <Card title="内边距" style={{ width: '100%' }}>
            <PaddingForm
              {...$$advance.get('padding').toJS()}
              onChange={this.editorFeatures.bind(this, 'padding')}
            />
          </Card>
          <Card title="定位" style={{ width: '100%' }}>
            <PositionForm
              {...$$advance.get('position').toJS()}
              onChange={this.editorFeatures.bind(this, 'position')}
            />
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

// Hoc
export default connect(mapStateToProps, mapDispatchToProps)(EditorText);
