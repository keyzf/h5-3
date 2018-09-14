import Loadable from 'react-loadable';
import { LoadingAnimation } from './loadingAnimation';

const VisualRouter = Loadable({
  loader: () => import('../app/visual/visual'), // 文件路径
  loading: LoadingAnimation, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
const PreviewRouter = Loadable({
  loader: () => import('../app/preview/preview'), // 文件路径
  loading: LoadingAnimation, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
const ReleaseRouter = Loadable({
  loader: () => import('../app/release/release'),
  loading: () => {
    return '';
  }, // 加载时显示的组件
  timeout: 6000, // 超时时间
});

export { VisualRouter, PreviewRouter, ReleaseRouter };
