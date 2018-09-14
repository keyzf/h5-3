import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { renderForm } from '../../../components/renderForm';
import style from './editor.module.scss';

class EditorVisual extends PureComponent {
  render() {
    const { data } = this.props.editor_ui_value;
    return <div className={style.layout}>{renderForm(data)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    editor_ui_value: state.editorUi_rdc,
  };
};

export default connect(mapStateToProps)(EditorVisual);
