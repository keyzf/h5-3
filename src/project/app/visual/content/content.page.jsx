import React, { PureComponent } from 'react';
import connect from '../../../redux/decorator';
import RenderUI from './render_ui';
import style from './content.module.scss';
import BgComponent from '../../../../ui/background/bg_component';

@connect
export default class ContentVisualView extends PureComponent {
  render() {
    const {
      data: $$choose_data,
      meta: choose_meta,
    } = this.props.editor_ui_value;
    const $$bg_data = this.props.bg_ui_value.data;
    const $$select_data = this.props.h5_data_value.data;
    /**
     *  解析出背景组件需要的数据
     */
    const bg_config = {
      color: $$bg_data.getIn(['customize', 'color']),
      img: $$bg_data.getIn(['customize', 'crop_img']),
      repeat: $$bg_data.getIn(['customize', 'img_config', 'repeat']),
      fixed: $$bg_data.getIn(['customize', 'img_config', 'fixed']),
      height: $$bg_data.getIn(['advanced', 'height', 'value']),
    };
    /**
     *  渲染出组件
     */
    return (
      <div className={style.template}>
        <BgComponent {...bg_config}>
          {/*判读用户当前操作，如果没有选择组件则显示默认，否则遍历出组件*/}
          {choose_meta.get('content') ? (
            $$select_data.map((ui_data, index) => {
              return (
                // 跳转至 ==> /src/common/component_state 进行操作
                <RenderUI
                  key={index}
                  data={ui_data}
                  choose={index === $$choose_data.get('number')}
                  index={index}
                />
              );
            })
          ) : (
            <div className={style.default}>请从左侧选择组件~</div>
          )}
        </BgComponent>
      </div>
    );
  }
}
