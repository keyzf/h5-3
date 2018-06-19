import Loadable from 'react-loadable';
import { page_loading } from './transition_animation/page.animation';

export const PreviewLoadable = Loadable({
  loader: () => import('../http/preview/preview.page'), // 文件路径
  loading: page_loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000, // 超时时间
});
