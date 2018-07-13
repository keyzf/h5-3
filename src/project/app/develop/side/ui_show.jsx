import React, { PureComponent } from 'react';
import { Divider, Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import connect from '../../../redux/decorator';
import InterActiveSelect from './interactive';
import style from './select_common.module.scss';
import {
  template_button_data,
  template_form_data,
  template_img_data,
  template_mall_data,
  template_text_data,
} from '../../../../ui/template_database';

@connect
export default class UiShow extends PureComponent {
  transfer = data => {
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
  };

  render() {
    const $$name = this.props.choose_ui_value.data.get('name');
    const { Sider } = Layout;
    let data = [];
    if ($$name === 'text') {
      data = template_text_data;
    }
    if ($$name === 'img') {
      data = template_img_data;
    }
    if ($$name === 'button') {
      data = template_button_data;
    }
    if ($$name === 'form') {
      data = template_form_data;
    }
    if ($$name === 'mall') {
      data = template_mall_data;
    }
    return (
      <React.Fragment>
        {data.length || $$name === 'lnteractive' ? (
          <Sider width={330} style={{ background: 'transparent' }}>
            {$$name === 'lnteractive' ? (
              <InterActiveSelect />
            ) : (
              <QueueAnim className={style.queueAnim} type={'bottom'}>
                {data.map((data, index) => {
                  return (
                    <div key={index}>
                      {data.data === 'dividing-line' ? (
                        <Divider orientation="left" key={index}>
                          设计师推荐
                        </Divider>
                      ) : (
                        <div
                          className={style.components_hover}
                          key={index}
                          onClick={this.transfer.bind(this, data.data)}
                        >
                          {data.template}
                        </div>
                      )}
                    </div>
                  );
                })}
              </QueueAnim>
            )}
          </Sider>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}
