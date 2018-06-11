import Loadable from 'react-loadable';
import { page_Loading } from './load_style';

const VisualLoadable = Loadable({
  loader: () => import('../page/visual/visual.page'), // 文件路径
  loading: page_Loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000, // 超时时间
});
const VisualContentLoadable = Loadable({
  loader: () => import('../containers/visual/content.page'), // 文件路径
  loading: page_Loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000, // 超时时间
});
const VisualSideLoadable = Loadable({
  loader: () => import('../page/visual/side.page'), // 文件路径
  loading: page_Loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000, // 超时时间
});
const VisualHeaderLoadable = Loadable({
  loader: () => import('../page/visual/header.page'), // 文件路径
  loading: page_Loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000, // 超时时间
});
const VisualEditorLoadable = Loadable({
  loader: () => import('../containers/visual/editor.page'), // 文件路径
  loading: page_Loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000, // 超时时间
});

export {
  VisualLoadable,
  VisualContentLoadable,
  VisualEditorLoadable,
  VisualHeaderLoadable,
  VisualSideLoadable,
};
