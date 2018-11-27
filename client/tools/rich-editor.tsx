import * as React from "react";
import BraftEditor from "braft-editor";
// @ts-ignore
import ColorPicker from "braft-extensions/dist/color-picker";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/color-picker.css";


interface IProps {
    action: any
    error: boolean;
    data: any;
}

interface IState {
    editorState: any;
    id: string;
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
        id: ""
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
        this.setState({editorState});
        const htmlContent = this.state.editorState.toHTML();
        this.props.action(htmlContent);
    };

    render() {
        const {editorState, id} = this.state;
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
        return <BraftEditor id="editor-with-color-picker" {...editorProps} />;
    }
}

export default RichTextEditor;
