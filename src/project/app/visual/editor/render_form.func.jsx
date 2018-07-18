import React from 'react';
import EditorText from './text/text_editoer';
import EditorImg from './img/img_editoer';
import EditorMusic from './music/music_editor';
import EditorVideo from './video/video_editor';
import EditorMall from './mall/mall_editoer';
import EditorButton from './button/button_editor';
import EditorForm from './form/form_editor';

/**
 * 接收数据，返回相对应的数据表 很重要的一个函数
 * @param data
 * @returns {*}
 */
const render_formFunc = data => {
  console.log('render_formFunc');
  switch (data ? data.getIn(['data', 'customize', 'type']) : '') {
    case 'text':
      console.log('EditorText');
      return <EditorText data={data} />;
    case 'img':
      console.log('EditorImg');
      return <EditorImg data={data} />;
    case 'music':
      console.log('music');
      return <EditorMusic data={data} />;
    case 'video':
      console.log('video');
      return <EditorVideo data={data} />;
    case 'mall':
      console.log('mall');
      return <EditorMall data={data} />;
    case 'form':
      console.log('form');
      return <EditorForm data={data} />;
    case 'button':
      console.log('button');
      return <EditorButton data={data} />;
    default:
      return '';
  }
};

export { render_formFunc };
