import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { redux_action } from '../../../../database/redux/action';
import { render_formFactory } from '../../../Middleware/factory/render_form.factory';
import style from './editor.module.scss';

class EditorVisualView extends PureComponent {
  render() {
    const { data } = this.props.editor_ui_value;
    let $$data = data;
    return <div className={style.layout}>{render_formFactory($$data)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
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
)(EditorVisualView);
