import * as React from "react";
import BraftEditor from "braft-editor";
import ColorPicker from "braft-extensions/dist/color-picker";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";
import { Alert, Card, notification } from "antd";

interface IProps {
  action: any;
  error: boolean;
  data: any;
}

interface IState {
  editorState: any;
  id: string;
  isLegal: boolean;
}

// @ts-ignore
BraftEditor.use(
  ColorPicker({
    includeEditors: ["editor-with-color-picker"],
    theme: "light" // 支持dark和light两种主题，默认为dark
  })
);

class RichTextEditor extends React.PureComponent<IProps, IState> {
  state = {
    // 创建一个空的editorState作为初始值
    // @ts-ignore
    editorState: BraftEditor.createEditorState(null),
    id: "",
    isLegal: true
  };

  componentDidMount() {
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
    this.setState({
      id: this.props.data.base.index,
      // @ts-ignore
      editorState: BraftEditor.createEditorState(this.props.data.base.html)
    });
  }

  componentDidUpdate() {
    if (this.state.id !== this.props.data.base.index) {
      this.setState({
        id: this.props.data.base.index,
        // @ts-ignore
        editorState: BraftEditor.createEditorState(this.props.data.base.html)
      });
    }
  }

  handleEditorChange = (editorState: any) => {
    this.setState({ editorState });
    const htmlContent = this.state.editorState.toHTML();
    const filter = () => {
      // 多个敏感词，这里直接以数组的形式展示出来
      const arrMg = [
        "盆友圈",
        "好友圈",
        "朋友圈",
        "集赞",
        "积赞",
        "积攒",
        "转发",
        "返现",
        "分享"
      ];

      // 显示的内容--showContent
      let showContent = htmlContent;

      for (let i = 0; i < arrMg.length; i++) {
        // 创建一个正则表达式
        let r = new RegExp(arrMg[i], "ig");

        showContent = showContent.replace(r, "*");
      }

      if (showContent !== htmlContent) {
        this.setState({ isLegal: false });
      } else {
        this.setState({ isLegal: true });
      }

      this.props.action(showContent);
    };
    filter();
  };

  render() {
    const { editorState, id } = this.state;
    const editorProps = {
      contentId: id,
      value: editorState,
      onChange: this.handleEditorChange,
      colors: [
        "#000000",
        "#333333",
        "#666666",
        "#999999",
        "#cccccc",
        "#ffffff",
        "#61a951",
        "#16a085",
        "#07a9fe",
        "#003ba5",
        "#8e44ad",
        "#f32784",
        "#FF5B5C",
        "#d35400",
        "#f39c12",
        "#fdda00",
        "#7f8c8d",
        "#2c3e50"
      ],
      controls: [
        "undo",
        "redo",
        "split",
        "text-color",
        "bold",
        "hr",
        "strike-through",
        "italic",
        "font-size",
        "text-align",
        "underline",
        "letter-spacing",
        "line-height"
      ],
      excludeControls: [
        "indent",
        "separator",
        "superscript",
        "subscript",
        "remove-styles",
        "emoji",
        "headings",
        "list-ul",
        "list-ol",
        "blockquote",
        "code",
        "separator",
        "separator",
        "media",
        "separator",
        "clear"
      ]
    };

    // @ts-ignore

    return (
      <React.Fragment>
        <div>
          {this.state.isLegal ? (
            ""
          ) : (
            <Alert
              message={
                <div>
                  内容违规提示！<br/>
                  不能出现：集赞，诱导分享朋友圈等内容<br/>
                  详情查看 <a href={"http://www.e7wei.com/help/article/id/409.html"}>【内容规范】</a>

                </div>
              }
              type="error"
            />
          )}
        </div>
        <BraftEditor id={"editor-with-color-picker"} {...editorProps} />
      </React.Fragment>
    );
  }
}

export default RichTextEditor;
