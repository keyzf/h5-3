import React, { PureComponent } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

class RichTextEditor extends PureComponent {
  render() {
    const editorProps = {
      contentFormat: 'html',
      contentId: this.props.data.get('index_number'),
      initialContent: this.props.data.get('html_content'),
      onHTMLChange: content => {
        console.log(content);
        this.props.func(content);
      },
      height: 0,
      controls: [
        'undo',
        'redo',
        'split',
        'text-color',
        'bold',
        'italic',
        'font-size',
        'text-align',
        'underline',
        'link',
      ],
      colors: [
        '#000000',
        '#333333',
        '#666666',
        '#999999',
        '#cccccc',
        '#ffffff',
        '#61a951',
        '#16a085',
        '#07a9fe',
        '#003ba5',
        '#8e44ad',
        '#f32784',
        '#FF5B5C',
        '#d35400',
        '#f39c12',
        '#fdda00',
        '#7f8c8d',
        '#2c3e50',
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
      allowSetTextBackgroundColor: false,
    };
    return <BraftEditor {...editorProps} />;
  }
}

export default RichTextEditor;
