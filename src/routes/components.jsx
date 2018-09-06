import Loadable from 'react-loadable';
import { LoadingAnimation } from './loadingAnimation';

const MusicForm = Loadable({
  loader: () => import('../components/Middleware/upload/_music_form'), // 文件路径
  loading: LoadingAnimation, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
const UploadImgForm = Loadable({
  loader: () => import('../components/Middleware/upload/_img_form.upload'), // 文件路径
  loading: LoadingAnimation, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
const FormUi = Loadable({
  loader: () => import('../ui/form/recommend/form_ui_render'), // 文件路径
  loading: LoadingAnimation, // 加载时显示的组件
  timeout: 6000, // 超时时间
});

export { MusicForm, UploadImgForm, FormUi };
