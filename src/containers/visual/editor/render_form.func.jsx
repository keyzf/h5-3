import React from 'react';
import EditorText from './ui_editor/text_editoer';
import EditorImg from './ui_editor/img_editoer';
import EditorMusic from './ui_editor/music_editor';
import EditorVideo from './ui_editor/video_editor';
import EditorMall from './ui_editor/mall_editoer';
import EditorButton from './ui_editor/button_editor';
import EditorForm from './ui_editor/form_editor';

/**
 * 接收数据，返回相对应的数据表 很重要的一个函数
 * @param data
 * @returns {*}
 */
const render_formFunc = data => {
  switch (data ? data.getIn(['data', 'customize', 'type']) : '') {
    case 'text':
      return <EditorText data={data} />;
    case 'img':
      return <EditorImg data={data} />;
    case 'music':
      return <EditorMusic data={data} />;
    case 'video':
      return <EditorVideo data={data} />;
    case 'mall':
      return <EditorMall data={data} />;
    case 'form':
      return <EditorForm data={data} />;
    case 'button':
      return <EditorButton data={data} />;
    default:
      return '';
  }
};

export { render_formFunc };
