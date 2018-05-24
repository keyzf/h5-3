import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { choose_action } from '../../redux/action';
import BgEditor from './editor/bg_editor';
import { render_form } from './render/form';

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
    const editor_layout = {
      style: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
      },
    };
    return (
      <div {...editor_layout}>
        <div className={'tab_one'} onClick={this.onclick_choose_bg.bind(this)}>
          <Icon type="setting" style={{ fontSize: 18 }} />
          背景
        </div>
        <div className={'tab_two'}>
          <Icon type="question-circle-o" style={{ fontSize: 18 }} />
          帮助
        </div>
        <div className={'tab_three'}>
          <Icon type="user" style={{ fontSize: 18 }} />
          客服
        </div>
        <div style={{ width: '100%', overflow: 'auto' }}>
          {this.props.choose_value.meta.get('choose') ? (
            render_form($$choose_data)
          ) : (
            <BgEditor />
          )}
        </div>
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
