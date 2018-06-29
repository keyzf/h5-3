import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RenderUILoadable } from '../../routers/common.router';
import BgComponent from '../../ui/background/bg_component';
import style from './content.module.scss';

/**
 * 实现功能
 * 1. 读取choose 中的meta字段，判断显示内容
 * 2. 实时监听背景组件数据源，及时更新数据
 * 3. 遍历出核心组件的数据，提交给 render函数
 */
class ContentVisualView extends PureComponent {
  render() {
    const $$bg_data = this.props.bg_value.data;
    const $$choose_data = this.props.choose_value.data;
    const $$select_data = this.props.h5_data_value.data;
    const choose_meta = this.props.choose_value.meta;
    /**
     *  解析出背景组件需要的数据
     */
    const bg_config = {
      color: $$bg_data.getIn(['customize', 'color']),
      img: $$bg_data.getIn(['customize', 'crop_img']),
      repeat: $$bg_data.getIn(['customize', 'img_config', 'repeat']),
      fixed: $$bg_data.getIn(['customize', 'img_config', 'fixed']),
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
                <RenderUILoadable
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

const mapStateToProps = state => {
  return {
    // 组件数据
    h5_data_value: state.h5_data_reducer,
    // 选择组件数组
    choose_value: state.choose_reducer,
    // 背景组件数据
    bg_value: state.bg_reducer,
  };
};

export default connect(mapStateToProps)(ContentVisualView);
