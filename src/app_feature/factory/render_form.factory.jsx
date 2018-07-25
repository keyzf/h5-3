import React from 'react';
import EditorText from '../editor/text/text_editoer';
import EditorImg from '../editor/img/img_editoer';
import EditorMusic from '../editor/music/music_editor';
import EditorVideo from '../editor/video/video_editor';
import EditorMall from '../editor/mall/mall_editoer';
import EditorButton from '../editor/button/button_editor';
import EditorForm from '../editor/form/form_editor';

/**
 * 接收数据，返回相对应的数据表 很重要的一个函数
 * @param data
 * @returns {*}
 */
export const render_formFactory = data => {
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
