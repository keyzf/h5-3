/**
 * 富文本编辑器
 */
import React, { PureComponent } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

/**
 * rich text editor component
 * receive data :
 *        1. html
 *        2. content_id
 *        3. fun -> callback
 */
class RichTextEditor extends PureComponent {
  /**
   * call back content when html change
   * @param content
   */
  onHTMLChange = content => {
    this.props.callBack(content);
  };

  render() {
    const editorProps = {
      height: 400,
      contentFormat: 'html',
      contentId: this.props.data.get('index_number'),
      initialContent: this.props.data.get('html_content'),
      onHTMLChange: this.onHTMLChange,
      controls: [
        'undo',
        'redo',
        'split',
        'text-color',
        'bold',
        'italic',
        'font-size',
        'emoji',
        'text-align',
        'font-family',
        'remove-styles',
        'underline',
        'list_ul',
        'list_ol',
        'line-height',
        'headings',
        'code',
        'clear',
        'indent',
        'letter-spacing',
        'strike-through',
        'superscript',
        'subscript',
      ],
      excludeControls: ['blockquote', 'media'],
    };
    return <BraftEditor {...editorProps} />;
  }
}

export default RichTextEditor;
