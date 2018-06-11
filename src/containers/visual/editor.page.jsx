import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import TweenOne from 'rc-tween-one';
import BgEditor from './editor/bg_editor';
import style from './editor.module.scss';
import { choose_action } from '../../redux/action';
import { render_form } from '../../common/render/form';

/**
 * 实现功能：
 * 1. 控制背景组件的补充按钮何时出现
 * 2. 控制界面显示何种内容
 */
class EditorVisualView extends React.Component {
  // 点击背景按钮时，通过充值choose 数值来时editor界面返回到背景编辑界面
  onclick_choose_bg = () => {
    this.props.choose_upData(
      this.props.choose_value.data,
      Map({
        content: this.props.choose_value.meta.get('content'),
        choose: false,
      }),
      false
    );
  };

  render() {
    const $$choose_data = this.props.choose_value.data;
    const $$choose_meta = this.props.choose_value.meta;
    return (
      <div className={style.layout}>
        {$$choose_meta.get('choose') ? (
          //显示组件编辑栏
          <React.Fragment>
            <TweenOne
              animation={{ left: '-85px' }}
              className={style.pos_tab}
              onClick={this.onclick_choose_bg.bind(this)}
            >
              全局背景
            </TweenOne>
            {/** TODO 后期进一步提取信息 将信息传递给渲染组件*/}
            {render_form($$choose_data)}
          </React.Fragment>
        ) : (
          // 显示背景
          <BgEditor />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    choose_value: state.choose_reducer,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditorVisualView);
