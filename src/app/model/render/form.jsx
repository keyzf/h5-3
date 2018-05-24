import React from 'react';
import EditorText from '../editor/text_editoer';
// import EditorImg from "../editor/img_editoer";

export const render_form = data => {
  switch (
    data
      ? data
          .get('data')
          .get('customize')
          .get('name')
      : ''
  ) {
    case 'vertical_text':
      return <EditorText data={data} />;
    case 'horizontal_text':
      return <EditorText data={data} />;
    // case "one_text":
    //   return <EditorText data={data}/>;
    // case "two_text":
    //   return <EditorText data={data}/>;
    // case "three_text":
    //   return <EditorText data={data}/>;
    // case "four_text":
    //   return <EditorText data={data}/>;
    // case "five_text":
    //   return <EditorText data={data}/>;
    // case "six_text":
    //   return <EditorText data={data}/>;
    // case "seven_text":
    //   return <EditorText data={data}/>;
    // case "up_img":
    //   return <EditorImg data={data}/>;
    // case "grid_img":
    //   return <EditorImg data={data}/>;
    // case "list_img":
    //   return <EditorImg data={data}/>;
    // case "slider_img":
    //   return <EditorImg data={data}/>;
    // case "carousel_img":
    //   return <EditorImg data={data}/>;
    //   case "music":
    //     return <EditorMusic data={data}/>;
    //   case "video":
    //     return <EditorVideo data={data}/>;
    //   case "grid_mall":
    //     return <EditorMall data={data}/>;
    //   case "list_mall":
    //     return <EditorMall data={data}/>;
    //   case "form":
    //     return <EditorForm data={data}/>;
    //   case "button":
    //     return <EditorButton data={data}/>;
    default:
      return '';
  }
};
