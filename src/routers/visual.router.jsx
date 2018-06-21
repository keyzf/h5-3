/**
 * visual 所有路由文件
 */
import Loadable from "react-loadable";
import { page_loading } from "./transition_animation/page.animation";
import { component_loading } from "./transition_animation/component.animation";

/**
 * 主页面懒加载
 */
export const VisualLoadable = Loadable({
  loader: () => import("../http/visual/visual.page"), // 文件路径
  loading: page_loading, // 加载时显示的组件
  timeout: 6000 // 超时时间
});

/**
 * 页面组件加载
 */
export const VisualContentLoadable = Loadable({
  loader: () => import("../http/visual/content.page"), // 文件路径
  loading: component_loading, // 加载时显示的组件
  timeout: 5000 // 超时时间
});
export const VisualUiShowLoadable = Loadable({
  loader: () => import("../http/visual/ui_show.page"), // 文件路径
  loading: component_loading, // 加载时显示的组件
  timeout: 5000 // 超时时间
});
export const VisualSideLoadable = Loadable({
  loader: () => import("../http/visual/side.page"), // 文件路径
  loading: component_loading, // 加载时显示的组件
  delay: 300,
  timeout: 5000 // 超时时间
});
export const VisualHeaderLoadable = Loadable({
  loader: () => import("../http/visual/header.page"), // 文件路径
  loading: component_loading, // 加载时显示的组件
  delay: 300,
  timeout: 5000 // 超时时间
});
export const VisualEditorLoadable = Loadable({
  loader: () => import("../http/visual/editor.page"), // 文件路径
  loading: component_loading, // 加载时显示的组件
  delay: 300,
  timeout: 5000 // 超时时间
});

/**
 * 工具类组件
 */
export const VisualRichEditorLoadable = Loadable({
  loader: () => import("../containers/visual/editor/rich_editor"), // 文件路径
  loading: component_loading, // 加载时显示的组件
  delay: 300,
  timeout: 5000 // 超时时间
});

