import Loadable from 'react-loadable';
import { LoadingAnimation } from './loadingAnimation';

const MusicForm = Loadable({
  loader: () => import('../components/upLoad/musicUpload'), // 文件路径
  loading: LoadingAnimation, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
const UploadImgForm = Loadable({
  loader: () => import('../components/upLoad/imgUpload'), // 文件路径
  loading: LoadingAnimation, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
const FormUi = Loadable({
  loader: () => import('../ui/form/recommend/form_ui_render'), // 文件路径
  loading: LoadingAnimation, // 加载时显示的组件
  timeout: 6000, // 超时时间
});

export { MusicForm, UploadImgForm, FormUi };
