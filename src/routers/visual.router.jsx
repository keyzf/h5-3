/**
 * visual 所有路由文件
 */
import Loadable from 'react-loadable';
import { page_loading } from './transition_animation/page.animation';
import { component_loading } from './transition_animation/component.animation';

/**
 * 主页面懒加载
 */
const VisualLoadable = Loadable({
  loader: () => import('../http/visual/visual.page'), // 文件路径
  loading: page_loading, // 加载时显示的组件
  timeout: 5000, // 超时时间
});

/**
 * 页面组件加载
 */
const VisualContentLoadable = Loadable({
  loader: () => import('../containers/visual/content.page'), // 文件路径
  loading: component_loading, // 加载时显示的组件
  timeout: 5000, // 超时时间
});

const VisualUiShowLoadable = Loadable({
  loader: () => import('../http/visual/ui_show.page'), // 文件路径
  loading: component_loading, // 加载时显示的组件
  timeout: 5000, // 超时时间
});
const VisualSideLoadable = Loadable({
  loader: () => import('../http/visual/side.page'), // 文件路径
  loading: component_loading, // 加载时显示的组件
  timeout: 5000, // 超时时间
});
const VisualHeaderLoadable = Loadable({
  loader: () => import('../http/visual/header.page'), // 文件路径
  loading: component_loading, // 加载时显示的组件
  timeout: 5000, // 超时时间
});
const VisualEditorLoadable = Loadable({
  loader: () => import('../containers/visual/editor.page'), // 文件路径
  loading: component_loading, // 加载时显示的组件
  timeout: 5000, // 超时时间
});

export {
  VisualLoadable,
  VisualContentLoadable,
  VisualEditorLoadable,
  VisualHeaderLoadable,
  VisualSideLoadable,
  VisualUiShowLoadable,
};
