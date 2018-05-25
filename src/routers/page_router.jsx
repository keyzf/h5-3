import Loadable from 'react-loadable';
import { page_Loading } from './load_style';

export const VisualLoadable = Loadable({
  loader: () => import('../app/http/visual/visual.jsx'), // 文件路径
  loading: page_Loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000, // 超时时间
});

// export const TemplateLoadable = Loadable({
//   loader: () => import("../app/template/template"), // 文件路径
//   loading: page_Loading, // 加载时显示的组件
//   delay: 300, // 延迟300毫秒加载
//   timeout: 10000 // 超时时间
// });
//
export const PreviewLoadable = Loadable({
  loader: () => import('../app/http/preview/preview'), // 文件路径
  loading: page_Loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000, // 超时时间
});
//
//
// export const ReleaseLoadable = Loadable({
//   loader: () => import('../app/release/release'), // 文件路径
//   loading: page_Loading, // 加载时显示的组件
//   delay: 300, // 延迟300毫秒加载
//   timeout: 10000, // 超时时间
// });
//
// export const H5showLoadable = Loadable({
//   loader: () => import('../app/h5show/h5show_view'), // 文件路径
//   loading: page_Loading, // 加载时显示的组件
//   delay: 300, // 延迟300毫秒加载
//   timeout: 10000, // 超时时间
// });
