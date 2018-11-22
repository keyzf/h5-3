import * as React from "react";
import { css } from "emotion";
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import Store from "../../typing/store";
import ShareEdit from "../../components/edit/share/ShareEdit";
import EditKeyHelp from "../../components/edit/key-help";
import TextEdit from "../../components/edit/text/text-edit";
import PictureEdit from "../../components/edit/pitcure/PictureEdit";
import VideoEditor from "../../components/edit/videoEdit";
import ButtonEdit from "../../components/edit/button/button-edit";
import FormEdit from "../../components/edit/form/FormEdit";

const MakeEdit = React.memo(() => {
  const { type } = useMappedState(useCallback((state: Store) => ({
    type: state.edit.type
  }), []));
  /**
   * @desc  渲染相应的编辑界面
   * @param  type - 类型
   */
  const renderEditor = (type: string): object => {
    switch (type) {
      case "form":
        return <FormEdit/>;
      case "button":
        return <ButtonEdit/>;
      case "video":
        return <VideoEditor/>;
      case "picture":
        return <PictureEdit/>;
      case "text":
        return <TextEdit/>;
      case "hot-key":
        return <EditKeyHelp/>;
      default:
        return <ShareEdit/>;
    }
  };
  return (
    <React.Fragment>
      <div className={style.title}>{name(type)}</div>
      {renderEditor(type)}
    </React.Fragment>
  );
});

/**
 * @desc 样式
 */
const style = {
  title: css`
    pointer-events: none;
    user-select: none;
    height: 40px;
    background: #ccd5db;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  `
};

/**
 * @desc 根据接受的值显示相应的中文字符
 * @param type - 类型
 */
const name = (type: string): string => {
  switch (type) {
    case "text":
      return "文本组件";
    case "picture":
      return "图片组件";
    case "video":
      return "视频组件";
    case "button":
      return "按钮组件";
    case "form":
      return "表单组件";
    case "hot-key":
      return "快捷键参考";
    default:
      return "页面分享设置";
  }
};


export default MakeEdit;
