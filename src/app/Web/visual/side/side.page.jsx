import React, { PureComponent } from 'react';
import { Tabs, Divider, Modal } from 'antd';
import { List } from 'immutable';
import { connect } from 'react-redux';
import InterActiveSelect from './interactive';
import { redux_action } from '../../../../database/redux/action';
import style from './side.module.scss';
import {
  template_button_data,
  template_form_data,
  template_img_data,
  template_mall_data,
  template_text_data,
} from '../../../../resources/template_database';

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
)(
  class SiderVisualView extends PureComponent {
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
          } else {
            let push_data;
            if (name === 'text') {
              push_data = data(Math.random());
            } else {
              push_data = data;
            }
            const select_up_data = this.props.h5_data_value.data.push(
              push_data
            );
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
        });
      } else {
        let push_data;
        if (name === 'text') {
          push_data = data(Math.random());
        } else {
          push_data = data;
        }
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

    render() {
      const $$visual_sider_database = List([
        {
          icon: 'iconfont icon-wenzixiaoguo',
          title: '文字',
          name: 'text',
          content: template_text_data,
        },
        {
          icon: 'icon iconfont icon-anniu',
          title: '按钮',
          name: 'button',
          content: template_button_data,
        },
        {
          icon: 'iconfont icon-tupian',
          title: '图片',
          name: 'img',
          content: template_img_data,
        },
        {
          icon: 'iconfont icon-unie62d',
          title: '商品',
          name: 'mall',
          content: template_mall_data,
        },
        {
          icon: 'icon iconfont icon-biaodan',
          title: '表单',
          name: 'form',
          content: template_form_data,
        },
        {
          icon: 'icon iconfont icon-zhinengyuyinjiaohu',
          title: '更多',
          name: 'lnteractive',
        },
      ]);

      /**
       * 组件样式
       * @param icon
       * @param title
       * @returns {*}
       * @constructor
       */
      const Item = (icon, title) => {
        return (
          <span>
            <i className={icon} style={{ fontSize: 24, marginRight: 3 }} />
            <br />
            {title}
          </span>
        );
      };
      const tabPan = (icon, title) => {
        return {
          tab: Item(icon, title),
          key: title,
          style: {
            marginLeft: ' -24px',
          },
        };
      };
      const Tab = {
        defaultActiveKey: '文字',
        tabPosition: 'left',
        style: {
          height: '100%',
          overflow: 'auto',
          padding: '0',
          margin: '0',
        },
      };
      return (
        <Tabs {...Tab}>
          {$$visual_sider_database.map(data => {
            return (
              <Tabs.TabPane {...tabPan(data.icon, data.title)}>
                {data.name === 'lnteractive' ? (
                  <InterActiveSelect />
                ) : (
                  <div className={style.queueAnim}>
                    {data.content.map((ui_data, index) => {
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
                                data.name,
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
                )}
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      );
    }
  }
);
