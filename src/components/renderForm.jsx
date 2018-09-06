import React from 'react';
import EditorText from '../ui/text/text_editoer';
import EditorImg from '../ui/img/img_editoer';
import EditorVideo from '../ui/video/video_editor';
import EditorButton from '../ui/button/button_editor';
import EditorForm from '../ui/form/form_editor';

/**
 * 接收数据，返回相对应的数据表 很重要的一个函数
 * @param data
 * @returns {*}
 */
export const renderForm = data => {
  switch (data ? data.getIn(['data', 'customize', 'type']) : '') {
    case 'text':
      return <EditorText data={data} />;
    case 'img':
      return <EditorImg data={data} />;
    case 'video':
      return <EditorVideo data={data} />;
    case 'form':
      return <EditorForm data={data} />;
    case 'button':
      return <EditorButton data={data} />;
    default:
      return '';
  }
};
