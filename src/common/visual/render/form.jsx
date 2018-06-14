import React from 'react';
import EditorText from '../editor/text_editoer';
import EditorImg from '../editor/img_editoer';
import EditorMusic from '../editor/music_editor';
import EditorVideo from '../editor/video_editor';
import EditorMall from '../editor/mall_editoer';
import EditorButton from '../editor/button_editor';
import EditorForm from '../editor/form_editor';

/**
 * 接收数据，返回相对应的数据表 很重要的一个函数
 * @param data
 * @returns {*}
 */
export const render_form = data => {
  switch (data ? data.getIn(['data', 'customize', 'name']) : '') {
    case 'vertical_text':
      return <EditorText data={data} />;
    case 'horizontal_text':
      return <EditorText data={data} />;

    case 'one_text':
      return <EditorText data={data} />;
    case 'two_text':
      return <EditorText data={data} />;
    case 'three_text':
      return <EditorText data={data} />;
    case 'four_text':
      return <EditorText data={data} />;
    case 'five_text':
      return <EditorText data={data} />;
    case 'six_text':
      return <EditorText data={data} />;
    case 'seven_text':
      return <EditorText data={data} />;
    case 'eight_text':
      return <EditorText data={data} />;
    case 'nine_text':
      return <EditorText data={data} />;
    case 'ten_text':
      return <EditorText data={data} />;
    case 'eleven_text':
      return <EditorText data={data} />;
    case 'twelve_text':
      return <EditorText data={data} />;
    case 'thirteen_text':
      return <EditorText data={data} />;
    case 'fourteen_text':
      return <EditorText data={data} />;
    case 'fifteen_text':
      return <EditorText data={data} />;
    case 'sixteen_text':
      return <EditorText data={data} />;
    case 'seventeen_text':
      return <EditorText data={data} />;

    case 'single_img':
      return <EditorImg data={data} />;
    case 'grid_img':
      return <EditorImg data={data} />;
    case 'list_img':
      return <EditorImg data={data} />;
    case 'slider_img':
      return <EditorImg data={data} />;
    case 'carousel_img':
      return <EditorImg data={data} />;
    case 'one_img':
      return <EditorImg data={data} />;

    case 'music':
      return <EditorMusic data={data} />;
    case 'video':
      return <EditorVideo data={data} />;
    case 'grid_mall':
      return <EditorMall data={data} />;
    case 'list_mall':
      return <EditorMall data={data} />;
    case 'one_mall':
      return <EditorMall data={data} />;
    case 'form':
      return <EditorForm data={data} />;
    case 'one_form':
      return <EditorForm data={data} />;
    case 'button':
      return <EditorButton data={data} />;
    case 'one_button':
      return <EditorButton data={data} />;
    default:
      return '';
  }
};
