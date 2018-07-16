import React, { PureComponent } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

class RichTextEditor extends PureComponent {
  render() {
    console.log(this.props.data.get('index_number'));
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
