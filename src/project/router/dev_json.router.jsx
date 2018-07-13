import LoadableVisibility from 'react-loadable-visibility/react-loadable';
import { page_loading } from './transition_animation/page.animation';

/**
 * 主页面懒加载
 */
const DevJsonLoadable = LoadableVisibility({
  loader: () => import('../app/dev_json/dev_json'), // 文件路径
  loading: page_loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});

export { DevJsonLoadable };
