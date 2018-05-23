import React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/braft.css";
import { connect } from "react-redux";
import { select_action } from "../../redux/action";

/**
 * 主class
 */
class EditorTextForm extends React.Component {
  onHTMLChange = content => {
    // 创建数组
    const  $$number  = this.props.choose_value.data.get('number');
    const $$select_data = this.props.select_value.data;
    const $$updata_html_content = $$select_data.setIn([$$number,'customize','html_content'],content);
    // // 发送数据
    this.props.select_upData($$updata_html_content, '', false);
  };

  render() {
    const editorProps = {
      height: 500,
      contentFormat: "html",
      contentId: this.props.data.get('index_number'),
      initialContent: this.props.data.get('html_content'),
      onHTMLChange: this.onHTMLChange,
      controls: [
        "undo",
        "redo",
        "split",
        "text-color",
        "bold",
        "italic",
        "font-size",
        "emoji",
        "text-align",
        "font-family",
        "remove-styles",
        "headings",
        "underline",
        "line-height",
        "list_ul",
        "list_ol",
        "letter-spacing"
      ],
      excludeControls: [
        "indent",
        "strike-through",
        "superscript",
        "subscript",
        "blockquote",
        "code",
        "split",
        "media",
        "clear"
      ]
    };
    return <BraftEditor {...editorProps} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error))
  };
}

const mapStateToProps = state => {
  return {
    choose_value: state.choose_reducer,
    select_value: state.select_reducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditorTextForm);
