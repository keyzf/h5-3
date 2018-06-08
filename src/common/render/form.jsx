import React from "react";
import EditorText from "../../containers/visual/editor/text_editoer";
import EditorImg from "../../containers/visual/editor/img_editoer";
import EditorMusic from "../../containers/visual/editor/music_editor";
import EditorVideo from "../../containers/visual/editor/video_editor";
import EditorMall from "../../containers/visual/editor/mall_editoer";
import EditorButton from "../../containers/visual/editor/button_editor";
import EditorForm from "../../containers/visual/editor/form_editor";

/**
 * 接收数据，返回相对应的数据表 很重要的一个函数
 * @param data
 * @returns {*}
 */
export const render_form = data => {
  switch (data ? data.getIn(["data", "customize", "name"]) : "") {
    case "vertical_text":
      return <EditorText data={data}/>;
    case "horizontal_text":
      return <EditorText data={data}/>;

    case "one_text":
      return <EditorText data={data}/>;
    case "two_text":
      return <EditorText data={data}/>;
    case "three_text":
      return <EditorText data={data}/>;
    case "four_text":
      return <EditorText data={data}/>;
    case "five_text":
      return <EditorText data={data}/>;
    case "six_text":
      return <EditorText data={data}/>;
    case "seven_text":
      return <EditorText data={data}/>;


    case "single_img":
      return <EditorImg data={data}/>;
    case "grid_img":
      return <EditorImg data={data}/>;
    case "list_img":
      return <EditorImg data={data}/>;
    case "slider_img":
      return <EditorImg data={data}/>;
    case "carousel_img":
      return <EditorImg data={data}/>;

    case "music":
      return <EditorMusic data={data}/>;
    case "video":
      return <EditorVideo data={data}/>;
    case "grid_mall":
      return <EditorMall data={data}/>;
    case "list_mall":
      return <EditorMall data={data}/>;
    case "form":
      return <EditorForm data={data}/>;
    case "button":
      return <EditorButton data={data}/>;
    default:
      return "";
  }
};
