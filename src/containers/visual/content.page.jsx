import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { choose_action, select_action } from "../../redux/action";
import { render_component } from "../../common/render/components";
import BgComponent from "../../ui/visual/background/bg_component";
import style from './content.module.scss'
/**
 * 实现功能
 * 1. 读取choose 中的meta字段，判断显示内容
 * 2. 实时监听背景组件数据源，及时更新数据
 * 3. 遍历出核心组件的数据，提交给 render函数
 */
class ContentVisualView extends PureComponent {
  render() {
    // 读取数据源
    const $$bg_data = this.props.bg_value.data;
    const $$choose_data = this.props.choose_value.data;
    const $$select_data = this.props.select_value.data;
    // 取出choose数据源的分支
    const choose_meta = this.props.choose_value.meta;

    // 解析出背景需要的数据
    const bg_config = {
      color: $$bg_data.get("customize").get("color"),
      img: $$bg_data.get("customize").get("img"),
      repeat: $$bg_data.get("customize").get("img_config").get("repeat"),
      fixed: $$bg_data.get("customize").get("img_config").get("fixed")
    };
    return (
      //visual content 内容栏
      <div id={"content_root"} className={style.template}>
        <BgComponent {...bg_config}>
          {/*判读用户当前操作，如果没有选择组件则显示默认，否则遍历出组件*/}
          {choose_meta.get("content") ?
            $$select_data.map((ui_data, index) => {
              return (
                //将遍历的数据传递给render函数
                <React.Fragment key={index}>
                  {/**
                   ui_data:组件样式数据，
                   判断用户是否选中当前组件，
                   index: 组件号
                   */}
                  {render_component(
                    ui_data,
                    index === $$choose_data.get("number"),
                    index
                  )}
                </React.Fragment>
              );
            })
            :
            <div className={style.default}>请从左侧选择组件~</div>
          }
        </BgComponent>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    // 组件数据
    select_value: state.select_reducer,
    // 选择组件数组
    choose_value: state.choose_reducer,
    // 背景组件数据
    bg_value: state.bg_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // 选择组件数据更新触发器
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    // 核心组件数据更新触发器
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentVisualView);
