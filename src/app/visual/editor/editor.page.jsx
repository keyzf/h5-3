import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'antd';
import { redux_action } from '../../../app_feature/redux/action';
import { render_formFactory } from '../../../app_feature/factory/render_form.factory';
import BgEditor from '../../../app_feature/editor/bg/bg_editor';
import style from './editor.module.scss';

class EditorVisualView extends PureComponent {
  choose = name => {
    if (name === 'bg') {
      this.props.upData('EDITOR_UI', this.props.editor_ui_value.data, {
        content: this.props.editor_ui_value.meta.get('content'),
        choose: false,
      });
    }
    if (name === 'music') {
      this.props.h5_data_value.data.map((map_data, index) => {
        if (map_data.getIn(['customize', 'type']) === 'music') {
          this.props.upData(
            'EDITOR_UI',
            { number: index, data: map_data },
            {
              content: true,
              choose: true,
            }
          );
        }
      });
    }
  };

  render() {
    const { data, meta } = this.props.editor_ui_value;
    let music = false;
    this.props.h5_data_value.data.map(map_data => {
      if (map_data.getIn(['customize', 'type']) === 'music') {
        music = true;
      }
    });
    return (
      <div className={style.layout}>
        <div className={style.pos_tab}>
          <div>
            {music ? (
              <React.Fragment>
                <span
                  onClick={this.choose.bind(this, 'music')}
                  className={style.choose}
                >
                  音乐组件
                </span>
                <Divider type="vertical" />
              </React.Fragment>
            ) : (
              ''
            )}

            <span
              onClick={this.choose.bind(this, 'bg')}
              className={style.choose}
            >
              全局背景
            </span>
          </div>
        </div>
        {meta.get('choose') ? (
          //显示组件编辑栏
          <React.Fragment>{render_formFactory(data)}</React.Fragment>
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
    // 核心组件
    h5_data_value: state.h5_data_reducer,
    editor_ui_value: state.editor_ui_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorVisualView);
