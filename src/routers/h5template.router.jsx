import Loadable from 'react-loadable';
import { page_Loading } from './load_style';


export const H5TemplateLoadable = Loadable({
  loader: () => import("../page/h5_template/h5_template.page"), // 文件路径
  loading: page_Loading, // 加载时显示的组件
  delay: 300, // 延迟300毫秒加载
  timeout: 10000 // 超时时间
});


