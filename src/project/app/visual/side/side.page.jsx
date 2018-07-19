import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { Tabs, Layout, Divider } from 'antd';
import connect from '../../../redux/decorator';
import {
  template_button_data,
  template_form_data,
  template_img_data,
  template_mall_data,
  template_text_data,
} from '../../../../ui/template_database';
import InterActiveSelect from './interactive';
import QueueAnim from 'rc-queue-anim';
import style from './side.module.scss';

@connect
export default class SiderVisualView extends PureComponent {
  state = {
    collapsed: true,
  };

  transfer = (name, data) => {
    if (name === 'text') {
      // 将选择的组件塞进老数组中，从而得到新数组
      const select_up_data = this.props.h5_data_value.data.push(
        data(Math.random())
      );
      // 更新核心数组
      this.props.upData('H5_DATA', select_up_data);
      // 更新选择组件
      this.props.upData(
        'EDITOR_UI',
        { number: select_up_data.size - 1, data: data(Math.random()) },
        {
          content: true,
          choose: true,
        }
      );
    } else {
      // 将选择的组件塞进老数组中，从而得到新数组
      const select_up_data = this.props.h5_data_value.data.push(data);
      // 更新核心数组
      this.props.upData('H5_DATA', select_up_data);
      // 更新选择组件
      this.props.upData(
        'EDITOR_UI',
        { number: select_up_data.size - 1, data: data },
        {
          content: true,
          choose: true,
        }
      );
    }
  };

  render() {
    const { Sider } = Layout;
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
    const Item = (icon, title) => {
      return (
        <span>
          <i className={icon} style={{ fontSize: 24, marginRight: 3 }} />
          <br />
          {title}
        </span>
      );
    };
    return (
      <Sider
        style={{ background: 'white' }}
        width={380}
        defaultactivekey={'文字'}
      >
        <Tabs {...Tab}>
          {$$visual_sider_database.map(data => {
            return (
              <Tabs.TabPane {...tabPan(data.icon, data.title)}>
                {data.name === 'lnteractive' ? (
                  <InterActiveSelect />
                ) : (
                  <QueueAnim className={style.queueAnim} type={'bottom'}>
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
                              {ui_data.template}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </QueueAnim>
                )}
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </Sider>
    );
  }
}
