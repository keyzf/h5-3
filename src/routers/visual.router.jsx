/**
 * visual 所有路由文件
 */
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import { page_loading } from './transition_animation/page.animation';
import { component_loading } from './transition_animation/component.animation';

/**
 * 主页面懒加载
 */
const VisualLoadable = LoadableVisibility({
  loader: () => import('../http/visual/visual.page'), // 文件路径
  loading: page_loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});

/**
 * 工具类组件
 */
const VisualRichEditorLoadable = LoadableVisibility({
  loader: () => import('../containers/visual/editor/ui_editor/rich_editor'), // 文件路径
  loading: component_loading, // 加载时显示的组件
  delay: 300,
  timeout: 5000, // 超时时间
});

export { VisualLoadable, VisualRichEditorLoadable };
