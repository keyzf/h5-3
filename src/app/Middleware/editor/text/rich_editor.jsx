import React, { PureComponent } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

class RichTextEditor extends PureComponent {
  render() {
    const editorProps = {
      contentFormat: 'html',
      contentId: this.props.data.get('index_number'),
      initialContent: this.props.data.get('html_content'),
      onHTMLChange: content => this.props.func(content),
      controls: [
        'undo',
        'redo',
        'split',
        'text-color',
        'bold',
        'italic',
        'font-size',
        'text-align',
        'remove-styles',
        'underline',
        'list_ul',
        'list_ol',
        'headings',
        'letter-spacing',
        'superscript',
        'subscript',
        'clear',
      ],
      excludeControls: [
        'blockquote',
        'media',
        'emoji',
        'font-family',
        'code',
        'line-height',
        'strike-through',
        'indent',
      ],
    };
    return <BraftEditor {...editorProps} />;
  }
}

export default RichTextEditor;
