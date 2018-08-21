import React, { PureComponent } from 'react';
import { Tabs, Divider, Modal } from 'antd';
import { List } from 'immutable';
import { connect } from 'react-redux';
import InterActiveSelect from './interactive';
import { redux_action } from '../../../../database/redux/action';
import style from './side.module.scss';
import {
  template_img_data,
  template_text_data,
} from '../../../../resources/template_database';
import { $$music_database } from '../../../../database/music.db';
import EditorMusic from '../../../../app/Middleware/editor/music/music_editor';
import BgEditor from '../../../Middleware/editor/bg/bg_editor';

class SiderVisualView extends PureComponent {
  state = {
    music_number: 0,
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

  changeTab = key => {
    if (key === '音乐') {
      if (this.props.h5_data_value.data.size > 0) {
        let exist = true;
        this.props.h5_data_value.data.map(map_data => {
          if (map_data.getIn(['customize', 'type']) === 'music') {
            exist = false;
          }
        });
        if (exist) {
          let push_data = $$music_database('music', '');
          const select_up_data = this.props.h5_data_value.data.push(push_data);
          this.props.upData('H5_DATA', select_up_data);
          this.setState({
            music_number: select_up_data.size - 1,
          });
        }
      } else {
        let push_data = $$music_database('music', '');
        const select_up_data = this.props.h5_data_value.data.push(push_data);
        this.props.upData('H5_DATA', select_up_data);
        this.setState({
          music_number: select_up_data.size - 1,
        });
      }
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
        icon: 'iconfont icon-tupian',
        title: '图片',
        name: 'img',
        content: template_img_data,
      },
      // {
      //   icon: "icon iconfont icon-anniu",
      //   title: "按钮",
      //   name: "button",
      //   content: template_button_data
      // },
      {
        icon: 'icon iconfont icon-beijing',
        title: '背景',
        name: 'bg',
      },
      {
        icon: 'iconfont icon-yinlemusic214',
        title: '音乐',
        name: 'music',
      },
      // {
      //   icon: "icon iconfont icon-biaodan",
      //   title: "表单",
      //   name: "form",
      //   content: template_form_data
      // },
      {
        icon: 'icon iconfont icon-yingyong',
        title: '更多',
        name: 'lnteractive',
      },
    ]);

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
    };

    const choose_ui = data => {
      switch (data.name) {
        case 'music':
          return (
            <div className={style.queueAnim}>
              <div style={{ overflow: 'auto' }}>
                <EditorMusic />
              </div>
            </div>
          );
        case 'bg':
          return (
            <div className={style.queueAnim}>
              <BgEditor />
            </div>
          );
        default:
          return (
            <div>
              {data.name === 'lnteractive' ? (
                <div className={style.queueAnim}>
                  <InterActiveSelect />
                </div>
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
            </div>
          );
      }
    };

    return (
      <Tabs {...Tab} onChange={this.changeTab}>
        {$$visual_sider_database.map(data => {
          return (
            <Tabs.TabPane {...tabPan(data.icon, data.title)}>
              {choose_ui(data)}
            </Tabs.TabPane>
          );
        })}
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
)(SiderVisualView);
