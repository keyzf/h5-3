import * as React from "react";
import { Spin } from "antd";
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import Store from "../../typing/store";
import { css } from "glamor";

/**
 * 样式
 */
const styleLoading = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto"
});
const title = css({
  pointerEvents: "none",
  userSelect: "none",
  height: "40px",
  background: "#ccd5db",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto"
});

/**
 * 路由拆分
 */
const ShareEdit = React.lazy(() =>
  import("../../components/edit/share/ShareEdit")
);
const EditKeyHelp = React.lazy(() => import("../../components/edit/key-help"));
const TextEdit = React.lazy(() =>
  import("../../components/edit/text/text-edit")
);
const PictureEdit = React.lazy(() =>
  import("../../components/edit/pitcure/PictureEdit")
);
const VideoEditor = React.lazy(() => import("../../components/edit/videoEdit"));
const ButtonEdit = React.lazy(() =>
  import("../../components/edit/button/button-edit")
);
const FormEdit = React.lazy(() =>
  import("../../components/edit/form/FormEdit")
);

/**
 * loading 样式
 */
const loading = (
  <div {...styleLoading}>
    <Spin delay={300} size="large" tip="拼命加载中..." />
  </div>
);

const MakeEdit = React.memo(() => {
  const { type } = useMappedState(
    useCallback(
      (state: Store) => ({
        type: state.edit.type
      }),
      []
    )
  );
  /**
   * @desc  渲染相应的编辑界面
   * @param  type - 类型
   */
  const renderEditor = (type: string): object => {
    switch (type) {
      case "form":
        return <FormEdit />;
      case "button":
        return <ButtonEdit />;
      case "video":
        return <VideoEditor />;
      case "picture":
        return <PictureEdit />;
      case "text":
        return <TextEdit />;
      case "hot-key":
        return <EditKeyHelp />;
      default:
        return <ShareEdit />;
    }
  };
  return (
    <React.Fragment>
      <div {...title}>{name(type)}</div>
      <React.Suspense fallback={loading}>{renderEditor(type)}</React.Suspense>
    </React.Fragment>
  );
});

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
      return "分享设置";
  }
};

export default MakeEdit;
