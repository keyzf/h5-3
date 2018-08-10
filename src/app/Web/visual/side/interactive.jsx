import React, { PureComponent } from 'react';
import { Row, Col, Divider, Modal, Tabs, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { $$video_database } from '../../../../database/video.db';
import { redux_action } from '../../../../database/redux/action';
import style from './side.module.scss';
import {
  template_button_data,
  template_form_data,
} from '../../../../resources/template_database';

class InterActiveSelect extends PureComponent {
  state = {
    choose_show: '',
    back: false,
  };

  formModel = (index, data) => {
    const select_up_data = this.props.h5_data_value.data.set(index, data);
    this.props.upData('H5_DATA', select_up_data);
    this.props.upData(
      'EDITOR_UI',
      { number: select_up_data.size - 1, data: data },
      {
        content: true,
        choose: true,
      }
    );
  };

  transfer = (name, data) => {
    let form = false;
    if (name === 'form') {
      if (this.props.h5_data_value.data.size > 0) {
        this.props.h5_data_value.data.map((map_data, index) => {
          if (map_data.getIn(['customize', 'type']) === 'form') {
            Modal.confirm({
              title: '提醒',
              content: '表单组件已存在，是否替换原表单?',
              okText: '确认',
              cancelText: '取消',
              onOk: this.formModel.bind(true, index, data),
            });
            form = true;
          }
        });
        if (form) {
          return '';
        } else {
          let push_data = data;
          const select_up_data = this.props.h5_data_value.data.push(push_data);
          this.props.upData('H5_DATA', select_up_data);
          this.props.upData(
            'EDITOR_UI',
            { number: select_up_data.size - 1, data: push_data },
            {
              content: true,
              choose: true,
            }
          );
        }
      } else {
        let push_data = data;
        const select_up_data = this.props.h5_data_value.data.push(push_data);
        this.props.upData('H5_DATA', select_up_data);
        this.props.upData(
          'EDITOR_UI',
          { number: select_up_data.size - 1, data: push_data },
          {
            content: true,
            choose: true,
          }
        );
      }
    } else {
      let push_data = data;
      const select_up_data = this.props.h5_data_value.data.push(push_data);
      this.props.upData('H5_DATA', select_up_data);
      this.props.upData(
        'EDITOR_UI',
        { number: select_up_data.size - 1, data: push_data },
        {
          content: true,
          choose: true,
        }
      );
    }
  };

  pushH5Data = name => {
    if (name === 'video') {
      const push_data = $$video_database('video', '');
      const select_up_data = this.props.h5_data_value.data.push(push_data);
      this.props.upData('H5_DATA', select_up_data);
      this.props.upData(
        'EDITOR_UI',
        { number: select_up_data.size - 1, data: push_data },
        {
          content: true,
          choose: true,
        }
      );
    }
    if (name === 'button') {
      this.setState({
        choose_show: 'button',
        back: true,
      });
    }
    if (name === 'form') {
      this.setState({
        choose_show: 'form',
        back: true,
      });
    }
  };

  back = () => {
    this.setState({
      back: false,
    });
  };

  render() {
    const default_text = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column nowrap',
      margin: 'auto',
      cursor: 'pointer',
    };
    const TabPane = Tabs.TabPane;
    return (
      <React.Fragment>
        {this.state.back ? (
          <Tabs
            tabBarExtraContent={
              <Button
                type={'dashed'}
                onClick={this.back}
                style={{ width: '100%', marginLeft: '-5px' }}
              >
                <Icon type="left" /> 返回
              </Button>
            }
          >
            <Tabs.TabPane
              tab={
                this.state.choose_show === 'button' ? '按钮组件' : '表单组件'
              }
              key="1"
            >
              {this.state.choose_show === 'button' ? (
                <div className={style.queueAnim}>
                  {template_button_data.map((ui_data, index) => {
                    return (
                      <div key={index}>
                        {ui_data.data === 'dividing-line' ? (
                          <Divider orientation="left" key={index}>
                            设计师推荐
                          </Divider>
                        ) : (
                          <div
                            className={style.components_hover}
                            key={index}
                            onClick={this.transfer.bind(
                              this,
                              'button',
                              ui_data.data
                            )}
                          >
                            <div style={{ pointerEvents: 'none' }}>
                              {ui_data.template}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <Tabs defaultActiveKey="1">
                  <TabPane tab="报名" key="1">
                    <div className={style.queueAnim}>
                      {template_form_data.map((ui_data, index) => {
                        return (
                          <React.Fragment key={index}>
                            {ui_data.data.getIn(['customize', 'types']) ===
                            '报名' ? (
                              <div
                                className={style.components_hover}
                                key={index}
                                onClick={this.transfer.bind(
                                  this,
                                  'form',
                                  ui_data.data
                                )}
                              >
                                <div style={{ pointerEvents: 'none' }}>
                                  {ui_data.template}
                                </div>
                              </div>
                            ) : (
                              ''
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </TabPane>
                  <TabPane tab="招聘" key="3">
                    <div className={style.queueAnim}>
                      {template_form_data.map((ui_data, index) => {
                        return (
                          <React.Fragment key={index}>
                            {ui_data.data.getIn(['customize', 'types']) ===
                            '招聘' ? (
                              <div
                                className={style.components_hover}
                                key={index}
                                onClick={this.transfer.bind(
                                  this,
                                  'form',
                                  ui_data.data
                                )}
                              >
                                <div style={{ pointerEvents: 'none' }}>
                                  {ui_data.template}
                                </div>
                              </div>
                            ) : (
                              ''
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </TabPane>
                  <TabPane tab="问卷" key="2">
                    <div className={style.queueAnim}>
                      {template_form_data.map((ui_data, index) => {
                        return (
                          <React.Fragment key={index}>
                            {ui_data.data.getIn(['customize', 'types']) ===
                            '问卷' ? (
                              <div
                                className={style.components_hover}
                                key={index}
                                onClick={this.transfer.bind(
                                  this,
                                  'form',
                                  ui_data.data
                                )}
                              >
                                <div style={{ pointerEvents: 'none' }}>
                                  {ui_data.template}
                                </div>
                              </div>
                            ) : (
                              ''
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </TabPane>
                </Tabs>
              )}
            </Tabs.TabPane>
          </Tabs>
        ) : (
          <Row type={'flex'} gutter={16} key={1}>
            <Col
              span={6}
              style={default_text}
              className={'components_hover'}
              onClick={this.pushH5Data.bind(this, 'video')}
            >
              <i
                className="iconfont icon-shipin"
                style={{ fontSize: '26px', flex: '1' }}
              />
              <div style={{ flex: '1' }}>视频</div>
            </Col>
            <Col
              span={6}
              style={default_text}
              className={'components_hover'}
              onClick={this.pushH5Data.bind(this, 'button')}
            >
              <i
                className=" iconfont icon-anniu"
                style={{ fontSize: '26px', flex: '1' }}
              />
              <div style={{ flex: '1' }}>按钮</div>
            </Col>
            <Col
              span={6}
              style={default_text}
              className={'components_hover'}
              onClick={this.pushH5Data.bind(this, 'form')}
            >
              <i
                className=" iconfont icon-biaodan"
                style={{ fontSize: '26px', flex: '1' }}
              />
              <div style={{ flex: '1' }}>表单</div>
            </Col>
            <Col span={6} />
          </Row>
        )}
      </React.Fragment>
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
)(InterActiveSelect);
